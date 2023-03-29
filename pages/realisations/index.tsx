import * as imgs from "../../utils/helpers/images"
import * as pictosSol from "@fortawesome/free-solid-svg-icons"

import { useEffect, useRef, useState } from "react"

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
        { id: "cardio", name: "Centre cardio-thoracique de Monaco", im: imgs.cardio },
        { id: "cardio", name: "Bureaux Scorpio", im: imgs.scorpio },
        { id: "cardio", name: "Société de Bains de Mer", im: imgs.sbm },
        { id: "cardio", name: "Centre hospitalier Princesse Grâce", im: imgs.r4 },
        { id: "cardio", name: "Tour Les Girofflées", im: imgs.giroflees },
        { id: "cardio", name: "Stade Louis II", im: imgs.stade },
        { id: "cardio", name: "Hôtel de Paris", im: imgs.hotelParis },
        { id: "cardio", name: "Yacht Club de Monaco", im: imgs.yachtClub },
        { id: "cardio", name: "Grimaldi Forum", im: imgs.r5 },
        { id: "cardio", name: "Mareterra", im: imgs.mareterra },
        { id: "cardio", name: "Hôtel Le Couvent", im: imgs.r7 },
        { id: "cardio", name: "La réserve Ramatuelle", im: imgs.r10 },
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

  const [zoomIm, setZoomIm] = useState(imgs.logoMes)
  const [zoomId, setZoomId] = useState("")

  const visual = useRef<any>()
  const zoom = useRef<any>()

  // First load
  //---------------------------------------------------------------------------------
  useEffect(() => {
    document.getElementsByTagName("body")[0].id = ""
  }, [])

  // Functions
  //---------------------------------------------------------------------------------
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
            <div className={styles.on}>Tous les projets</div>
            <div>MES</div>
            <div>I2S</div>
            <div>C2S</div>
          </div>

          <div
            id={styles.reals}
            className={"containerMax"}
          >
            {wording.gallery.reals.map((real: any, key: number) => {
              return (
                <div
                  key={key}
                  className={styles.real}
                >
                  <Image
                    src={real.im}
                    alt=""
                  />

                  <div>
                    <strong>{real.name}</strong>

                    <span onClick={() => handleZoom(real.im, real.id)}>
                      <FontAwesomeIcon
                        icon={pictosSol.faPhotoVideo}
                        title="Zoom photo"
                      />
                    </span>
                    <Link href={`/realisations/detail?id=${real.id}`}>
                      <FontAwesomeIcon
                        icon={pictosSol.faLink}
                        title="Voir la fiche descriptive du projet"
                      />
                    </Link>
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
          <div className={zoomId}>
            <Link href={`/realisations/detail?id=${zoomId}`}>
              <Image
                src={zoomIm}
                title="En savoir plus sur cette réalisation..."
                alt=""
              />
            </Link>
          </div>
          <div onClick={handleZoom}>X</div>
        </div>
      </main>
    </>
  )
}

export default Realisations
