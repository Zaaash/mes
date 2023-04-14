// import "swiper/css"
// import "swiper/css/pagination"

import * as imgs from "../utils/helpers/images"
import * as pictosSol from "@fortawesome/free-solid-svg-icons"

import { Autoplay, EffectCoverflow, Keyboard, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import type { NextPage } from "next"
import Script from "next/script"
import styles from "./index.module.scss"
import { useRouter } from "next/router"

//////////////////////////////////////////////////////////////////////////////////////
// Dictionnary
//////////////////////////////////////////////////////////////////////////////////////
const txts: any = {
  // French
  //---------------------------------------------------------------------------------
  fr: {
    pageTitle: "Monaco Electricité System : Prestataire multi techniques",
    pageDescription:
      "Nous vous offrons une palette de compétences : concepteurs, intégrateurs, mainteneurs et opérateurs de solutions complexes à forte valeur ajoutée.",
    intro: {
      title: "Monaco Electricité System",
      descr:
        "Partenaire multi services, à forte valeur ajoutée, nous concevons grâce à notre savoir-faire des installations complexes qui s’inscrivent dans la volonté de satisfaire l’ensemble de nos clients et partenaires.",
      button: "Découvrir l'entreprise",
    },
    group: {
      title: "L'entreprise",
      subTitle: "Qui sommes-nous ?",
      entities: [
        {
          visual: imgs.hpMes,
          logo: imgs.logoMes,
          title: "Energie",
          txt: [
            "MES est l’origine de notre entreprise, elle regroupe les métiers historiques de l'Energie, de la distribution, de l’éclairage et des énergies renouvelables.",
            "La maintenance Tertiaire et la conduite de nos installations.",
          ],
          url: "/groupe/mes",
          color: styles.red,
        },
        {
          visual: imgs.hpI2s,
          logo: imgs.logoI2s,
          title: "Réseaux et télécommunications",
          txt: [
            "I2S est une marque de MES et prend en charge l’ingénierie nécessaire a l’évolution permanente des nouvelles technologies.",
            "Nos ingénieurs métiers conçoivent et définissent les solutions des infrastructures numériques et de sécurité.",
          ],
          url: "/groupe/i2s",
          color: styles.blue,
        },
        {
          visual: imgs.hpC2s,
          logo: imgs.logoC2s,
          title: "Chauffage et climatisation",
          txt: [
            "C2S est une marque de MES et conçoit installe et entretien des installations de chauffage, de climatisation et plomberie.",
            "Son savoir faire dans le domaine des énergies renouvelables détermine son engagement dans la transition énergétique.",
          ],
          url: "/groupe/c2s",
          color: styles.green,
        },
      ],
    },
    inter1: {
      title: "Nous plaçons l’excellence avant tout",
      txt: "Nos différents projets témoignent de notre savoir-faire et de notre niveau d’exigence.",
      button: "Explorer nos projets",
    },
    brevet: {
      title: "Une entreprise au cœur des mutations technologiques",
      txt: [
        "Avec I2S et C2S, MES s’engage résolument dans la révolution du numérique.",
        "Toujours en quête de l’excellence technique, nous sommes un acteur du numérique et de l’efficacité énergétique. Engagé dans un processus de développement durable, nous sommes conscient des enjeux environnementaux.",
        "Notre entreprise a toujours cultivé le sens de la responsabilité et de l’entreprenariat. A taille humaine, agile, notre vision : indépendance, pérennité, proximité et vision.",
        "Enfin, nous sommes fournisseurs brevetés de S.A.S Le Prince de Monaco.",
      ],
    },
    projects: {
      title: "Nos réalisations",
      subTitle: "Découvrez nos dernières réalisations",
      reals: [
        {
          visual: imgs.cardio1,
          title: "Centre cardio-thoracique de Monaco",
          txt: "Solution de télécommunications unifiées.",
        },
        {
          visual: imgs.r4,
          title: "Centre hospitalier Princesse Grâce",
          txt: "Contrôle d’accès et vidéoprotection en architecture ANSSI.",
        },
        {
          visual: imgs.r5,
          title: "Grimaldi Forum",
          txt: "Contrôle d’accès et vidéoprotection en architecture ANSSI.",
        },
        {
          visual: imgs.couvent1,
          title: "Hôtel du couvent (Nice)",
          txt: "Solution de Communications Unifiées. Infrastructure Wifi haute densité. Lan Haut Débit / Firewall. Contrôle d’accès, vidéoprotection.",
        },
        {
          visual: imgs.edenRoc1,
          title: "Hôtel du Cap Eden Roc",
          txt: "Solution de Communications Unifiées Multisites. Infrastructure Wifi haute densité. Lan Haut Débit. IP/TV. Contrôle d’accès, vidéoprotection.",
        },
      ],
      button: "En savoir plus",
      all: "Voir toutes nos réalisations",
    },
    news: {
      title: "Actualités / évènements",
      subTitle: "Découvrez les dernières actualités",
      actus: [
        {
          visual: imgs.actu1,
          title: "Agrandissement du Forum Grimaldi",
          txt: "",
        },
        {
          visual: imgs.actu2,
          title: "Eclairage extérieur Mareterra",
          txt: "",
        },
        {
          visual: imgs.actu3,
          title: "Data center - extension du DC3",
          txt: "",
        },
        {
          visual: imgs.actu4,
          title: "Extension de puissance de la centrale de Fontvieille",
          txt: "",
        },
      ],
      button: "En savoir plus",
      all: "Voir tous les posts",
    },
    clients: {
      title: "Nos clients",
      refs: [
        { logo: imgs.logoCCM, alt: "Centre Cardio-thoracique de Monaco" },
        { logo: imgs.logoSBM, alt: "Société des Bains de Mer" },
        { logo: imgs.logoPalaisPrincier, alt: "Le Palais Princier" },
        { logo: imgs.logoGrimaldiForum, alt: "Grimaldi Forum" },
        { logo: imgs.logoCafeParis, alt: "Café de Paris" },
        { logo: imgs.logoCHPG, alt: "Centre Hospitalier Princesse Grâce" },
      ],
    },
  },
}

//////////////////////////////////////////////////////////////////////////////////////
// SEO META DATA LD+JSON
//////////////////////////////////////////////////////////////////////////////////////
const data: any = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Monaco Electricité System",
      url: "https://www.mes.mc",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.mes.mc/search?term={search_term}",
        "query-input": "required name=search_term",
      },
    },
    {
      "@id": "https://www.mes.mc",
      "@type": "Corporation",
      name: "Monaco Electricité System",
      description:
        "restataire multi techniques, nous vous offrons une palette de compétences : concepteurs, intégrateurs, mainteneurs et opérateurs de solutions complexes à forte valeur ajoutée.",
      brand: "MESi",
      url: "https://www.mes.mc",
      email: "mailto:contact@mes.mc",
      logo: "https://www.mes.mc/logos.webp",
      image: "https://www.mes.mc/logos.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bloc B – Zone F4/6, avenue Prince Albert II",
        addressLocality: "Monaco",
        postalCode: "98000",
        addressCountry: "Monaco",
      },
      sameAs: [
        "https://www.facebook.com/MES",
        "https://twitter.com/_Mes",
        "https://www.instagram.com/mes.mc/",
        "https://www.pinterest.fr/MeS/",
      ],
      vatID: "FR 20000070457",
    },
    {
      "@type": "SiteNavigationElement",
      name: [
        "Energie",
        "Réseaux et Télécommunications",
        "Chauffage et climatisation",
        "Recrutement",
        "Réalisations",
        "Contactez-nous",
      ],
      description: [
        "Nos différents projets témoignent de notre savoir-faire et de notre niveau d’exigence.",
        "En charge de l’ingénierie nécessaire à l’évolution permanente des nouvelles technologies.",
        "Conçoit, installe et entretien des installations de chauffage, de climatisation et plomberie.",
        "............",
        "Survolez à votre guise toutes les facettes de notre savoir faire et cliquez pour en savoir plus.",
        "Vous avez une question ou cherchez une prestation en particulier, n'hésitez pas à nous laisser un message.",
      ],
      url: [
        "https://www.mes.mc/groupe/mes",
        "https://www.mes.mc/groupe/i2s",
        "https://www.mes.mc/groupe/c2s",
        "https://www.mes.mc/carrieres",
        "https://www.mes.mc/realisations",
        "https://www.mes.mc/contact",
      ],
    },
  ],
}
const htmlData = { __html: JSON.stringify(data) }

//////////////////////////////////////////////////////////////////////////////////////
// Page
//////////////////////////////////////////////////////////////////////////////////////
const Home: NextPage = () => {
  // Declarations
  //---------------------------------------------------------------------------------
  const router = useRouter()
  const wording = txts[`${router.locale}`]

  const visual = useRef<any>()

  // First load
  //---------------------------------------------------------------------------------
  useEffect(() => {
    document.getElementsByTagName("body")[0].id = "HomePage"
    // Visual parallax
    // const handleParallax = (e: any) => {
    //   const scrollPos = e.target.scrollingElement.scrollTop
    //   visual.current.style.backgroundPositionY = `${-scrollPos / 3}px`
    // }
    // window.addEventListener("scroll", handleParallax)
    // return () => window.removeEventListener("scroll", handleParallax)
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
          href="https://www.mes.mc"
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

        {/* Favicon in Public folder */}
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
        />
        <link
          rel="icon"
          sizes="32x32"
          href="/favicon-32.png"
          type="image/png"
        />
        <link
          rel="icon"
          sizes="64x64"
          href="/favicon-64.png"
          type="image/png"
        />
        <link
          rel="icon"
          sizes="96x96"
          href="/favicon-96.png"
          type="image/png"
        />
        <link
          rel="icon"
          sizes="196x196"
          href="/favicon-196.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon-144x144.png"
        />
        <meta
          name="msapplication-TileImage"
          content="/favicon-144.png"
        />
        <meta
          name="msapplication-TileColor"
          content="#3a1a0a"
        />
        <link
          rel="icon"
          href="/animated_favicon.gif"
          type="image/gif"
        />

        <meta
          name="copyright"
          content="Groupe SD Communication"
        />
        <link
          rel="author"
          type="text/plain"
          href="https://mes.mc/humans.txt"
        />
      </Head>

      <Script
        id="ldJson"
        type="application/ld+json"
        dangerouslySetInnerHTML={htmlData}
      />

      {/* Body HTML part
       ***************************************************/}
      <main id={styles.home}>
        {/* Intro / visual */}
        <div
          id="visual"
          className={styles.visual}
          ref={visual}
        >
          <div className="containerMax content">
            <div>
              <h1>{wording.intro.title}</h1>
              <p>{wording.intro.descr}</p>
              <button type="button">
                <Link href="/#start">{wording.intro.button}</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Group */}
        <a id="start"></a>
        <section id={styles.group}>
          <div className={"containerMin " + styles.content}>
            <div className={styles.title}>
              <h2>{wording.group.title}</h2>
              <span>{wording.group.subTitle}</span>
            </div>

            <div className={styles.blocks}>
              {wording.group.entities.map((item: any, key: number) => {
                return (
                  <Link
                    key={key}
                    href={item.url}
                  >
                    <div className={styles.block}>
                      <div className={styles.visuel}>
                        <Image
                          src={item.visual}
                          alt=""
                        />
                      </div>
                      <div className={styles.logo}>
                        <Image
                          src={item.logo}
                          alt=""
                        />
                      </div>
                      <h3>{item.title}</h3>
                      {item.txt.map((parag: any, key: number) => {
                        return <p key={key}>{parag}</p>
                      })}
                      <div className={styles.more + " " + item.color}>
                        <span>En savoir plus</span>
                        <FontAwesomeIcon icon={pictosSol.faArrowRightLong} />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Inter */}
        <section className="inter">
          <div className={"containerMax content"}>
            <div>
              <h2>{wording.inter1.title}</h2>
              <p>{wording.inter1.txt}</p>
              <button type="button">
                <Link href="/realisations">{wording.inter1.button}</Link>
              </button>
            </div>
          </div>
        </section>

        {/* Brevet */}
        <section id={styles.brevet}>
          <div className={"containerMin " + styles.content}>
            <div>
              <Image
                src={imgs.brevet}
                alt=""
              />
            </div>

            <div className={styles.txt}>
              <h2>{wording.brevet.title}</h2>
              {wording.brevet.txt.map((parag: any, key: number) => {
                return <p key={key}>{parag}</p>
              })}
            </div>
          </div>
        </section>

        {/* Réalisations */}
        <section id={styles.projects}>
          <div className={"containerMax " + styles.content}>
            <h2>{wording.projects.title}</h2>
            <div className={styles.subTitle}>{wording.projects.subTitle}</div>

            <div className={styles.reals}>
              {/* <Swiper
                grabCursor={true}
                // centeredSlides={true}
                slidesPerView={"auto"}
                autoplay={{
                  delay: 1200,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                keyboard={{
                  enabled: true,
                }}
                loop={true}
                modules={[Autoplay, Navigation, Pagination, Keyboard]}
                // className="collection hp"
                style={{ textAlign: "center" }}
              > */}
              {wording.projects.reals.map((real: any, key: number) => {
                return (
                  <div
                    key={key}
                    className={styles.real}
                    style={{ backgroundImage: `url(${Object.values(real.visual)[0]})` }}
                  >
                    <div className={styles.descr}>
                      <div className={styles.title}>{real.title}</div>
                      <div className={styles.txt}>{real.txt}</div>
                      <button type="button">{wording.projects.button}</button>
                    </div>
                  </div>
                )
              })}
              {/* </Swiper> */}
            </div>

            <button type="button">
              <Link href="/realisations">{wording.projects.all}</Link>
            </button>
          </div>
        </section>

        {/* News */}
        <section id={styles.news}>
          <div className={"containerMax " + styles.content}>
            <h2>{wording.news.title}</h2>
            <div className={styles.subTitle}>{wording.news.subTitle}</div>

            <div className={styles.actus}>
              {wording.news.actus.map((item: any, key: number) => {
                return (
                  <div
                    key={key}
                    className={styles.actu}
                  >
                    <div className={styles.visual}>
                      <Image
                        src={item.visual}
                        alt=""
                      />
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.txt}</p>
                  </div>
                )
              })}
            </div>

            {/* <button type="button">
              <Link href="/actualites">{wording.news.all}</Link>
            </button> */}
          </div>
        </section>

        {/* Clients */}
        <section
          id={styles.clients}
          className="containerMin"
        >
          <h2>{wording.clients.title}</h2>

          <div className={styles.refs}>
            {wording.clients.refs.map((item: any, key: number) => {
              return (
                <div key={key}>
                  <Image
                    src={item.logo}
                    alt={item.alt}
                  />
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
