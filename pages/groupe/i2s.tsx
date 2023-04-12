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
    pageTitle: "I2s : Réseaux et Télécommunications",
    pageDescription:
      "Nous vous offrons une palette de compétences : concepteurs, intégrateurs, mainteneurs et opérateurs de solutions complexes à forte valeur ajoutée.",
    intro: {
      title: "I2s : Réseaux et Télécommunications",
      descr: "En charge de l’ingénierie nécessaire à l’évolution permanente des nouvelles technologies.",
    },
    qui: {
      im: imgs.i2sAbout,
      title: "I2S en quelques mots",
      txt: [
        "I2S, Intégration Service System est spécialisé dans les métiers des réseaux et télécommunications d’entreprise.",
        "I2S maitrise les enjeux des technologies de l’Information et des communications : infrastructures télécoms, réseaux d’entreprise, cloud, data analytics, cybersécurité, contrôle d’accès et vidéoprotection, IP/TV.",
        "Les experts d’I2S répondent aux problématiques d’infrastructures de télécommunications et de transformation digitale, dans un environnement sécurisé.",
        "I2S a su conduire avec les leaders du marché des partenariats, afin de fournir des solutions les plus novatrices, performantes et durables.",
        "De plus, I2S a la capacité de proposer à tous ses clients un service et support spécialisé de proximité.",
        "Notre ambition est d’aider nos clients à évoluer vers les nouvelles technologies de la transformation digitale.",
        "D’une manière générale, la démarche professionnelle d’I2S s’inscrit dans l’instauration d’une vraie relation de confiance avec ses clients et partenaires.",
      ],
    },
    metiers: {
      title: "Domaines d'application",
      subTitle: "Nombreux et diversifiés ; on pourra notamment citer :",
      domaines: [
        {
          im: imgs.pictoTel,
          title: "Téléphonie",
          txt: ["Solution de communication téléphonique unifiées IPBX, cloud, mobile (UCaaS)."],
        },
        {
          im: imgs.pictoWifi,
          title: "Wifi / Portail Captif",
          txt: [
            "Environnement radio haute densité, IOT, sécurisation des accès conforme à la législation, infrastructure hébergée.",
          ],
        },
        {
          im: imgs.pictoAcces,
          title: "Contrôle d'accès et vidéoprotection",
          txt: [
            "Solution de contrôle d’accès et de vidéoprotection avec respect des spécifications techniques et règles de sécurité recommandées par l’agence nationale de la sécurité des systèmes d’information « ANSSI », (IA, reconnaissance faciale).",
          ],
        },
        {
          im: imgs.pictoFirewall,
          title: "Réseau / Firewall",
          txt: ["L’architecture numérique de réseaux hauts débits sécurisé LAN et WAN, (Virtuel et sécurisé)."],
        },
        {
          im: imgs.pictoVisio,
          title: "IP TV & Digital Signage",
          txt: [
            "Le traitement des flux Multimédia, pour des solutions de type IP/TV, visioconférence et salle de réunion interactive.",
          ],
        },
      ],
    },
    values: {
      im: imgs.i2sValues,
      title: "Nos valeurs",
      items: [
        {
          name: "Ambition",
          descr: "Vous aidez à évoluer vers les nouvelles technologies de la transformation digitale.",
        },
        {
          name: "Service",
          descr: "Un support dédié et une réactivité à l’écoute des clients/partenaires.",
        },
        {
          name: "Fédérer",
          descr:
            "Un ensemble de solution testé et référencé avec attention pour répondre favorablement aux attentes/enjeux de demain et d’aujourd’hui.",
        },
      ],
    },
  },
}

//////////////////////////////////////////////////////////////////////////////////////
// Page
//////////////////////////////////////////////////////////////////////////////////////
const I2s: NextPage = () => {
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
          href="https://www.mes.mc/groupe/i2s"
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
        className={styles.i2s}
      >
        {/* Visual */}
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
          <div className={"containerMax " + styles.content}>
            <div>
              <h2>{wording.metiers.title}</h2>
              <p>{wording.metiers.subTitle}</p>
            </div>

            {wording.metiers.domaines.map((item: any, key: number) => {
              return (
                <div key={key}>
                  <div className={styles.im}>
                    <Image
                      src={item.im}
                      height={110}
                      objectFit="contain"
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

        {/* Values */}
        <section
          id={styles.values}
          className={"containerMin " + styles.quinconce}
        >
          <div className={styles.txt}>
            <h2>{wording.values.title}</h2>

            {wording.values.items.map((value: any, key: number) => {
              return (
                <div key={key}>
                  <h3>{value.name}</h3>
                  <p>{value.descr}</p>
                </div>
              )
            })}
          </div>

          <div
            className={styles.im}
            style={{ backgroundImage: `url(${Object.values(wording.values.im)[0]})` }}
          />
        </section>
      </main>
    </>
  )
}

export default I2s
