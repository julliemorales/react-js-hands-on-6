const ListOfPlayers = ({ players }) => {
  return players.map((item, index) => (
    <div key={index}>
      <li>
        Mr. {item.name} <span>{item.score}</span>
      </li>
    </div>
  ));
};

export default ListOfPlayers;
