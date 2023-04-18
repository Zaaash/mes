/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    PUBLIC_GA_ID: "G-???",
    PUBLIC_GTM_ID: "GTM-???",
    PUBLIC_EMAIL_CONTACT: "contact@mes.mc",
    PUBLIC_ADDRESS: "Bloc B – Zone F 4/6, avenue Albert II",
    PUBLIC_LOCATION: "Monaco",
    PUBLIC_TEL: "+377 97 98 80 00",
    SENDGRID_KEY: "???",
  },
  reactStrictMode: true,
  swcMinify: false,
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
    localeDetection: false,
  },
}
