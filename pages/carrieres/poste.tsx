import * as imgs from "../../utils/helpers/images"
import * as pictosSol from "@fortawesome/free-solid-svg-icons"

import { useEffect, useRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import type { NextPage } from "next"
import styles from "./carrieres.module.scss"
import { useRouter } from "next/router"

//////////////////////////////////////////////////////////////////////////////////////
// Dictionnary
//////////////////////////////////////////////////////////////////////////////////////
const txts: any = {
  // French
  //---------------------------------------------------------------------------------
  fr: {
    pageTitle: "Carrière proposée par Monaco Electricité System",
    pageDescription:
      "Nous vous offrons une palette de compétences : concepteurs, intégrateurs, mainteneurs et opérateurs de solutions complexes à forte valeur ajoutée.",
    intro: {
      title: "Secrétaire comptable",
      descr: "",
    },
    societe: {
      title: "Notre société",
      txt: "Vous recherchez une entreprise en constante progression, avec une grande richesse de métiers et d'activités, des opportunités de carrière a Monaco, alors vous êtes le candidat que nous recherchons ! Pour l'ensemble des Femmes et des Hommes de l’Entreprise MES C2S I2S, des valeurs de travail, d'engagement et de réactivité motivent chaque jour leur engagement.",
    },
    salaire: {
      title: "Salaire",
      txt: "2000 € Nets Congés Payés + primes incluses",
    },
    type: {
      title: "Type de contrat",
      contrat: "CDD - Temps Plein",
      info: "Remplacement d’un congé Maternité",
    },
    profil: {
      title: "Profil recherché",
      txt: "Nous sommes à la recherche d’une personne, homme ou femme polyvant(e) et dynamique, motivée.",
    },
  },
}

//////////////////////////////////////////////////////////////////////////////////////
// Page
//////////////////////////////////////////////////////////////////////////////////////
const DetailCarriere: NextPage = () => {
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
      <main id={styles.carriere}>
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
        <section>
          <div className={"containerMin " + styles.content}>
            <div className={styles.im}>
              <Image
                src={imgs.posteSecCompt}
                alt=""
              />
            </div>

            <div className={styles.txt}>
              <h2>{wording.societe.title}</h2>
              <p>{wording.societe.txt}</p>

              <h2>{wording.salaire.title}</h2>
              <p>{wording.salaire.txt}</p>

              <h2>{wording.type.title}</h2>
              <p>{wording.type.contrat}</p>
              <h2>{wording.profil.title}</h2>
              <p>{wording.profil.txt}</p>
              <p>
                Dans le cadre d’un remplacement de avril à fin août 2023 (suite à un congé maternité), nous sommes à la
                recherche d’un poste de secrétaire comptable (homme ou femme) à temps plein.
              </p>
              <p>Vous devrez être polyvant, dynamique, motivé.</p>
              <p>Vous serez en coopération avec 3 personnes et serez en charge de :</p>
              <ul>
                <li>Suivi des clients (saisie des devis, commandes, établissement des factures)</li>
                <li>Suivi des fournisseurs (saisie et envoie des commandes, saisie des factures)</li>
                <li>Divers administratifs (tenue du standard, ouverture et distribution du courrier)</li>
              </ul>

              <div className={styles.bts}>
                <button type="button">
                  <Link href="#">Postuler à cettee offre</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default DetailCarriere
