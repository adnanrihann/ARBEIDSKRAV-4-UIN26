import './ProfilEgen.css';
import adnanicon from './assets/Adnanicon.svg'

export default function ProfilEgen() {
  return (
    <article className="profile-card">
      <figure>
        <img src={adnanicon} alt="Illustrasjon av student"/>
      </figure>
      <h2>Adnan Rihan</h2>
      <p>Studie: Bachelorstudium i informatikk - design og utvikling av IT-systemer</p>
      <p>
        E-post: <a href="mailto:adnanor@hiof.no">adnanor@hiof.no</a>
      </p>
    </article>
  );
}