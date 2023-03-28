import { useEffect, useState } from "react"

// Component rendering
////////////////////////////////////////////////////////////////////////
const Counter = (props: any) => {
  const { target, duration, symbol } = props
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const step = target > 2500 ? 10 : target > 1000 ? 5 : 1
    // const end = target
    // if (start === end) return
    let totalMsDur = duration * 1000
    let incrementTime = totalMsDur / (target / step)
    let timer = setInterval(() => {
      start += step
      setCount(start)
      if (start === target) clearInterval(timer)
    }, incrementTime)
  }, [])

  return (
    <>
      {count}
      {symbol}
    </>
  )
}

export default Counter
