import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Add ?logs=1 to URL to authorize logs in browsers console
////////////////////////////////////////////////////////////////////////
export default function DebugMode() {
  const router = useRouter()

  useEffect(() => {
    const noLogs = () => {
      console = console || {}
      console.log = function () {}
    }

    // Debug mode
    if (Number(router.query.logs) === 1) {
      localStorage.setItem('debugMode', '1')
    }
    // NO debug mode
    else if (Number(router.query.logs) === 0) {
      localStorage.removeItem('debugMode')
      noLogs()
    } else if (!localStorage.getItem('debugMode')) noLogs()
  }, [router.query.logs])

  return null
}
