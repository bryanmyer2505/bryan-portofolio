import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { profile } from '../data'

export default function Home(){
  return (
    <section className="section grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-4">
          ✨ AI Engineer • Data Scientist
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-fuchsia-600">Bryan</span> —{' '}
          <span className="text-gray-800">
            <Typewriter
              words={[
                'I build intelligent, data-driven products.',
                'I craft AI solutions that make an impact.',
                'I transform complex data into insights.',
                'I design smart systems with machine learning.',
                'I bridge research and real-world applications.'
              ]}
              typeSpeed={100}      // typing speed
              deleteSpeed={40}    // deleting speed
              delaySpeed={10000}  // keep each sentence for 10s
              loop={true}         // infinite loop
              cursor               // enable cursor
              cursorStyle="|"      // blinking cursor style
            />
          </span>
        </h1>

        <p className="mt-5 text-gray-600 text-lg max-w-2xl">{profile.about}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="/portfolio" className="px-5 py-2.5 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition shadow-soft">View Portfolio</a>
          <a href={profile.cvPath} download className="px-5 py-2.5 rounded-xl border border-gray-200 hover:border-brand-300 hover:text-brand-700 transition">Download CV</a>
        </div>
      </div>

      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="justify-self-center">
        <img src={profile.photo} alt="Bryan profile" className="w-64 h-64 object-cover rounded-3xl shadow-soft ring-4 ring-white"/>
      </motion.div>
    </section>
  )
}
