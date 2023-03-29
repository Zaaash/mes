import * as imgs from "../../utils/helpers/images"
import * as pictosSol from "@fortawesome/free-solid-svg-icons"

import { useEffect, useRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import type { NextPage } from "next"
import styles from "./engagement.module.scss"
import { useRouter } from "next/router"

//////////////////////////////////////////////////////////////////////////////////////
// Dictionnary
//////////////////////////////////////////////////////////////////////////////////////
const txts: any = {
  // French
  //---------------------------------------------------------------------------------
  fr: {
    pageTitle: "Engagement proposé par Monaco Electricité System",
    pageDescription:
      "Nous vous offrons une palette de compétences : concepteurs, intégrateurs, mainteneurs et opérateurs de solutions complexes à forte valeur ajoutée.",
    intro: {
      title: "Engagement",
      descr:
        "Prestataire multi techniques, nous vous offrons une palette de compétences : concepteurs, intégrateurs, mainteneurs et opérateurs de solutions complexes à forte valeur ajoutée.",
    },
    engagement: [
      {
        im: imgs.engagementEngage,
        title: "Nous nous engageons",
        txt: [
          "Jour après jour, nous concilions réussite économique et respect de l’humain et de l’environnement.",
          "L’empreinte carbone d’Entreprise MES est faible. Ne produisant pas sur site propre et n’engageant aucune énergie au-delà de ses bureaux ou de ses moyens logistiques, l’Entreprise MES s’inscrit dans un cycle écologique vertueux. Monaco Electricité Système est un acteur important de développement durable, tant dans ses actions propres, pour réduire son empreinte climatique, que pour ses clients et partenaires, dans son rôle de conseil et de prescripteur.",
          "Résolument engagé dans une politique de développement durable, MES déploie des solutions globales, respectueuses de l’environnement, capables d’optimiser les dépenses énergétiques de ses clients via des dispositifs écoresponsables.",
          "Son engagement se retrouve dans les choix stratégiques de ses investissements en 2020 : la totalité de la flotte de véhicules thermiques a alors été remplacée par des véhicules a propulsion électrique.",
          "Outre cette démarche systématique de limitation des impacts environnementaux, l’Entreprise MES se tourne vers des projets innovants relatifs aux énergies renouvelables. Nous sommes présents sur l’ensemble des projets Sea Wergie et des installations photo voltaïque.",
        ],
      },
      {
        im: imgs.engagementRecrute,
        title: "Nous recrutons durablement",
        txt: [
          "Nous construisons l’entreprise avec l’idée que les ressources humaines sont notre capital d’aujourd’hui et de demain et nous privilégions l’emploi et la formation.",
          "La sécurité de notre personnel est une priorité absolue. Nous avons la conviction que l’accident n’est pas une fatalité et que nos actions et notre professionnalisme déterminent notre performance. Objectif : zéro accident.",
          "Vous recherchez une entreprise en constante progression, avec une grande richesse de métiers et d’activités, des opportunités de carrière a Monaco, alors vous êtes le candidat que nous recherchons ! Pour l’ensemble des Femmes et des Hommes de l’Entreprise MES C2S I2S, des valeurs de travail, d’engagement et de réactivité motivent chaque jour leur engagement.",
        ],
      },
    ],
  },
}

//////////////////////////////////////////////////////////////////////////////////////
// Page
//////////////////////////////////////////////////////////////////////////////////////
const Engagement: NextPage = () => {
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
          href="https://www.mes.mc/engagement"
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
      <main id={styles.engagement}>
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

        {/* Engagement */}
        <div>
          {wording.engagement.map((item: any, key: number) => {
            return (
              <section
                key={key}
                className={styles.quinconce}
              >
                <div className="containerMin">
                  <div className={styles.txt}>
                    <h2>{item.title}</h2>
                    {item.txt.map((parag: any, key: number) => {
                      return <p key={key}>{parag}</p>
                    })}
                  </div>
                  <div
                    className={styles.im}
                    style={{ backgroundImage: `url(${Object.values(item.im)[0]})` }}
                  ></div>
                </div>
              </section>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Engagement
