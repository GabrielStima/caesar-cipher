import { useState } from 'react'
import './styles.css'

export default function SectionOne(props) {
  const [text, setText] = useState('');

  return (
    <section className='section-container'>
      <div className='section-content'>
        <h1>Caesar Cipher</h1>
        <p>The Caesar cipher is a simple encryption technique that was used by Julius Caesar to send secret messages to his allies. It works by shifting the letters in the plaintext message by a certain number of positions, known as the “shift” or “key”. The Caesar Cipher technique is one of the earliest and simplest methods of encryption techniques.</p>
        <p>It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.</p>
        <p>To better understand how the Cesar cipher works, type in a word or phrase.</p>
        <div className='section-content-start'>
          <input value={text} type="text" placeholder='Add your text' onChange={(event) => {setText(event.target.value)}} />
          <button disabled={text === ''} onClick={() => props.start(text)}>Start</button>
        </div>
      </div>
      <div className='section-img'>
        <img src="/images/caesarCipherWheel.jpg" alt="Caesar Cipher Wheel" />
      </div>
    </section>
  )
}
