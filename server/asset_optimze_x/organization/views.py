from django.shortcuts import render
from organization.serializers import *
from account.renders import UserRenderer
from account.models import User
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.contrib.auth.tokens import default_token_generator
from account.utils import Util
from organization.models import *
from rest_framework import status, generics, views, viewsets, permissions, response


############## Register Organization #################
class OrganizationRegisterView(viewsets.ModelViewSet):
  permission_classes = [permissions.IsAuthenticated]
  renderer_classes = [UserRenderer]
  queryset = Organization.objects.all()
  serializer_class = organigationRegisterSerializer
  
  def create(self, request, *args, **kwargs):
    serializer = self.get_serializer(data = request.data)
    if serializer.is_valid():
      serializer.save(owner = self.request.user)
      user = self.request.user
      uid = urlsafe_base64_encode(force_bytes(user.id))
      token = default_token_generator.make_token(user)
      organization_name =  serializer.data.get('organization_name')    
      organization_name = urlsafe_base64_encode(force_bytes(organization_name))   
            
      link = "http://localhost:5173/api/organization/register/"
      print("uid", uid, " Token", token, " link", link, 'organizationName', organization_name)
      body = 'Click Following link to Active Your Account ' + link +  uid + '/'+ token + '/' + organization_name
      data = {
        'subject':'Active Your Account',
        'body':body,
        'to_email':user.email,
      }
      Util.send_email(data)

      return response.Response({'message':'Check mail Active Your Organization'}, status=status.HTTP_201_CREATED)
    return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
############## Active Organization ##################
class registerOrganizationVerify(views.APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, uid, token,organization_name, format = None):
    serializer = registerOrganizationVerifySerializer(data=request.data, context = {'uid':uid, 'token':token, 'organization_name':organization_name})
    if serializer.is_valid(raise_exception=True):

      return response.Response({
        'message':'Organization Account Active Successfully'
      })
    return response.Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)
          
 
############ Organization Get ##########
class OrganizationTotal(views.APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request):
        try:
            owner_organization = Organization.objects.filter(owner=request.user)
            owner_organization_data = []
            for i in owner_organization:
              dic = {}
              dic['id'] = i.id
              dic['organization_name'] = i.organization_name
              owner_organization_data.append(dic)
                 
            member_organizations = Organization.objects.filter(member=request.user)
            member_organization_data = []
            for i in member_organizations:
              dic = {}
              dic['id'] = i.id
              dic['organization_name'] = i.organization_name
              member_organization_data.append(dic)
            
            return response.Response({
                'owner_organizations': owner_organization_data,
                'member_organizations': member_organization_data},status=status.HTTP_200_OK
            )

        except Organization.DoesNotExist:
            return response.Response({'message': 'No organizations found'}, status=status.HTTP_404_NOT_FOUND)
          
########### Organization Member Request View #######
class addMemberView(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    renderer_classes = [UserRenderer]
    queryset = addMember.objects.all()
    serializer_class = addMemberSerializer
    
    def create(self, request, *args, **kwargs):
      serializer = self.get_serializer(data=request.data)
      serializer.is_valid(raise_exception=True)
       
      user = request.data.get('user')
      role = request.data.get('role')
      organization = request.data.get('organization')
      email = request.data.get('email')

      try:
        us = User.objects.get(id=user)
        if us == request.user:
          return response.Response("Email not Valid")
        else:
          try:
            already_added = Organization.objects.get(member=user)
            return response.Response("Alread added This User")
          except Organization.DoesNotExist: 
            serializer.save()
            uid = urlsafe_base64_encode(force_bytes(user))
            token =default_token_generator.make_token(us)
            org_id = urlsafe_base64_encode(force_bytes(organization))
            
            link = "http://localhost:5173/api/organization/add-user/"
            print("uid", uid, " Token", token, " link", link)
            body = 'Click Following link to confirm invited accepted ' + link +  uid + '/'+ token + '/' + org_id
            data = {
              'subject':'Invited Request',
              'body':body,
              'to_email':us.email,
            }
            Util.send_email(data)
            return response.Response({'message':"Invited Link send. Check Email"})
            
      except User.DoesNotExist:
        return response.Response({'message': "Not Register User"})
        
         
 ############## Active Organization ##################
class invitedActive(views.APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, uid, token,org_id, format = None):
    serializer = memberInvitedAcceptSerializer(data=request.data, context = {'uid':uid, 'token':token, 'org_id':org_id})
    if serializer.is_valid(raise_exception=True):
      
      return response.Response({
        'massage':'Organization Account Active Successfully'
      })
    return response.Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)    
      