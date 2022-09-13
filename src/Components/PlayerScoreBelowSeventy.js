const PlayerScoreBelowSeventy = ({ players }) => {
  const playersBelow70 = players.filter((player) => player.score <= 70);
  return playersBelow70.map((player, index) => (
    <div key={index}>
      <li>
        Mr.{player.name} <span>{player.score}</span>
      </li>
    </div>
  ));
};

export default PlayerScoreBelowSeventy;
