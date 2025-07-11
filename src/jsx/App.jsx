import NavBar from './Navigation.jsx'
import ProjectGrid from './Projects.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Chart from './Chart.jsx'

export default function App() {
    return(
        <>
            <NavBar/>
            <About/>
            <ProjectGrid/>
            <Chart/>
            <Footer/>
        </>
    );
}

