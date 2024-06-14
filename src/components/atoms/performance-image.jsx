import { Performance1 } from "../svg/performance1"
import { Performance2 } from "../svg/performance2"
import { Performance3 } from "../svg/performance3"

function PerformanceImage({ index }) {
  const svgArray = [Performance1, Performance2, Performance3]
  return svgArray[index]({})
}

export { PerformanceImage }
