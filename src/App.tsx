import { useRef, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollItemRef = useRef<HTMLDivElement>(null)
  const [hideNextButton, setHideNextButton] = useState(false)

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const currentPosition = scrollContainerRef.current?.scrollLeft

      scrollContainerRef.current.scrollLeft =
        currentPosition - scrollContainerRef.current.offsetWidth
    }
  }
  const handleNext = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } =
        scrollContainerRef.current

      const { scrollLeft: currentPosition } = scrollContainerRef.current

      scrollContainerRef.current.scrollLeft = currentPosition + offsetWidth

      console.log("🍉 scrollLeft :", scrollLeft)
      console.log("🍉 : offsetWidth", offsetWidth)
      console.log("🐳 : scrollWidth", scrollWidth)

      console.log("🌹 :", scrollLeft + offsetWidth)

      if (scrollLeft + offsetWidth >= scrollWidth) {
        // Hide the "Next" button
        // setHideNextButton(true)
      }
    }

    // Scroll to the next item
  }
  return (
    <div className="App">
      <div className="container scroll-snap" ref={scrollContainerRef}>
        {Array.from({ length: 20 }).map((item, i) => {
          const id = Math.random().toString(32).slice(2)

          return (
            <div key={id} className="item" ref={scrollItemRef}>
              {i}
            </div>
          )
        })}
      </div>
      <button onClick={handlePrev}>Prev</button>
      {!hideNextButton && <button onClick={handleNext}>Next</button>}
    </div>
  )
}

export default App
