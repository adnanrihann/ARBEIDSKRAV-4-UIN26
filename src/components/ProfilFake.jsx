import './ProfilFake.css';
import fakeicon from './assets/Fakeicon.svg'

export default function Profilfake() {
  return (
    <section className="jens-card">
      <header>
        <h2>Fake Student</h2>
        <p className="study-title">Bachelor i Informasjonssystemer</p>
      </header>
      
      <figure className="fake-image-container">
        <img src={fakeicon} alt="fake profilbilde" />
      </figure>

      <footer>
        <p>
          Ta kontakt: <a href="mailto:fakestudent@hiof.no">fakestudent@hiof.no</a>
        </p>
      </footer>
    </section>
  );
}