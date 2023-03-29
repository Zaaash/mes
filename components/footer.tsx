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
    label: "Prestataire multi techniques de solutions complexes à forte valeur ajoutée.",
    coords: {
      title: "Coordonnées",
      channels: [
        {
          picto: pictosSol.faPhoneFlip,
          content: process.env.PUBLIC_TEL,
          url: "tel:" + process.env.PUBLIC_TEL,
        },
        {
          picto: pictosReg.faEnvelope,
          content: process.env.PUBLIC_EMAIL_CONTACT,
          url: "mailto:" + process.env.PUBLIC_EMAIL_CONTACT,
        },
        { picto: pictosReg.faMap, content: process.env.PUBLIC_ADDRESS, url: "/contact" },
      ],
    },
    sitemap: [
      {
        title: "Plan de site",
        links: [
          { label: "Accueil", url: "/" },
          { label: "Offre", url: "/offre" },
          { label: "Engagement", url: "/engagement" },
          { label: "Réalisations", url: "/realisations" },
          { label: "Carrière", url: "/carrieres" },
          { label: "Contact", url: "/contact" },
        ],
      },
      {
        title: "Groupe",
        links: [
          { label: "MES", url: "/groupe/mes" },
          { label: "I2S", url: "/groupe/i2s" },
          { label: "C2S", url: "/groupe/c2s" },
        ],
      },
    ],
    hours: {
      title: "Horaires d'ouverture",
      descr: "Nous sommes disponibles aux horaires suivants :",
      details: [
        { day: "Lundi", open: "9h00 -> 17h00" },
        { day: "Mardi", open: "9h00 -> 17h00" },
        { day: "Mercredi", open: "9h00 -> 17h00" },
        { day: "Jeudi", open: "9h00 -> 17h00" },
        { day: "Vendredi", open: "9h00 -> 17h00" },
        { day: "Samedi", open: "fermé" },
        { day: "Dimanche", open: "fermé" },
      ],
    },
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
        className="containerMin"
      >
        {/* Identity */}
        <div id={styles.footerIdentity}>
          <div className={styles.logo}>
            <div>
              <Image
                src={imgs.logoMes}
                alt=""
              />
            </div>
            <div>
              <Image
                src={imgs.logoI2s}
                alt=""
              />
            </div>
            <div>
              <Image
                src={imgs.logoC2s}
                alt=""
              />
            </div>
          </div>

          <p>{wording.label}</p>
        </div>

        {/* Sitemap */}
        {wording.sitemap.map((block: any, key: number) => {
          return (
            <div
              key={key}
              className={styles.sitemap}
            >
              <div className={styles.titleBlock}>{block.title}</div>

              <ul>
                {block.links.map((link: any, key: number) => {
                  return (
                    <li key={key}>
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

        {/* Coords */}
        <div id={styles.footerCoords}>
          <div className={styles.titleBlock}>{wording.coords.title}</div>

          <ul>
            {wording.coords.channels.map((coord: any, key: number) => {
              return (
                <li key={key}>
                  <FontAwesomeIcon icon={coord.picto} />

                  <div>
                    <a
                      href={coord.url}
                      rel="noreferrer"
                    >
                      {coord.content}
                    </a>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Horaires */}
        <div id={styles.footerHours}>
          <div className={styles.titleBlock}>{wording.hours.title}</div>
          <ul>
            {wording.hours.details.map((hour: any, key: number) => {
              return (
                <li key={key}>
                  <span>{hour.day}</span>
                  <span>{hour.open}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Copyrights */}
      <section id={styles.footerLegals}>
        <div>
          &copy;2022{copyrightCurrentDate} <span>Monaco Electricité System</span> &nbsp; | &nbsp;{" "}
          {wording.legals.rights}
        </div>

        <div>
          {wording.legals.texts.map((item: any, key: number) => {
            return (
              <a
                key={key}
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
            <span className={styles.logo}>
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
