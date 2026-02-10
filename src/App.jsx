import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='overflow-x-hidden text-stone-100 antialiased'>
      {/* Background */}
      <div className='fixed inset-0 -z-10'>
        <div className='relative h-full w-full bg-gradient-to-b from-emerald-900 to-black'>
          <div className='absolute bottom-0 left-0 right-0 top-0 bg-[size:14px_24px] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
          linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]'></div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}

export default App
