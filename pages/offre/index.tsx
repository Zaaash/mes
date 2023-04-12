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
        im: imgs.offreServices,
        title: "Service",
        txt: [
          "Nous maîtrisons notre métier, nous sommes au service de nos clients et tissons des partenariats solides.",
          "Notre indépendance, nos ingénieurs, nos équipes de maitrise et notre organisation sont la force de notre entreprise, la simplicité dans l’action.",
          "Notre volonté, offrir depuis toujours le meilleur du savoir faire au service de l’ensemble de nos clients et partenaires.",
          "Fort de ces 400 clients, MES C2S et I2S contribuent au quotidien à la réussite de l’ensemble des projets.",
          "MES C2S et I2S considèrent que l’entreprise est un lieu de création de valeur et de développement de l’ensemble de ses collaborateurs, un seul objectif, la satisfaction du client.",
          "Avec ces 17 ans d’expérience, l’entreprise MES est au cœur de la transformation énergétique et de la révolution numérique.",
        ],
      },
      {
        im: imgs.offreCompetences,
        title: "Compétences",
        txt: ["L’Entreprise MES C2S I2S offre une large palette de compétences multi techniques"],
        specs: [
          { title: "Métiers", items: ["Ingénierie", "Electrotechnique", "IT et Telecom", "Génie Climatique"] },
          { title: "Marchés", items: ["Energie", "Infrastructures", "Tertiaire"] },
          { title: "Cycle", items: ["Conception & Ingénierie", "Intégration", "Maintenance et exploitation"] },
        ],
      },
    ],
    engagement: [
      {
        im: imgs.engagementEngage,
        title: "Engagement",
        txt: [
          "Jour après jour, nous concilions réussite économique et respect de l’humain et de l’environnement.",
          "L’empreinte carbone d’Entreprise MES est faible. Ne produisant pas sur site propre et n’engageant aucune énergie au-delà de ses bureaux ou de ses moyens logistiques, l’Entreprise MES s’inscrit dans un cycle écologique vertueux. Monaco Electricité Système est un acteur important de développement durable, tant dans ses actions propres, pour réduire son empreinte climatique, que pour ses clients et partenaires, dans son rôle de conseil et de prescripteur.",
          "Résolument engagé dans une politique de développement durable, MES déploie des solutions globales, respectueuses de l’environnement, capables d’optimiser les dépenses énergétiques de ses clients via des dispositifs écoresponsables.",
          "Son engagement se retrouve dans les choix stratégiques de ses investissements en 2020 : la totalité de la flotte de véhicules thermiques a alors été remplacée par des véhicules a propulsion électrique.",
          "Notre démarche environnementale, nos projets innovants, notre implication dans les énergies renouvelables, sont des actions qui participent à la construction de la transition énergétique.",
        ],
      },
      {
        im: imgs.engagementRecrute,
        title: "Recrutement durable",
        txt: [
          "Nous sommes convaincus que la nécessité de valoriser au quotidien notre capital humain, l’emploi et la formation contribue aux succès de demain.",
          "La sécurité de notre personnel est une priorité absolue. Nous avons la conviction que l’accident n’est pas une fatalité et que nos actions et notre professionnalisme déterminent notre performance. Objectif : zéro accident.",
          "L’ensemble de nos projets, les évolutions techniques permanentes sont autant d’opportunités de carrière à Monaco. Notre volonté, proposer des opportunités de carrière à l’ensemble des femmes et des hommes dont la valeur travail et l’engagement motivent leur quotidien.",
        ],
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
        <div>
          {wording.offre.map((item: any) => {
            return (
              <section
                key={item.id}
                className={styles.quinconce}
              >
                <div className="containerMin">
                  <div className={styles.txt}>
                    <h2>{item.title}</h2>
                    {item.txt.map((parag: any, key: number) => {
                      return <p key={key}>{parag}</p>
                    })}

                    {item.specs &&
                      item.specs.map((spec: any, key: number) => {
                        return (
                          <div
                            key={key}
                            className={styles.spec}
                          >
                            <h3>{spec.title}</h3>
                            <ul>
                              {spec.items.map((item: any, key: number) => {
                                return <li key={key}>{item}</li>
                              })}
                            </ul>
                          </div>
                        )
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

export default Offre
