import NavBar from './Navigation.jsx'
import ProjectGrid, {ProjectCard} from './Projects.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Chart from './Chart.jsx'
import Aisb from  'C:/Users/aPodo/Documents/Masters/Semester B/Algorithms In Structural Bioinformatics/AISB Project/main.pdf'

export default function App() {
    return(
        <>
            <NavBar/>
            <About/>
            <ProjectGrid>
                <ProjectCard path = {Aisb}/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </ProjectGrid>
            <Chart/>
            <Footer/>
        </>
    );
}

