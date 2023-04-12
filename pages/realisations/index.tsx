import * as imgs from "../../utils/helpers/images"
import * as pictosSol from "@fortawesome/free-solid-svg-icons"

import { SetStateAction, useEffect, useRef, useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import type { NextPage } from "next"
import styles from "./reals.module.scss"
import { useRouter } from "next/router"

//////////////////////////////////////////////////////////////////////////////////////
// Dictionnary
//////////////////////////////////////////////////////////////////////////////////////
const txts: any = {
  // French
  //---------------------------------------------------------------------------------
  fr: {
    pageTitle: "Projets réalisés par Monaco Electricité System",
    pageDescription:
      "Nous vous offrons une palette de compétences : concepteurs, intégrateurs, mainteneurs et opérateurs de solutions complexes à forte valeur ajoutée.",
    intro: {
      title: "Réalisations",
      descr:
        "Prestataire multi techniques, nous vous offrons une palette de compétences : concepteurs, intégrateurs, mainteneurs et opérateurs de solutions complexes à forte valeur ajoutée.",
    },
    gallery: {
      title: "Galerie photos",
      subTitle: "Survolez à votre guise toutes les facettes de notre savoir faire et cliquez pour en savoir plus...",
      reals: [
        {
          id: "scorpio-m",
          im: [imgs.scorpio1, imgs.scorpio2, imgs.scorpio3],
          ref: "mes",
          name: "Bureaux entreprise Scorpio",
          descr: "2000m² de bureaux sur 2 niveaux. Réalisation des lots CFA et CFO.",
        },
        {
          id: "cafeParis-m",
          im: [imgs.cafeParis1, imgs.cafeParis2],
          ref: "mes",
          name: "Café de Paris (SBM)",
          descr: "Rénovation et surélévation. Réalisation des lots CFA et CFO.",
        },
        {
          id: "stade",
          im: [imgs.stade1],
          ref: "mes",
          name: "Stade Louis II",
          descr:
            "Opération de prestige. Modernisation de l’éclairage scénique avec 380 projecteurs à leds entièrement pilotés par ordinateur",
        },
        {
          id: "hotelParis-m",
          im: [imgs.hotelParis1, imgs.hotelParis2],
          ref: "mes",
          name: "Hôtel de Paris (SBM)",
          descr: "Rénovation et surélévation. Réalisation des lots CFA et CFO.",
        },
        {
          id: "mareterra-f",
          im: [imgs.mareterra1, imgs.mareterra2, imgs.mareterra3],
          ref: "mes",
          name: "Opération Mareterra",
          descr: "Extension du Grimaldi Forum. 6000m² de salle d’exposition modulaire. Réalisation des lots CFA CFO.",
        },
        {
          id: "mareterra-l",
          im: [imgs.mareterra1, imgs.mareterra2, imgs.mareterra3],
          ref: "mes",
          name: "Opération Mareterra",
          descr:
            "Eclairage extérieur du site. 100 mâts équipés de projecteur led. 790 ml de cordon led sur la promenade du bord de mer.",
        },
        {
          id: "ilotPasteur",
          im: [imgs.ilotPasteur1, imgs.ilotPasteur2],
          ref: "mes",
          name: "Ilôt Pasteur",
          descr: "Construction d’un bâtiment multimodal. Réalisation des lots CFA et CFO.",
        },
        {
          id: "giroflees",
          im: [imgs.giroflees1],
          ref: "mes",
          name: "Tour Les Giroflées",
          descr: "Construction d'une tour de logements de luxe. Réalisation des lots CFA et CFO.",
        },
        {
          id: "palais",
          im: [imgs.palais1],
          ref: "mes",
          name: "Palais Princier",
          descr: "Mise en lumière des façades.",
        },
        {
          id: "scorpio-c",
          im: [imgs.scorpio2, imgs.scorpio1],
          ref: "c2s",
          name: "Bureaux entreprise Scorpio",
          descr: "2000m² de bureaux sur 2 niveaux. Réalisation des lots CVC et Plomberie.",
        },
        {
          id: "cafeParis-c",
          im: [imgs.cafeParis2, imgs.cafeParis1],
          ref: "c2s",
          name: "Café de Paris (SBM)",
          descr: "Rénovation et surélévation. Réalisation des lots CVC et Plomberie.",
        },
        {
          id: "nchpg-m",
          im: [imgs.nchpg1, imgs.nchpg2],
          ref: "c2s",
          name: "Nouveau Centre Hospitalier Princesse Grâce",
          descr: "Service des travaux publics construction. Réalisation de la production du Lot CVC.",
        },
        {
          id: "hotelParis-c",
          im: [imgs.hotelParis2, imgs.hotelParis1],
          ref: "c2s",
          name: "Hôtel de Paris (SBM)",
          descr: "Rénovation et surélévation. Réalisation des lots CVC et Plomberie.",
        },
        {
          id: "mareterra-p",
          im: [imgs.mareterra3, imgs.mareterra1, imgs.mareterra2],
          ref: "c2s",
          name: "Opération Mareterra",
          descr:
            "Extension du Grimaldi Forum. 6000m² de salle d’exposition modulaire. Réalisation des lots CVC et Plomberie.",
        },
        {
          id: "seaWergie",
          im: [imgs.seaWergie1, imgs.seaWergie2],
          ref: "c2s",
          name: "Sea Wergie",
          descr: "Unité principale de production du site du Larvotto.",
        },
        {
          id: "ilotPasteur",
          im: [imgs.ilotPasteur2, imgs.ilotPasteur1],
          ref: "c2s",
          name: "Ilôt Pasteur",
          descr: "Construction d’un bâtiment multimodal. Réalisation des lots CVC et Plomberie.",
        },
        {
          id: "giroflees",
          im: [imgs.giroflees1],
          ref: "c2s",
          name: "Tour Les Giroflées",
          descr: "Construction d'une tour de logements de luxe. Réalisation des lots CVC et Plomberie.",
        },
        {
          id: "cardio",
          im: [imgs.cardio1],
          ref: "i2s",
          name: "Centre cardio-thoracique de Monaco",
          descr: "Solution de télécommunications unifiées.",
        },
        {
          id: "chpg",
          im: [imgs.r4],
          ref: "i2s",
          name: "Centre hospitalier Princesse Grâce",
          descr: "Contrôle d’accès et vidéoprotection en architecture ANSSI.",
        },
        {
          id: "grimaldiForum",
          im: [imgs.r5],
          ref: "i2s",
          name: "Grimaldi Forum",
          descr: "Contrôle d’accès et vidéoprotection en architecture ANSSI.",
        },
        {
          id: "edenRoc",
          im: [imgs.edenRoc1],
          ref: "i2s",
          name: "Hôtel du Cap Eden Roc",
          descr:
            "Solution de Communications Unifiées Multisites. Infrastructure Wifi haute densité. Lan Haut Débit. IP/TV. Contrôle d’accès, vidéoprotection.",
        },
        {
          id: "couvent",
          im: [imgs.couvent1],
          ref: "i2s",
          name: "Hôtel Le Couvent",
          descr:
            "Solution de Communications Unifiées. Infrastructure Wifi haute densité. Lan Haut Débit / Firewall. Contrôle d’accès, vidéoprotection.",
        },
        {
          id: "reserve",
          im: [imgs.r10],
          ref: "i2s",
          name: "La réserve Ramatuelle",
          descr: "Solution de Communications Unifiées. Infrastructure Wifi haute densité.",
        },
        {
          id: "yachtClub",
          im: [imgs.yachtClub1],
          ref: "i2s",
          name: "Yacht Club de Monaco",
          descr:
            "Solution de Communications Unifiées. Contrôle d’accès, vidéoprotection. Lan haut débit / Firewall. Wifi haute densité.",
        },
      ],
    },
  },
}

//////////////////////////////////////////////////////////////////////////////////////
// Page
//////////////////////////////////////////////////////////////////////////////////////
const Realisations: NextPage = () => {
  // Declarations
  //---------------------------------------------------------------------------------
  const router = useRouter()
  const wording = txts[`${router.locale}`]

  const [filt, setFilter] = useState("")
  const [zoomIm, setZoomIm] = useState(imgs.logoMes)
  const [zoomId, setZoomId] = useState("")

  const zoom = useRef<any>()

  // First load
  //---------------------------------------------------------------------------------
  useEffect(() => {
    document.getElementsByTagName("body")[0].id = ""
  }, [])

  // Functions
  //---------------------------------------------------------------------------------
  // Sort by company
  const sortBy = (t: string = "") => {
    setFilter(t)
  }

  // Zoom image
  const handleZoom = (p: any = "", id: string = "") => {
    if (p !== "") {
      setZoomIm(p)
      setZoomId(id)
      zoom.current.classList.add("on")
    } else {
      zoom.current.classList.remove("on")
      setZoomIm(imgs.logoMes)
      setZoomId("")
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
          href="https://www.mes.mc/realisations"
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
      <main id={styles.realisations}>
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

        {/* Gallery */}
        <section id={styles.gallery}>
          <h2>{wording.gallery.title}</h2>
          <span>{wording.gallery.subTitle}</span>

          <div id={styles.filters}>
            <div
              className={styles.on}
              onClick={() => setFilter("")}
            >
              Tous les projets
            </div>
            <div onClick={() => sortBy("mes")}>MES</div>
            <div onClick={() => sortBy("i2s")}>I2S</div>
            <div onClick={() => sortBy("c2s")}>C2S</div>
          </div>

          <div
            id={styles.reals}
            className={"containerMax"}
          >
            {wording.gallery.reals
              .filter((real: { ref: string }) => real.ref.includes(filt))
              .map((real: any, key: number) => {
                return (
                  <div
                    key={key}
                    className={styles.real}
                  >
                    <Image
                      src={real.im[0]}
                      alt=""
                    />

                    <div>
                      <strong>{real.name}</strong>

                      <span>{real.descr}</span>

                      <i onClick={() => handleZoom(real.im[0], real.id)}>
                        <FontAwesomeIcon
                          icon={pictosSol.faPhotoVideo}
                          title="Zoom photo"
                        />
                      </i>
                    </div>
                  </div>
                )
              })}
          </div>
        </section>

        {/* Zoom portfolio */}
        <div
          id="mask"
          ref={zoom}
          onClick={() => handleZoom("")}
        >
          <div id="maskZoom">
            <Image
              src={zoomIm}
              title="En savoir plus sur cette réalisation..."
              alt=""
            />
          </div>

          <div
            id="maskClose"
            onClick={handleZoom}
          >
            X
          </div>
        </div>
      </main>
    </>
  )
}

export default Realisations
