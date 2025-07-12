import Section from './Section'

export default function Chart(){
    return(
        <Section>
            <div className = 'card chart-holder' id = 'chart' style = {{flexGrow: 3, flexShrink: 1}}>
            </div>
            <div className = 'card details descriptor' style = {{flexGrow: 1, flexShrink: 3}}>
            </div>
        </Section>
    );
}

