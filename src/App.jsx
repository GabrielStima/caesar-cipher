import { useState } from "react"
import SectionOne from "./components/SectionOne"
import SectionTwo from "./components/SectionTwo"
import SectionThree from "./components/SectionThree"
import SectionFour from "./components/SectionFour"

function App() {
  const [text, setText] = useState('');

  const start = (text) => {
    setText(text);
  }

  return (
    <>
      <SectionOne start={start} />
      {text !== '' && (
        <>
          <SectionTwo text={text} />
          <SectionThree />
          <SectionFour />
        </>
      )}
    </>
  )
}

export default App
