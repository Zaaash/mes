import * as imgs from "../utils/helpers/images"

import { useEffect, useRef, useState } from "react"

import Image from "next/image"
import Language from "./language"
import Link from "next/link"
import Navigation from "./navigation"
import styles from "./header.module.scss"
import { useRouter } from "next/router"

//////////////////////////////////////////////////////////////////////////////////////
// Dictionnary
//////////////////////////////////////////////////////////////////////////////////////
const txts: any = {
  // English
  //---------------------------------------------------------------------------------
  en: {
    account: "Account",
  },

  // French
  //---------------------------------------------------------------------------------
  fr: {
    account: "Mon compte",
  },
}

//////////////////////////////////////////////////////////////////////////////////////
// Component
//////////////////////////////////////////////////////////////////////////////////////
export default function Header() {
  // Declarations
  //---------------------------------------------------------------------------------
  const router = useRouter()
  const wording = txts[`${router.locale}`]

  const [isHP, setIsHP] = useState(false)

  const navRef = useRef<any>()

  useEffect(() => {
    if (router.pathname === "/") setIsHP(true)
    else setIsHP(false)

    // Navigation scroll
    const onScrollHandler = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 150) navRef.current.classList.add(styles.inScroll)
      else navRef.current.classList.remove(styles.inScroll)
    }

    document.addEventListener("scroll", onScrollHandler, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScrollHandler)
    }
  }, [router.pathname])

  // Component rendering
  //---------------------------------------------------------------------------------
  return (
    <header
      id={styles.header}
      ref={navRef}
      className={isHP ? styles.hp : ""}
    >
      <div className={"containerMax " + styles.container}>
        {/* Logo */}
        <Link href="/">
          <div id={styles.logo}>
            <Image
              src={imgs.logoList}
              alt=""
            />
          </div>
        </Link>

        {/* Navigation */}
        <Navigation />
      </div>
    </header>
  )
}
