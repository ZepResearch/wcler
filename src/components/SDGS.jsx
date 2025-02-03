"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

export default function SDGSection() {
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const sdgCards = [
    {
      number: "01",
      title: "PARTNERSHIPS FOR THE GOALS",
      icon: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.12 0-.23-.01-.35.21-.26.4-.54.56-.84.37-.34.72-.72 1.05-1.12.28-.33.54-.68.78-1.04.24-.37.46-.76.66-1.16.17-.34.33-.69.47-1.05.13-.35.24-.71.34-1.08.09-.35.17-.71.23-1.07.06-.37.1-.75.13-1.13.02-.38.03-.75.03-1.13 0-.41-.02-.81-.06-1.21-.04-.4-.1-.79-.17-1.18-.08-.38-.18-.76-.3-1.13-.12-.37-.26-.73-.42-1.08-.16-.35-.34-.69-.54-1.02-.2-.33-.42-.65-.66-.95-.24-.3-.5-.58-.78-.84-.28-.26-.57-.5-.88-.73-.31-.22-.64-.42-.98-.6-.34-.18-.69-.33-1.05-.47-.36-.14-.73-.25-1.11-.34-.38-.09-.76-.16-1.15-.2-.39-.05-.79-.07-1.19-.07zm3 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z",
      bgColor: "from-blue-600 to-blue-800",
    },
    {
      number: "02",
      title: "QUALITY EDUCATION",
      icon: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",
      bgColor: "from-red-500 to-red-700",
    },
    {
      number: "03",
      title: "DECENT WORK AND ECONOMIC GROWTH",
      icon: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",
      bgColor: "from-rose-600 to-rose-800",
    },
    {
      number: "04",
      title: "INDUSTRY, INNOVATION AND INFRASTRUCTURE",
      icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z",
      bgColor: "from-orange-400 to-orange-600",
    },
    {
      number: "05",
      title: "REDUCED INEQUALITIES",
      icon: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
      bgColor: "from-pink-500 to-pink-700",
    },
  ]

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      setShowLeftArrow(scrollRef.current.scrollLeft > 0)
      setShowRightArrow(scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth)
    }
  }

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleMouseLeave = () => setIsDragging(false)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isDragging, handleMouseUp]) // Added handleMouseUp to dependencies

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-center text-4xl md:text-5xl font-bold mb-12 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-red-400  to-orange-400 drop-shadow-lg ">WCLER 2025</span> is Dedicated to Advancing the Nations Sustainable Development Goals (SDGS)
        </motion.h1>

        <div className="relative">
          {showLeftArrow && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
              onClick={() => scroll("left")}
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
          )}
          {showRightArrow && (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
              onClick={() => scroll("right")}
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          )}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
          >
            {sdgCards.map((card, index) => (
              <motion.div
                key={index}
                className={`flex-none w-[300px] bg-gradient-to-br ${card.bgColor} text-white rounded-2xl shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 snap-center`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-8 flex flex-col items-center justify-center min-h-[320px] text-center">
                  <div className="text-6xl font-bold mb-4 opacity-50">{card.number}</div>
                  <svg className="w-20 h-20 mb-6 opacity-75" viewBox="0 0 24 24" fill="currentColor">
                    <path d={card.icon} />
                  </svg>
                  <div className="text-lg font-semibold leading-tight">{card.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .overflow-x-auto {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

