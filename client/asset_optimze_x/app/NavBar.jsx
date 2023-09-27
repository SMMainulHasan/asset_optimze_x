import Link from "next/link"

const NavBar = () => {
  return (
    <div className="navbar bg-base-100    bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="">Product</Link></li>
              <li>
                <Link href="">Solutions</Link>
                <ul className="p-2">
                  <li><Link href="">Submenu 1</Link></li>
                  <li><Link href="">Submenu 2</Link></li>
                </ul>
              </li>
              <li><Link href="">Resources</Link></li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" href="/">Asset OptimizeX</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="">Item 1</Link></li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><Link href="">Submenu 1</Link></li>
                  <li><Link href="">Submenu 2</Link></li>
                </ul>
              </details>
            </li>
            <li><Link href="">Item 3</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn btn-outline text-Slate-50" href="/user/login">Your Asset</Link>
          <Link className="btn btn-active btn-primary ms-5" href="/user/register">Get Started</Link>
        </div>
      </div>
  )
}

export default NavBar