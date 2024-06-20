import React, {useState, useRef} from 'react'
import Slider from './Slider.jsx';
import text from './assets/text.json'

function Container(props) {

    const descriptionsEn = [];
    const descriptionsRu = [];
    for (let i = 0; i < text.descriptions[props.index].length; i++) {
        descriptionsEn.push(text.descriptions[props.index][i])
        descriptionsRu.push(text.descriptions[props.index + 7][i])
    }

    const [descs, setDescs] = useState(descriptionsEn)
    const [language, setLanguage] = useState("ENG");
    const [version, setVersion] = useState("Russian Version");
    const [chapter, setChapter] = useState(text.names[props.index]);

    function handleTranslate() {
        if (language === "ENG"){
            setDescs(descriptionsRu);
            setChapter(text.names[props.index + 7])
            setLanguage("RUS");
            setVersion("Original Version");
        }
        else {
            setDescs(descriptionsEn);
            setChapter(text.names[props.index])
            setLanguage("ENG");
            setVersion("Russian Version");
        }
    }

    function convert(list) {
        const elementList = [];
        for (let i = 0; i < list.length; i++) {
            elementList.push(<p key={props.index * 10 + i}>{list[i]}</p>)
        }
        return (
            <>{elementList}</>
        )
    }

    const textDiv =
    <div className="text">
        <h2 className="name">{chapter}</h2>
        {convert(descs)}
    </div>

    const galleryDiv =
    <div className="gallery">
        <Slider index={props.index + 1}/>
        <div className="system">
            <button className="translate" onClick={handleTranslate} width="98%">{version}</button>
        </div>
    </div>

    if (props.index % 2 === 0) {
        return (<div className="container">{textDiv}{galleryDiv}</div>)
    }

    return (<div className="container">{galleryDiv}{textDiv}</div>)
}

export default Container