import Link from "next/link"
import { FiBook, FiClipboard, FiGithub, FiMeh, FiSun, FiUser } from "react-icons/fi"
import styles from './TheHeader.module.css'
import ToggleTheme from "./ToggleTheme"

export default function TheHeader() {
  return (
    <header className={ styles.header }>
      <nav className={ `${styles.nav} h-full px-2 md:px-14 w-full flex justify-between` }>
        <div className={ `h-full flex justify-center items-center uppercase font-bold` }>
          <Link href='/'>
            MainIssues
          </Link>
        </div>
        <div className={`${styles.right} h-full grid gap-2 md:gap-8 grid-flow-col`}>
          <a>
            <Link href='/post'>
              <div>
                <span className="hidden md:block">Post</span>
                <FiBook className="md:hidden"/>
              </div>
            </Link>
          </a>
          <a>
            <Link href='/note'>
              <div>
                <span className="hidden md:block">Note</span>
                <FiClipboard className="md:hidden"/>
              </div>
            </Link>
          </a>
          <a>
            <Link href='/record'>
              <div>
                <span className="hidden md:block">Record</span>
                <FiMeh className="md:hidden"/>
              </div>
            </Link>
          </a>
          <a>
            <Link href='/about'>
              <div>
                <span className="hidden md:block">About</span>
                <FiUser className="md:hidden"/>
              </div>
            </Link>
          </a>
          <a>
            <ToggleTheme />
          </a>
          <a href="https://github.com/REND42" target='_blank' className="hidden md:block" rel="noreferrer" >
            <FiGithub/>
          </a>
        </div>
      </nav>
    </header>
  )
}
