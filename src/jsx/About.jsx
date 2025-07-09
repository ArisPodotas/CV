import '../About.css'
import Section from './Section.jsx'
import Image from '../../../../Documents/Paperwork/IMG_1212x.jpg'

export default function About(params) {
    return(
        <Section>
            <div className = 'horizontal-flex-container card'>
                <img src = {Image} style = {{flexShrink: 2}} alt = 'Image of Aris'/>
                <div className = 'descriptor growing-hr-trigger'>
                    <h1 className = ''>About me</h1>
                    <hr className = 'growing-hr'/>
                    <p></p>
                </div>
            </div>
        </Section>
    );
}

