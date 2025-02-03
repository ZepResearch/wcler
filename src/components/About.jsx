"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import CountUp from "react-countup";
export default function About() {
  return (
    <div className="container h-full mx-auto p-4 py-12">
      <div className="grid gap-4  md:grid-cols-2">
        {/* Left Side - Marathon Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="relative h-[710px]  overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t  from-black/70 to-black/30" />
            <img
              src="https://images.unsplash.com/photo-1637634169279-0e17fe0b9803?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Marathon runner"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div>
                <h1 className="md:text-9xl text-8xl font-mono font-bold text-white ">
                  About
                </h1>
                <h1 className="md:text-7xl text-5xl font-mono font-bold bg-gradient-to-r from-purple-300 via-red-300  to-orange-300 bg-clip-text text-transparent drop-shadow-md md:-mt-6 -mt-4">
                  Conference
                  
                </h1>
                <p></p>
              </div>
              <div>
               
                <p className="md:text-base text-sm text-gray-200 mb-0.5 text-justify">Welcome to the World Conference on Learning and Education Research (WCLER), a leading platform uniting educators, researchers, and academicians to explore the future of learning and education. This premier event fosters collaboration, knowledge-sharing, and discussions on innovative teaching methodologies, education policies, and technological advancements in the academic sphere.</p>
                <p className="md:text-sm text-sm  text-gray-200 mb-4 text-justify">Our conference is committed to shaping the next era of learning by bridging the gap between research and practice. Whether you're presenting groundbreaking research, engaging in discussions with global experts, or discovering new opportunities, WCLER 2025 provides an ideal environment to connect and inspire.</p>
                <p className="md:text-sm text-sm  text-gray-200 mb-4 text-justify">🔹 Join us in Jakarta, Indonesia – October 2025</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-purple-500 via-red-400  to-orange-400 text-white px-6 py-2 rounded-lg font-semibold inline-flex items-center gap-2"
                >
                  Know more
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Right Side - Grid Layout */}
        <div className="flex flex-col gap-4">
          {/* Half Marathon Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="relative  overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
              <img
                src="https://images.unsplash.com/photo-1649416097303-ddf0c8a68fc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                alt="Half Marathon runners"
                className="md:h-[450px] w-full object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between items-start">
                <div className="mb-4">
                  <h2 className="md:text-8xl text-4xl font-bold text-white mb-2 ">Attendees</h2>
                  <div className="md:text-7xl text-3xl font-bold text-white mb-2"> <CountUp
                          end={8000}
                          duration={2.5}
                          decimals={8000 % 1 !== 0 ? 1 : 0}
                        />+</div>
                  <p className="text-sm text-gray-200 ">🌎 Connect with global educators, policymakers, and researchers. </p>
                  <p  className="text-sm text-gray-200 "> 🎟 Reserve Your Spot Today!</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-purple-500 via-red-400  to-orange-400 text-white px-6 md:py-2.5 py-1 rounded-lg md:font-semibold inline-flex items-center gap-2"
                >
                  Register Here
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </Card>
          </motion.div>

          {/* 10K and 5K Cards Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* 10K Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="relative h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                <img
                  src="https://images.unsplash.com/photo-1655654074011-cb80e11af2f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="10K runner"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div>
                  <h2 className="md:text-5xl text-3xl font-bold text-white  mb-">Speaker</h2>

                    <div className="md:text-5xl text-4xl font-bold text-white mb-"> <CountUp
                          end={35}
                          duration={2.5}
                          decimals={35 % 1 !== 0 ? 1 : 0}
                        />+</div>
                    <p className="text-base text-gray-200">Gain insights from distinguished education leaders and researchers.</p>
                  </div>
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-black px-4 py-2 rounded-lg font-semibold text-sm inline-flex items-center gap-2"
                  >
                    Register Here
                    <ArrowRight className="h-4 w-4" />
                  </motion.button> */}
                </div>
              </Card>
            </motion.div>

            {/* 5K Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="relative h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                <img
                  src="https://images.unsplash.com/photo-1655553722245-f55c8166bf9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="5K runner"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div>
                    <div className="md:text-5xl font-bold text-white mb- text-3xl"><CountUp
                            end={999}
                            duration={2.5}
                            decimals={1} // Specifies the number of decimal places
                            formattingFn={(value) => (value / 10).toFixed(1)}
                        />%</div>
                  <h2 className="md:text-3xl text-xl font-bold text-white mb-2 ">Knowledge Sharing & Collaboration</h2>
                    <p className="text-base text-gray-200">Build meaningful connections with scholars, thought leaders, and professionals shaping the future of education.  </p>
                  </div>
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-black px-4 py-2 rounded-lg font-semibold text-sm inline-flex items-center gap-2"
                  >
                    Register Here
                    <ArrowRight className="h-4 w-4" />
                  </motion.button> */}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

