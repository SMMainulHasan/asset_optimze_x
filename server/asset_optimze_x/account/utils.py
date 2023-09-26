from django.core.mail import EmailMessage
import os

class Util:
  @staticmethod
  def send_email(data):
    email = EmailMessage(
      subject=data['subject'],
<<<<<<< HEAD
      body=data['body'],
      from_email=os.environ.get('EMAIL_FROM'),
      to=[data['to_email']]
    )
    email.send()
=======
      body = data['body'],
      from_email=os.environ.get('EMAIL_FROM'),
      to=[data['to_email']],    
    )
    email.send()
    
>>>>>>> 806a051d955290bff3b669c8aef3896dba9c1519
