"use client"
import Link from 'next/link';
import {FC} from 'react'
import {useSession, signOut} from 'next-auth/react'
import {usePathname} from 'next/navigation'

type NavLink = {
  href: string;
  title: string;
}

type TNavigationProps = {
  navLinks: NavLink[]
}

const Navigation: FC<TNavigationProps> = ({navLinks}) => {
  const pathname = usePathname();
  const session = useSession();
  console.log(session);
  

  return (
    <div className="navigation">
      {navLinks.map((navLink) => {
        const isActive = pathname === navLink.href;
  
        return (
        <Link key={navLink.href} href={navLink.href} className={isActive ? "active" : ''}>{navLink.title}</Link>
      )})}

      {session?.data && <Link href="/profile">Profile</Link>}
      {session?.data ? <Link href="#" onClick={() => signOut({
        callbackUrl: "/"
      })}>Sign Out</Link> : <Link href="/api/auth/signin">Sign In</Link>}
    </div>
  )
}

export default Navigation