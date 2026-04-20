import './ProfilEgen.css';

export default function ProfilEgen() {
  return (
    <article className="profile-card">
      <figure>
        <img src="https://via.placeholder.com/150" alt="Illustrasjon av student" />
      </figure>
      <h2>Adnan Rihan</h2>
      <p>Studie: Bachelorstudium i informatikk - design og utvikling av IT-systemer</p>
      <p>
        E-post: <a href="mailto:adnanor@hiof.no">adnanor@hiof.no</a>
      </p>
    </article>
  );
}