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
      descr: "Conçoit, installe et entretien des installations de chauffage, de climatisation et plomberie.",
    },
    qui: {
      im: imgs.c2sAbout,
      title: "C2S en quelques mots",
      txt: ["Lorem ipsum."],
    },
    metiers: {
      title: "Domaines d'application",
      subTitle: "Nombreux et diversifiés ; on pourra notamment citer :",
      domaines: [
        {
          im: imgs.pictoChauffClim,
          title: "Chauffage et Climatisation",
          txt: [
            "Les techniques liées au confort des utilisateurs (production de chaud et de froid, climatisation) et à la qualité de l’air intérieur (renouvellement et traitement).",
          ],
        },
        {
          im: imgs.pictoPlomberie,
          title: "Plomberie",
          txt: [
            "Nous accompagnons nos clients dans la réalisation des installations plomberie en garantissant le respects des réglementations en vigueur.",
          ],
        },
        {
          im: imgs.pictoIncendie,
          title: "Sécurité incendie",
          txt: [
            "Grâce à leur technicité et leur expérience, les équipes apportent des solutions sur-mesure aux problématiques de sécurité incendie en proposant tous types d'installations.",
          ],
        },
        {
          im: imgs.pictoConseil,
          title: "Conseil, réalisation, ingénierie, suivi, tests et mise en service et gestion technique centralisée",
          txt: [
            "À chaque étape de leur projet CVC, nos équipes font bénéficier à nos clients leurs expertises techniques et réglementaires.",
          ],
        },
        {
          im: imgs.pictoMaintenance,
          title: "Maintenance",
          txt: [
            "Au service de nos clients, de la performance économique et environnementale nos équipes travaillent pour rendre les bâtiments confortables et plus durables.",
          ],
        },
        {
          im: imgs.pictoPerfNrj,
          title: "Performance énergétique",
          txt: [
            "Dans un contexte marqué par l’accélération du changement climatique et les tensions sur l’approvisionnement et les coûts de l’énergie, la transition vers une consommation plus vertueuse est plus que jamais la priorité de tous.",
          ],
        },
      ],
    },
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

        {/* intro */}
        <section
          id={styles.about}
          className={"containerMin " + styles.quinconce}
        >
          <div className={styles.txt}>
            <h2>{wording.qui.title}</h2>
            {wording.qui.txt.map((parag: any, key: number) => {
              return <p key={key}>{parag}</p>
            })}
          </div>

          <div
            className={styles.imFx}
            style={{ backgroundImage: `url(${Object.values(wording.qui.im)[0]})` }}
          />
        </section>

        {/* Metiers */}
        <section id={styles.metiers}>
          <div className={"containerMax " + styles.titles}>
            <h2>{wording.metiers.title}</h2>
            <p>{wording.metiers.subTitle}</p>
          </div>

          <div className={"containerMax " + styles.content}>
            {wording.metiers.domaines.map((item: any, key: number) => {
              return (
                <div key={key}>
                  <div className={styles.im}>
                    <Image
                      src={item.im}
                      alt=""
                    />
                  </div>

                  <h3>{item.title}</h3>
                  <p key={key}>{item.txt}</p>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default C2s
