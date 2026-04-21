import { useEffect, useState } from 'react';
import './App.css';
import ProfilEgen from './components/ProfilEgen';
import ProfilFake from './components/ProfilFake';
import { client } from './sanity';

function App() {
  const [arbeidskrav, setArbeidskrav] = useState([]);
  useEffect(() => {
    client.fetch(`*[_type == "arbeidskrav"]`)
      .then((data) => {
        setArbeidskrav(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="app-container">
      <header className="main-header">
        <h1>Gruppe 48</h1>
        <p>Arbeidskrav 4 - Utvikling av interaktive nettsteder</p>
      </header>

      <section className="profiles-section">
        <ProfilEgen />
        <ProfilFake />
      </section>

      <section className="arbeidskrav-section">
        <h2>Oversikt over arbeidskrav i UIN</h2>
        <ul className="arbeidskrav-liste">
          {arbeidskrav.map((krav) => (
            <li key={krav._id} className="arbeidskrav-item">
              <h3>{krav.tittel}</h3>
              <p>{krav.beskrivelse}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;