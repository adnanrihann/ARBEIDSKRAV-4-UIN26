import './ProfilFake.css';
import fakeIcon from '../assets/Fakeicon.svg';

export default function ProfilFake() {
  return (
    <article className="profile-card">
      <figure>
        <img src={fakeIcon} alt="Fake profilbilde" />
      </figure>
      <h2>Fiktiv Student</h2>
      <p>Studie: Bachelor i Informasjonssystemer</p>
      <p>
        E-post: <a href="mailto:fakestudent@hiof.no">fakestudent@hiof.no</a>
      </p>
    </article>
  );
}