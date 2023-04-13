import * as pictosSol from "@fortawesome/free-solid-svg-icons"

import { useRef, useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import styles from "./navigation.module.scss"
import { useRouter } from "next/router"

//////////////////////////////////////////////////////////////////////////////////////
// Dictionnary
//////////////////////////////////////////////////////////////////////////////////////
const txts: any = {
  fr: {
    menu: [
      { page: "Accueil", url: "/" },
      { page: "MES", url: "/groupe/mes" },
      { page: "I2S", url: "/groupe/i2s" },
      { page: "C2S", url: "/groupe/c2s" },
      { page: "Offre", url: "/offre" },
      { page: "Réalisations", url: "/realisations" },
      { page: "Carrière", url: "/carrieres/poste" },
      { page: "Contact", url: "/contact" },
      // { picto: pictosSol.faSearch, url: "" },
    ],
  },
}

//////////////////////////////////////////////////////////////////////////////////////
// Component
//////////////////////////////////////////////////////////////////////////////////////
export default function Navigation() {
  // Declarations
  //---------------------------------------------------------------------------------
  const router = useRouter()
  const wording = txts[`${router.locale}`]

  const [showBurger, setShowBurger] = useState(false)
  const navRef = useRef<any>()

  // Function
  //////////////////////////////////////////////////////////////////////////////////////
  // Prepare the menu
  //-----------------------------------------------------------------------------------
  const Menu = () => {
    return (
      <ul id={styles.menu}>
        {wording.menu.map((item: any, key: number) => {
          return item.picto ? (
            <li key={key}>
              <FontAwesomeIcon icon={item.picto} />
            </li>
          ) : router.asPath === item.url ? (
            <li key={key}>{item.page}</li>
          ) : (
            <li key={key}>
              <Link href={item.url}>{item.page}</Link>
            </li>
          )
        })}
      </ul>
    )
  }

  // Toggle the burger
  //-----------------------------------------------------------------------------------
  const handleBurgerOn = () => {
    setShowBurger(!showBurger)
  }

  const handleBurgerOff = () => {
    if (showBurger) setShowBurger(false)
  }

  // Component rendering
  //////////////////////////////////////////////////////////////////////////////////////
  return (
    <nav
      id={styles.navigation}
      ref={navRef}
      className={`${showBurger ? styles.on : ""}`}
      tabIndex={0}
      onClick={handleBurgerOff}
    >
      {/* Menu */}
      <Menu />

      {/* Burger */}
      <div
        id={styles.burger}
        onClick={handleBurgerOn}
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  )
}
