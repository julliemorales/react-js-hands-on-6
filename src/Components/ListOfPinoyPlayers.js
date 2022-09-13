const ListOfPinoyPlayers = ({ players }) => {
  return players.map((item, index) => {
    return (
      <div key={index}>
        <li>Player Place: {item}</li>
      </div>
    );
  });
};

export default ListOfPinoyPlayers;
