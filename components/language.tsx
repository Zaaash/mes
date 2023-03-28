import { useEffect, useRef, useState } from "react"

import styles from "./language.module.scss"
import { toast } from "react-toastify"
import { useRouter } from "next/router"

//////////////////////////////////////////////////////////////////////////////////////
// Dictionnary
//////////////////////////////////////////////////////////////////////////////////////
const languages = [
  { label: "language", language: "English", code: "en" },
  { label: "langue", language: "Français", code: "fr" },
]

//////////////////////////////////////////////////////////////////////////////////////
// Component
//////////////////////////////////////////////////////////////////////////////////////
export default function Language() {
  // Declarations
  //---------------------------------------------------------------------------------
  const [show, setShow] = useState(false)
  const router = useRouter()
  const lgList = useRef<any>()

  // Check if a Language cookie exists
  ////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const lg = localStorage.getItem("currentLg") || router.locale
    router.replace("", "", { shallow: true, locale: lg }) // URL update
  }, [router.locale])

  // Function
  // Show or hide the languages' list
  ////////////////////////////////////////////////////////////////////////
  const displayLanguages = () => {
    setShow(!show)
    if (!show) {
      lgList.current.classList.add(`${styles.open}`)
    } else {
      lgList.current.classList = ""
    }
  }

  // Function
  // Update the chosen language
  // parameters:
  //   code: the language code ('fr', 'en'...)
  ////////////////////////////////////////////////////////////////////////
  const selectLanguage = (code: any) => {
    localStorage.setItem("currentLg", code) // localStorage init
    router.replace("", "", { shallow: true, locale: code }) // URL update

    setShow(!show)
    toast("Language updated successfully")
  }

  // Function
  // Prepare the languages' list
  ////////////////////////////////////////////////////////////////////////
  let langue = ""
  const langList = languages.map((lg) => {
    if (lg.code !== router.locale) {
      return (
        <li
          key={lg.code}
          onClick={() => selectLanguage(lg.code)}
        >
          {lg.language}
        </li>
      )
    } else {
      langue = lg.language
    }
  })

  // Component rendering
  //---------------------------------------------------------------------------------
  return (
    <div
      id={styles.language}
      ref={lgList}
      tabIndex={0}
      onClick={displayLanguages}
      onBlur={show ? displayLanguages : () => {}}
    >
      {langue}
      {show ? <ul>{langList}</ul> : null}
    </div>
  )
}
