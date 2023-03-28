import * as pictosReg from "@fortawesome/free-regular-svg-icons"
import * as pictosSol from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./in.module.scss"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { useState } from "react"

//////////////////////////////////////////////////////////////////////////////////////
// Dictionnary
//////////////////////////////////////////////////////////////////////////////////////
const txts: any = {
  // English
  //---------------------------------------------------------------------------------
  en: {
    txt: "Vous avez des questions sur notre solution, des doutes par rapport à votre installation actuelle ou n'importe quelle autre demande de renseignements ? N'hésitez pas à remplir ces quelques informations ci-dessous et nous vous appelons dans les 30 minutes suivantes.",
    name: "Votre nom",
    email: "Votre email",
    phone: "Votre numéro de téléphone",
    button: "Appelez-moi",
  },

  // French
  //---------------------------------------------------------------------------------
  fr: {
    txt: "Vous avez des questions sur notre solution, des doutes par rapport à votre installation actuelle ou n'importe quelle autre demande de renseignements ? N'hésitez pas à remplir ces quelques informations ci-dessous et nous vous appelons dans les 30 minutes suivantes.",
    name: "Votre nom",
    email: "Votre email",
    phone: "Votre téléphone",
    button: "Appelez-moi",
    sent: "Nous allons vous rappeler",
  },
}

//////////////////////////////////////////////////////////////////////////////////////
// Component
//////////////////////////////////////////////////////////////////////////////////////
export default function Callback() {
  // Declarations
  //---------------------------------------------------------------------------------
  const router = useRouter()
  const wording = txts[`${router.locale}`]

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [isSent, setIsSent] = useState(false)
  const [nameOK, setName] = useState(false)
  const [emailOK, setEmail] = useState(false)
  const [phoneOK, setPhone] = useState(false)

  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  // Functions
  //---------------------------------------------------------------------------------
  // Form validation
  const onSubmitHandler = async (data: any) => {
    if (!isSent) {
      setIsSent(true)
      const response = await fetch("../api/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        console.log("Une erreur s'est produite, veuillez réessayer utérieurement")
      } else {
        console.log("bien envoyé")
        reset()
      }

      setIsSent(false)
    }
  }

  // Check inputs
  const checkInput = (e: any) => {
    switch (e.target.type) {
      case "text":
        if (e.target.value !== "") {
          e.target.classList = "notEmpty"
          if (e.target.value.length >= 4) {
            e.target.classList.add("ok")
            setName(true)
          } else {
            e.target.classList.remove("ok")
            setName(false)
          }
        } else {
          e.target.classList = ""
          setName(false)
        }
        break
      case "email":
        if (e.target.value !== "") {
          e.target.classList = "notEmpty"
          if (pattern.test(e.target.value)) {
            e.target.classList.add("ok")
            setEmail(true)
          } else {
            e.target.classList.remove("ok")
            setEmail(false)
          }
        } else {
          e.target.classList = ""
          setEmail(false)
        }
        break
      case "tel":
        if (e.target.value !== "") {
          e.target.classList = "notEmpty"

          if (e.target.value.length === 14) {
            e.target.classList.add("ok")
            setPhone(true)
          } else {
            e.target.classList.remove("ok")
            setPhone(false)
          }

          if (e.key !== "Backspace" && e.key !== "Delete") {
            const tel = e.target.value.replace(/[. -'a-z°A-Z+#_(){"}]/g, "").split("")
            const ftTel = tel.map((letter: string, idx: number) => {
              return idx === 1 || idx === 3 || idx === 5 || idx === 7 ? letter + "." : letter
            })
            e.target.value = ftTel.join("")
          }
        } else {
          e.target.classList = ""
          setPhone(false)
        }
        break
    }
  }

  // Component rendering
  //---------------------------------------------------------------------------------
  return (
    <section id={styles.callback}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          {wording.txt}
          <div>
            <div className={"inputContainer " + styles.inputContainer}>
              <input
                id="nameInput"
                type="text"
                autoComplete="off"
                onKeyUp={(e) => checkInput(e)}
                {...register("name", { required: false })}
              />
              <label htmlFor="nameInput">{wording.name}</label>
              <i>
                <FontAwesomeIcon icon={nameOK ? pictosSol.faUser : pictosReg.faUser} />
              </i>
            </div>
            <div className={"inputContainer " + styles.inputContainer}>
              <input
                id="emailInput"
                type="email"
                autoComplete="off"
                onKeyUp={(e) => checkInput(e)}
                {...register("email", { required: false })}
              />
              <label htmlFor="emailInput">{wording.email}</label>
              <i>
                <FontAwesomeIcon icon={emailOK ? pictosSol.faEnvelopeCircleCheck : pictosReg.faEnvelope} />
              </i>
            </div>
            <div className={"inputContainer " + styles.inputContainer}>
              <input
                id="telInput"
                type="tel"
                autoComplete="off"
                required
                onKeyUp={(e) => checkInput(e)}
                {...register("tel", { required: true })}
              />
              <label htmlFor="telInput">{wording.phone}</label>
              <i>
                <FontAwesomeIcon icon={phoneOK ? pictosSol.faMobileButton : pictosSol.faMobileScreenButton} />
              </i>
            </div>
            {/* <input
              type="text"
              placeholder={wording.name}
              {...register("name", { required: false })}
            />
            <input
              type="text"
              placeholder={wording.email}
              {...register("email", { required: true })}
            />
            <input
              type="tel"
              placeholder={wording.phone}
              {...register("tel", { required: true })}
            /> */}
          </div>
        </div>
        <button type={phoneOK ? "submit" : "button"}>{isSent ? wording.sent : wording.button}</button>
        {/* <button type={emailNLok ? "submit" : "button"}>{wording.newletter.button}</button> */}
      </form>
    </section>
  )
}
