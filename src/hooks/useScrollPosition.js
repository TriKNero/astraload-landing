import { useState, useEffect } from "react"

export default function useScrollPosition() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function handleScroll() {
    const scrollPosition = window.pageYOffset
    setPosition(scrollPosition)
  }

  return position
}
