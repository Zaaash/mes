import * as imgs from "../utils/helpers/images"
import * as pictosReg from "@fortawesome/free-regular-svg-icons"
import * as pictosSol from "@fortawesome/free-solid-svg-icons"

import { useRef, useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import styles from "./footer.module.scss"
import { useRouter } from "next/router"

//////////////////////////////////////////////////////////////////////////////////////
// Dictionnary
//////////////////////////////////////////////////////////////////////////////////////
const txts: any = {
  // French
  //---------------------------------------------------------------------------------
  fr: {
    coords: [
      {
        picto: pictosSol.faPhoneFlip,
        content: "+33 (0)" + process.env.PUBLIC_TEL,
        url: "tel:+33" + process.env.PUBLIC_TEL,
      },
      {
        picto: pictosReg.faEnvelope,
        content: process.env.PUBLIC_EMAIL_CONTACT,
        url: "mailto:" + process.env.PUBLIC_EMAIL_CONTACT,
      },
      { picto: pictosReg.faMap, content: process.env.PUBLIC_ADDRESS, url: "#" },
    ],
    sitemap: [
      {
        title: "Plan de site",
        links: [
          { label: "Accueil", url: "/" },
          { label: "MES", url: "/groupe/mes" },
          { label: "I2S", url: "/groupe/i2s" },
          { label: "C2S", url: "/groupe/c2s" },
          { label: "Offre", url: "/offre" },
          { label: "Engagement", url: "/engagement" },
          { label: "Réalisations", url: "/realisations" },
          { label: "Carrière", url: "/carrieres" },
          { label: "Contact", url: "/contact" },
        ],
      },
    ],
    horaires: [
      {
        title: "Horaires d'ouverture",
        descr: "Nous sommes disponibles aux horaires suivants :",
        details: [
          { jour: "Lundi", heures: "9h00 -> 17h00" },
          { jour: "Mardi", heures: "9h00 -> 17h00" },
          { jour: "Mercredi", heures: "9h00 -> 17h00" },
          { jour: "Jeudi", heures: "9h00 -> 17h00" },
          { jour: "Vendredi", heures: "9h00 -> 17h00" },
          { jour: "Samedi", heures: "9h00 -> 17h00" },
          { jour: "Dimanche", heures: "9h00 -> 17h00" },
        ],
      },
    ],
    legals: {
      rights: "Tous droits réservés.",
      texts: [{ label: "Mentions légales", url: "/mentions-legales" }],
    },
  },
}

//////////////////////////////////////////////////////////////////////////////////////
// Component
//////////////////////////////////////////////////////////////////////////////////////
export default function Footer() {
  // Declarations
  //---------------------------------------------------------------------------------
  const router = useRouter()
  const wording = txts[`${router.locale}`]

  const currentDate = new Date().getFullYear()
  const copyrightCurrentDate = currentDate > 2022 ? "-" + currentDate : ""

  // Component rendering
  //---------------------------------------------------------------------------------
  return (
    <footer id={styles.footer}>
      {/* Links */}
      <section
        id={styles.links}
        className="containerMax"
      >
        {/* Identity */}
        <div id={styles.identity}>
          <div className={styles.logo}>
            <Image
              src={imgs.logoList}
              alt=""
            />
          </div>

          <p>Lorem ipsum</p>
        </div>

        {/* Coords */}
        <div id={styles.coords}>
          <div className={styles.titleBlock}>Coordonnées</div>
          {wording.coords.map((coord: any, idx: number) => {
            return (
              <div key={idx}>
                <div>
                  <FontAwesomeIcon icon={coord.picto} />
                </div>

                <div>
                  <a
                    href={coord.url}
                    rel="noreferrer"
                  >
                    {coord.content}
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Sitemap */}
        {wording.sitemap.map((block: any, idx1: number) => {
          return (
            <div
              key={idx1}
              className={styles.sitemap}
            >
              <div className={styles.titleBlock}>{block.title}</div>
              <ul>
                {block.links.map((link: any, idx2: number) => {
                  return (
                    <li key={idx2}>
                      <Link href={link.url}>
                        <a
                          title=""
                          rel="nofollow"
                          target="_self"
                        >
                          {link.label}
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </section>

      {/* Copyrights */}
      <section id={styles.legals}>
        <div>
          &copy;2022{copyrightCurrentDate} <span>Monaco Electricité System</span> &nbsp; | &nbsp;{" "}
          {wording.legals.rights}
        </div>

        <div>
          {wording.legals.texts.map((item: any, idx: number) => {
            return (
              <a
                key={idx}
                href={item.url}
                rel="nofollow"
                target="_self"
              >
                {item.label}
              </a>
            )
          })}
          <a
            href="https://inforca.mc"
            target="_blank"
            rel="noreferrer"
          >
            Réalisé par
            <span className={styles.logoSDC}>
              <Image
                src={imgs.logoInforca}
                alt=""
              />
            </span>
            Inforca / Webforca
          </a>
        </div>
      </section>
    </footer>
  )
}
