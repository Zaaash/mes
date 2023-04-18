import * as imgs from "../../utils/helpers/images"
import * as pictosReg from "@fortawesome/free-regular-svg-icons"
import * as pictosSol from "@fortawesome/free-solid-svg-icons"

import { useEffect, useRef, useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import type { NextPage } from "next"
import styles from "./contact.module.scss"
import { useRouter } from "next/router"

//////////////////////////////////////////////////////////////////////////////////////
// Dictionnary
//////////////////////////////////////////////////////////////////////////////////////
const txts: any = {
  // French
  //---------------------------------------------------------------------------------
  fr: {
    pageTitle: "Contactez Monaco Electricité System",
    pageDescription:
      "Nous vous offrons une palette de compétences : concepteurs, intégrateurs, mainteneurs et opérateurs de solutions complexes à forte valeur ajoutée.",
    intro: {
      title: "Contactez-nous",
      descr:
        "Prestataire multi techniques, nous vous offrons une palette de compétences : concepteurs, intégrateurs, mainteneurs et opérateurs de solutions complexes à forte valeur ajoutée.",
    },
    country: "France",
    address: "Adresse",
    phones: "Téléphone",
    email: "E-mail",
    letMessage: "Soumettez-nous votre message",
    label:
      "Vous avez une question ou cherchez une prestation en particulier, n'hésitez pas à nous laisser un message. Nous reprendrons contact avec vous dans les meilleurs délais.",
    enterEmail: "Saisissez votre email",
    errEmail: "Vous devez renseigner votre email !",
    enterMessage: "Saisissez votre message",
    errMessage: "Vous devez m'expliquer ce que vous souhaitez...",
    submit: "Envoyer",
    submitOK: "Envoyé",
  },
}

//////////////////////////////////////////////////////////////////////////////////////
// Page
//////////////////////////////////////////////////////////////////////////////////////
const Contact: NextPage = () => {
  // Declarations
  //---------------------------------------------------------------------------------
  const router = useRouter()
  const wording = txts[`${router.locale}`]

  const [emailOK, setEmail] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  // First load
  //---------------------------------------------------------------------------------
  useEffect(() => {
    document.getElementsByTagName("body")[0].id = ""
  }, [])

  // Functions
  //---------------------------------------------------------------------------------
  // Check inputs
  const checkInput = (e: any) => {
    switch (e.target.type) {
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
    }
  }

  // Page rendering
  //---------------------------------------------------------------------------------
  return (
    <>
      {/* Head HTML part
       ***************************************************/}
      <Head>
        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.mes.mc/contact"
        />

        {/* SEO */}
        <title>{wording.pageTitle}</title>
        <meta
          name="description"
          content={wording.pageDescription}
        />

        {/* Appearence */}
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>

      {/* Body HTML part
       ***************************************************/}
      <main id={styles.contact}>
        {/* Intro / visual */}
        <div
          id="visual"
          className={styles.visual}
        >
          <div className="containerMax content">
            <div>
              <h1>{wording.intro.title}</h1>
              <p>{wording.intro.descr}</p>
            </div>
          </div>
        </div>

        {/* Coordinates */}
        <section
          id={styles.coordinates}
          className="containerMin"
        >
          <div>
            <div>
              <i>
                <FontAwesomeIcon
                  icon={pictosSol.faPhone}
                  width={"1.5rem"}
                />
              </i>
            </div>
            <div>
              <h2>{wording.phones}</h2>
              <div>
                <a href={"tel:" + process.env.PUBLIC_TEL}>{process.env.PUBLIC_TEL}</a>
              </div>
            </div>
          </div>

          <div>
            <div>
              <i>
                <FontAwesomeIcon
                  icon={pictosReg.faEnvelope}
                  width={"1.5rem"}
                />
              </i>
            </div>
            <div>
              <h2>{wording.email}</h2>
              <a href={"mailto:" + process.env.PUBLIC_EMAIL_CONTACT}>{process.env.PUBLIC_EMAIL_CONTACT}</a>
            </div>
          </div>

          <div>
            <div>
              <i>
                <FontAwesomeIcon icon={pictosReg.faMap} />
              </i>
            </div>
            <div>
              <h2>{wording.address}</h2>
              {process.env.PUBLIC_ADDRESS}
            </div>
          </div>
        </section>

        {/* Request block */}
        <section
          id={styles.request}
          className="containerMin"
        >
          <div>
            <h2>
              <i>
                <FontAwesomeIcon icon={pictosReg.faPenToSquare} />
              </i>
              {wording.letMessage}
            </h2>

            <p>{wording.label}</p>

            <form>
              <div className={"inputContainer " + styles.inputContainer}>
                <input
                  id="emailInput"
                  type="email"
                  autoComplete="off"
                  required
                  onKeyUp={(e) => checkInput(e)}
                />
                <label htmlFor="emailInput">{wording.email}</label>
                <i>
                  <FontAwesomeIcon icon={emailOK ? pictosSol.faEnvelopeCircleCheck : pictosReg.faEnvelope} />
                </i>
              </div>
              <textarea
                aria-invalid="false"
                placeholder={wording.enterMessage}
              />
              <button type="submit">{isSent ? wording.submitOK : wording.submit}</button>
            </form>
          </div>

          <div>
            <Image
              src={imgs.logoMes}
              alt=""
            />
          </div>
        </section>

        {/* Google Map */}
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.1145700221673!2d7.413113812928064!3d43.72894674740626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc2ecdadd0ef7%3A0x1a85ab6b95d90f9c!2s4-6%20Av.%20Albert%20II%2C%2098000%20Monaco!5e0!3m2!1sfr!2sfr!4v1681834654687!5m2!1sfr!2sfr`}
          width="100%"
          height="650"
          loading="lazy"
        />
      </main>
    </>
  )
}

export default Contact
