import { useEffect } from "react";
import "./styles.css";

export default function SectionTwo(props) {
    // const [cipher, setCipher] = useState('');

    useEffect(()=>{
        for (let i = 0; i < props.text.length; i++){
            let char = props.text[i];
            console.log(char);
        }
    }, []);

  return (
    <section className="sectionTwo">
        <div className="section-img">
            <img src="/images/ceaserCipher.png" alt="Caesar Cipher explanation" />
        </div>
        <div className="section-content">
            <h1>Cryptography Algorithm For the Caesar Cipher</h1>
            <p>Thus to cipher a given text we need an integer value, known as a shift which indicates the number of positions each letter of the text has been moved down.</p>
            <p>The encryption can be represented using modular arithmetic by first transforming the letters into numbers, according to the scheme, A = 0, B = 1,…, Z = 25. Encryption of a letter by a shift n can be described mathematically as. </p>
            <p>For example, if the shift is 3, then the letter A would be replaced by the letter D, B would become E, C would become F, and so on. The alphabet is wrapped around so that after Z, it starts back at A</p>
            <p>Here is your example:</p>
            <div className="section-content-ciphertext">
                <p>Shift: 3</p>
                <p>Plaintext: {props.text}</p>
                <p>Ciphertext: </p>
            </div>
        </div>
    </section>
  );
}
