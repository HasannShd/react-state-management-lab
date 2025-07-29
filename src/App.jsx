import { useState } from 'react';
import './App.css';

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0);
  const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]);

  function handleAddFighter(fighter) {
    if (money < fighter.price) {
      console.log("Not enough money");
      return;
    }
    setTeam((prevTeam) => [...prevTeam, fighter]);
    setZombieFighters((prevFighters) =>
      prevFighters.filter((f) => f.id !== fighter.id)
    );
    setMoney((prevMoney) => prevMoney - fighter.price);
  }

  function handleRemoveFighter(fighter) {
    setTeam((prevTeam) => prevTeam.filter((f) => f.id !== fighter.id));
    setZombieFighters((prevFighters) => [...prevFighters, fighter]);
    setMoney((prevMoney) => prevMoney + fighter.price);
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🧟 Zombie Fighter Team Builder</h1>
        <div className="stats">
          <span className="money">💰 Money: ${money}</span>
          <span className="team-size">👥 Team Size: {team.length}</span>
        </div>
      </header>
    
      <section className="team-section">
        <h2>Your Team</h2>
        {team.length > 0 && (
          <div className="team-stats">
            <span>💪 Total Strength: {totalStrength}</span>
            <span>⚡ Total Agility: {totalAgility}</span>
          </div>
        )}
        {team.length === 0 ? (
          <p className="empty-message">Pick some team members!</p>
        ) : (
          <ul className="fighter-grid">
            {team.map((fighter) => (
              <li key={fighter.id} className="fighter-card team-fighter">
                <h3>{fighter.name}</h3>
                <img src={fighter.img} alt={fighter.name} />
                <div className="fighter-stats">
                  <p>💵 ${fighter.price}</p>
                  <p>💪 {fighter.strength}</p>
                  <p>⚡ {fighter.agility}</p>
                </div>
                <button class="remove-btn" onClick={() => handleRemoveFighter(fighter)}>
                  Remove from Team
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="shop-section">
        <h2>Available Zombie Fighters</h2>
        <ul className="fighter-grid">
          {zombieFighters.map((fighter) => (
            <li key={fighter.id} className="fighter-card shop-fighter">
              <h3>{fighter.name}</h3>
              <img src={fighter.img} alt={fighter.name} />
              <div className="fighter-stats">
                <p>💵 ${fighter.price}</p>
                <p>💪 {fighter.strength}</p>
                <p>⚡ {fighter.agility}</p>
              </div>
              <button class="add-btn" onClick={() => handleAddFighter(fighter)}>
                Add to Team
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;