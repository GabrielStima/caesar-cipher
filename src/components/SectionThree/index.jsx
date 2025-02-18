import "./styles.css";

export default function SectionThree() {
  return (
    <section className="SectionThree">
      <div className="section-content">
        <h1>History and usage</h1>
        <p>
          The Caesar cipher is named after Julius Caesar, who, according to
          Suetonius, used it with a shift of three (A becoming D when
          encrypting, and D becoming A when decrypting) to protect messages of
          military significance. While Caesar&apos;s was the first recorded use of
          this scheme, other substitution ciphers are known to have been used
          earlier.
        </p>
        <p>
          It is unknown how effective the Caesar cipher was at the time; there
          is no record at that time of any techniques for the solution of simple
          substitution ciphers.
        </p>
        <p>
          The transformation can be represented by aligning two alphabets; the
          cipher alphabet is the plain alphabet rotated left or right by some
          number of positions. For instance, here is a Caesar cipher using a
          left rotation of three places.
        </p>
        <div className="section-img">
          <img src="/images/twoAlphabets.png" alt="Two Alphabets" />  
        </div>
      </div>
      <div className="section-img">
        <img src="/images/bustJuliusCaesar.png" alt="Bust of Julius Caesar" />
      </div>
    </section>
  );
}
