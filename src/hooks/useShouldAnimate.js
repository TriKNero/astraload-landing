import { useState, useEffect } from "react"

export default function useShouldAnimate(elPosition = 10000, scrollPosition) {
  const [shouldAnimate, setShouldAnimate] = useState(true)

  useEffect(() => {
    if (elPosition < scrollPosition) {
      setShouldAnimate(false)
    }
  }, [elPosition, scrollPosition])

  return shouldAnimate
}
