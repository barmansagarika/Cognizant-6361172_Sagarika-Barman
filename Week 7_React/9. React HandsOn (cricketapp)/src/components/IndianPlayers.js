import React from 'react';

const IndianPlayers = () => {
  const T20players = ['Rohit', 'Kohli', 'Bumrah', 'Hardik'];
  const RanjiTrophy = ['Jaiswal', 'Sarfaraz', 'Unadkat'];

  const [odd1, even1, odd2, even2] = T20players;
  const allPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
      </ul>

      <h2>Merged Players</h2>
      <ul>
        {allPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
