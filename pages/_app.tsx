import "./_app.scss"
import "react-toastify/dist/ReactToastify.css"

import type { AppProps } from "next/app"
import DebugMode from "../utils/helpers/debugMode"
import Footer from "../components/footer"
import Header from "../components/header"
import Script from "next/script"
import { ToastContainer } from "react-toastify"
import { wrapper } from "../utils/redux"

const App = wrapper.withRedux(({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* Scripts
       ************************************************************/}
      {/* Google Tag Manager */}
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.PUBLIC_GTM_ID}')`,
        }}
      />

      {/* Project rendering
       ************************************************************/}
      {/* Show/hide logs in browsers console */}
      <DebugMode />

      {/* Structure */}
      <Header />
      <Component {...pageProps} />
      <Footer />

      {/* Notifications component */}
      <ToastContainer
        position="bottom-center"
        theme="dark"
        autoClose={3000}
        limit={6}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName={""}
        bodyClassName={""}
      />

      {/* <!-- Google Tag Manager: noscript code --> */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.PUBLIC_GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;" />`,
        }}
      />
    </>
  )
})

export default App
