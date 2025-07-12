import Section from './Section.jsx'
import {useRef} from 'react'

export function ProjectCard({title= 'text', img = 'img', desc = 'desc', path = '', link, linktext}) {
    const dialog = useRef();
    function openModal() {
        if (dialog.current) {
            dialog.current.showModal();
        }
    }
    function closeModal(e) {
        e.stopPropagation(); // Prevent the click from bubbling up to the parent div
        if (dialog.current) {
            dialog.current.close();
        }
    }
    return(
        <div className = 'card horizontal-flex-container' onClick={openModal} id = 'projects'>
            <div>
                <img src = {img}/>
            </div>
            <div className = 'descriptor growing-hr-trigger'>
                <h3>{title}</h3>
                    <hr className = 'growing-hr'/>
                <p>{desc}</p>
            </div>
            <dialog id = 'dialog' className = 'modal card' ref = {dialog}>
                <button
                    className = 'close-modal seemless-button'
                    style = {{color: 'var(--text)'}}
                    onClick={closeModal}
                    type="button"
                >
                    x
                </button>
                <div className = 'modal-content'>
                    <h3>{title}</h3>
                    <iframe src = {path} width = '100%' height = '100%'></iframe>
                    <p>{desc}</p>
                    <a href = {link}>{linktext}</a>
                </div>
            </dialog>
        </div>
    );
}

export default function ProjectGrid ({children}) {
    return(
        <Section>
            {children}
        </Section>
    );
}

