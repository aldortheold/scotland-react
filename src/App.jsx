import Header from './Header.jsx'
import Slider from './Slider.jsx'
import Paragraph from './Paragraph.jsx'

function App() {

  return (
    <>
      <Header/>
      <div className="content">
        <Paragraph index={0}/>
        <Slider index={1}/>
        <Slider index={3}/>
        <Paragraph index={1}/>
        <Paragraph index={2}/>
        <Slider index={2}/>
        <Slider index={4}/>
        <Paragraph index={3}/>
        <Paragraph index={4}/>
        <Slider index={5}/>
        <Slider index={6}/>
        <Paragraph index={5}/>
        <Paragraph index={6}/>
        <Slider index={7}/>
      </div>
    </>
  )
}

export default App
