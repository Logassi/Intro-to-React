import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JumbotronSection from './pages/jumbotronSection'
import ContactUsSection from './pages/contactUsSection'
import TestimoniSection from './pages/testimoniSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>Navbar</div>
      <div>
        <h2>This is First React</h2>
        <JumbotronSection />
        <ContactUsSection />
        <TestimoniSection />
      </div>
      <div>Footer</div>  
    </div>


    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
