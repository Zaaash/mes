import * as imgs from "../../utils/helpers/images"
import * as pictosSol from "@fortawesome/free-solid-svg-icons"

import { useEffect, useRef } from "react"

import Counter from "../../components/count"
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
    pageTitle: "Monaco Electricité System",
    pageDescription:
      "Nous vous offrons une palette de compétences : concepteurs, intégrateurs, mainteneurs et opérateurs de solutions complexes à forte valeur ajoutée.",
    intro: {
      title: "MES : nous plaçons l'excellence avant tout",
      descr: "Nos différents projets témoignent de notre savoir-faire et de notre niveau d’exigence.",
    },
    about: {
      title: "À propos de nous",
      txt: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },
    story: {
      title: "Notre histoire",
      txt: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },
    values: {
      title: "Nos valeurs",
      items: [
        {
          name: "Vision",
          descr:
            "Une entreprise tournée vers l’avenir au cœur des mutations technologiques. Avec I2S et C2S, MES s’engage résolument dans la révolution du numérique, toujours en quête de l’excellence technique.",
        },
        {
          name: "Pérennité",
          descr:
            "Une structure à taille humaine, agile. Dont l’activité repose sur la récurrence pour 70% de son chiffre d’affaires. Notre structure financière est saine.",
        },
        {
          name: "Indépendance",
          descr:
            "Une Entreprise indépendante depuis plus de 17 ans qui a toujours cultivé le sens de la responsabilité et de l’entreprenariat.",
        },
        {
          name: "Proximité",
          descr:
            "Un acteur du numérique et de l’efficacité énergétique, nous sommes engagé dans un processus de développement durable, et conscient des enjeux environnementaux.",
        },
      ],
    },
    strategy: {
      title: "Core business",
      labels: [
        "MES est l’origine de notre entreprise, elle regroupe les métiers historiques de l'Energie, de la distribution, de l’éclairage et des énergies renouvelables.",
        "Réseaux et Télécommunications",
        "Chauffage et Climatisation",
      ],
    },
    keys: {
      title: "Nos chiffres clés",
      txt: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },
    seaWergie: {
      title: "Sea Wergie",
      descr:
        "Le Groupement SMEG, SOGET et MES, est le lauréat de la concession de service public concernant la réalisation et l’exploitation de réseaux de thalasso thermiques.",
    },
  },
}

//////////////////////////////////////////////////////////////////////////////////////
// Page
//////////////////////////////////////////////////////////////////////////////////////
const Mes: NextPage = () => {
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
          href="https://www.mes.mc/groupe/mes"
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
        className={styles.mes}
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

        {/* About */}
        <section
          id={styles.about}
          className={"containerMin " + styles.quinconce}
        >
          <div className={styles.txt}>
            <h2>{wording.about.title}</h2>
            {wording.about.txt.map((parag: any, key: number) => {
              return <p key={key}>{parag}</p>
            })}
          </div>

          <div className={styles.im}></div>
        </section>

        {/* Keys */}
        <section id={styles.keys}>
          <div className="containerMin">
            <h2>{wording.keys.title}</h2>

            <div id={styles.counters}>
              <div>
                <Counter
                  target={60}
                  duration={5}
                  symbol="M"
                />
                <span>{"chiffre d'affaire"}</span>
              </div>
              <div>
                <Counter
                  target={170}
                  duration={5}
                  symbol="+"
                />
                <span>collaborateurs à votre service</span>
              </div>
              <div>
                <Counter
                  target={380}
                  duration={5}
                  symbol="+"
                />
                <span>personnels en production</span>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section
          id={styles.story}
          className={"containerMin " + styles.quinconce + " " + styles.rev}
        >
          <div className={styles.txt}>
            <h2>{wording.story.title}</h2>
            {wording.story.txt.map((parag: any, key: number) => {
              return <p key={key}>{parag}</p>
            })}
          </div>

          <div className={styles.timeline}>
            <div>2005</div>
            <div>Création de MES à Monaco</div>
            <div>2006</div>
            <div>Intégration des activités de I2S</div>
            <div>2011</div>
            <div>Intégration des activités de C2S</div>
            <div>2020</div>
            <div>Prise de participation SeaWergie</div>
            <div>2022</div>
            <div>Ouverture du capital au manager et à la SAM Metis Famille Casiraghi</div>
          </div>
        </section>

        {/* Strategy */}
        <section id={styles.strategy}>
          <div className="containerMin">
            <h2>{wording.strategy.title}</h2>

            <div className={styles.core}>
              <div>
                <Image
                  src={imgs.logoMes}
                  alt="Logo de l'entreprise Monégasque Mes"
                />
                {wording.strategy.labels[0]}
              </div>
              <Link href="/groupe/i2s">
                <div title="En savoir plus sur I2S">
                  <Image
                    src={imgs.logoI2s}
                    alt="Logo de l'entreprise Monégasque I2S"
                  />
                  {wording.strategy.labels[1]}
                </div>
              </Link>
              <Link href="/groupe/c2s">
                <div title="En savoir plus sur C2S">
                  <Image
                    src={imgs.logoC2s}
                    alt="Logo de l'entreprise Monégasque C2S"
                  />
                  {wording.strategy.labels[2]}
                </div>
              </Link>
            </div>
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

          <div>
            <Image
              src={imgs.mesServices}
              alt=""
            />
          </div>
        </section>

        {/* Sea Wergie */}
        <section id={styles.seaWergie}>
          <div className={"containerMax " + styles.content}>
            <div>
              <h2>{wording.seaWergie.title}</h2>
              <p>{wording.seaWergie.descr}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Mes
