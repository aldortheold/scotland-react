import text from './assets/text.json'

function Paragraph(props) {

    const descriptions = [];
    for (let i = 0; i < text.descriptions[props.index].length; i++) {
        descriptions.push(<p key={props.index * 10 + i}>{text.descriptions[props.index][i]}</p>)
    }
    
    return (
        <div className="text">
            <h2 className="name">{text.names[props.index]}</h2>
            {descriptions}
        </div>
    )
}

export default Paragraph