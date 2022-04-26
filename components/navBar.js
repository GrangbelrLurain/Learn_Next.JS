import Link from 'next/link'
import { useRouter } from 'next/router'

export default function navBar() {
  const router = useRouter()
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href="about">
        <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
      </Link>
      <style jsx>
        {`
          a {
            color: green;
            text-decoration: none;
          }

          .active {
            color: red;
          }
        `}
      </style>
    </nav>
  )
}
