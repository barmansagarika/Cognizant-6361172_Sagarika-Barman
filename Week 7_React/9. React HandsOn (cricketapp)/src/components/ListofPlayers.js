import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Rohit Sharma', score: 95 },
    { name: 'Virat Kohli', score: 88 },
    { name: 'Shubman Gill', score: 60 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Hardik Pandya', score: 75 },
    { name: 'Jadeja', score: 55 },
    { name: 'Bumrah', score: 25 },
    { name: 'Shami', score: 65 },
    { name: 'Surya Kumar', score: 99 },
    { name: 'Kuldeep Yadav', score: 72 },
    { name: 'Ishan Kishan', score: 43 },
  ];

  const allPlayers = players.map((player, index) => (
    <li key={index}>{player.name} - {player.score}</li>
  ));

  //arrow function 
  const lowScorers = players.filter(p => p.score < 70).map((p, i) => (
    <li key={i}>{p.name} - {p.score}</li>
  ));

  return (
    <div>
      <h2>All Players</h2>
      <ul>{allPlayers}</ul>

      <h2>Players with Score Below 70</h2>
      <ul>{lowScorers}</ul>
    </div>
  );
};
export default ListofPlayers;