import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './jsx/Navigation.jsx'
import ProjectGrid from './jsx/Projects.jsx'
import Footer from './jsx/Footer.jsx'
import About from './jsx/About.jsx'
import Chart from './jsx/Chart.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <NavBar/>
        <About/>
        <ProjectGrid/>
        <Chart/>
        <Footer/>
    </StrictMode>,
)

