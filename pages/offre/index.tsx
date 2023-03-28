import * as imgs from "../../utils/helpers/images"
import * as pictosSol from "@fortawesome/free-solid-svg-icons"

import { useEffect, useRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import type { NextPage } from "next"
import styles from "./offre.module.scss"
import { useRouter } from "next/router"

//////////////////////////////////////////////////////////////////////////////////////
// Dictionnary
//////////////////////////////////////////////////////////////////////////////////////
const txts: any = {
  // French
  //---------------------------------------------------------------------------------
  fr: {
    pageTitle: "Offre proposée par Monaco Electricité System",
    pageDescription:
      "Nous vous offrons une palette de compétences : concepteurs, intégrateurs, mainteneurs et opérateurs de solutions complexes à forte valeur ajoutée.",
    intro: {
      title: "Offre",
      descr:
        "Découvrez Monaco Électricité System et quelles sont nos forces et spécificités qui nous caractérisent et nous rendent uniques.",
    },
    offre: [
      {
        title: "Le service",
        txt: [
          "Nous maîtrisons notre métier, nous sommes au service de nos clients et tissons des partenariats solides.",
          "MES est une Entreprise, indépendante, localisée à Monaco, dont les atouts sont l’agilité, l’esprit d’économie, le rejet des grands discours au profit du terrain, et l’idée que la réussite de l’entreprise passe avant celle de ceux qui en ont la responsabilité.",
          "La stratégie de MES C2S I2S est simple ; monter dans la chaîne de valeur tout en préservant ce qui a fait sa force depuis toujours : la maîtrise du métier, sur le terrain et au service de ses clients et partenaires.",
          "Le portefeuille d’activités de MES C2S I2S est composé d’une multitude de projets dont la maîtrise unitaire fait le succès global de l’entreprise.",
          "MES a toujours embauché, valorisé le travail, et considéré que l’entreprise est le lieu du développement économique, de la création d’emploi et de l’épanouissement de ses collaborateurs.",
          "Vieille de plus de 17 ans, MES reste une entreprise jeune, tournée vers l’avenir, au cœur de la transformation énergétique et de la révolution numérique.",
        ],
      },
      {
        title: "Les compétences",
        txt: ["", "", "", "", "", ""],
      },
    ],
  },
}

//////////////////////////////////////////////////////////////////////////////////////
// Page
//////////////////////////////////////////////////////////////////////////////////////
const Offre: NextPage = () => {
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
          href="https://www.mes.mc/offre"
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
      <main id={styles.offre}>
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

        {/* Offre */}
        {wording.offre.map((item: any) => {
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

export default Offre
