import Section from './Section.jsx'
import Image from '../../../../Documents/Paperwork/IMG_1212x.jpg'

export default function About(params) {
    return(
        <Section>
            <div className = 'card horizontal-flex-container' id = 'about' style = {{flexGrow: 2, flexShrink: 2}}>
                <img src = {Image} style = {{flexShrink: 2}} alt = 'Image of Aris'/>
                <div className = 'descriptor growing-hr-trigger'>
                    <h3 className = ''>Aris Podotas</h3>
                    <hr className = 'growing-hr'/>
                    <p>I am a biologist, bioinformatician</p>
                </div>
            </div>
        </Section>
    );
}

