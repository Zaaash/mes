import * as imgs from "../../utils/helpers/images"
import * as pictosSol from "@fortawesome/free-solid-svg-icons"

import { useEffect, useRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import type { NextPage } from "next"
import styles from "./groupe.module.scss"
import { useRouter } from "next/router"

//////////////////////////////////////////////////////////////////////////////////////
// Dictionnary
//////////////////////////////////////////////////////////////////////////////////////
const txts: any = {
  // French
  //---------------------------------------------------------------------------------
  fr: {
    pageTitle: "C2S : Chauffage et climatisation",
    pageDescription:
      "Nous vous offrons une palette de compétences : concepteurs, intégrateurs, mainteneurs et opérateurs de solutions complexes à forte valeur ajoutée.",
    intro: {
      title: "C2S : Chauffage et climatisation",
      descr: "Conçoit, installe et entretien des installations de Chauffage, de Climatisation et Plomberie.",
    },
    metiers: [
      {
        title: "Chauffage et Climatisation",
        txt: [
          "Les techniques liées au confort des utilisateurs (production de chaud et de froid, climatisation) et à la qualité de l’air intérieur (renouvellement et traitement).",
        ],
      },
      {
        title: "Plomberie",
        txt: [
          "Nous accompagnons nos clients dans la réalisation des installations plomberie en garantissant le respects des réglementations en vigueur.",
        ],
      },
      {
        title: "Sécurité incendie",
        txt: [
          "Grâce à leur technicité et leur expérience, les équipes apportent des solutions sur-mesure aux problématiques de sécurité incendie en proposant tous types d'installations.",
        ],
      },
      {
        title: "Conseil, réalisation, ingénierie, suivi, tests et mise en service et gestion technique centralisée",
        txt: [
          "À chaque étape de leur projet CVC, nos équipes font bénéficier à nos clients leurs expertises techniques et réglementaires.",
        ],
      },
      {
        title: "Maintenance",
        txt: [
          "Au service de nos clients, de la performance économique et environnementale nos équipes travaillent pour rendre les bâtiments confortables et plus durables.",
        ],
      },
      {
        title: "Performance énergétique",
        txt: [
          "Dans un contexte marqué par l’accélération du changement climatique et les tensions sur l’approvisionnement et les coûts de l’énergie, la transition vers une consommation plus vertueuse est plus que jamais la priorité de tous.",
        ],
      },
    ],
  },
}

//////////////////////////////////////////////////////////////////////////////////////
// Page
//////////////////////////////////////////////////////////////////////////////////////
const C2s: NextPage = () => {
  // Declarations
  //---------------------------------------------------------------------------------
  const router = useRouter()
  const wording = txts[`${router.locale}`]

  // First load
  //---------------------------------------------------------------------------------
  useEffect(() => {
    document.getElementsByTagName("body")[0].id = ""
  }, [])

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
          href="https://www.mes.mc/groupe/c2s"
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
      <main
        id={styles.group}
        className={styles.c2s}
      >
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

        {/* Metiers */}
        {wording.metiers.map((item: any) => {
          return (
            <section
              key={item.id}
              id={styles.about}
              className={"containerMin " + styles.quinconce}
            >
              <div className={styles.txt}>
                <h2>{item.title}</h2>
                {item.txt.map((parag: any) => {
                  return <p key={parag.id}>{parag}</p>
                })}
              </div>

              <div className={styles.im}></div>
            </section>
          )
        })}
      </main>
    </>
  )
}

export default C2s
