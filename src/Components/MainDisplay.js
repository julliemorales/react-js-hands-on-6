import React, { useState } from "react";
import ListOfPlayers from "./ListOfPlayers";
import PlayerScoreBelowSeventy from "./PlayerScoreBelowSeventy";
import ListOfPinoyPlayers from "./ListOfPinoyPlayers";

let players = [
  { name: "Marvin", score: 50 },
  { name: "Roxanne", score: 70 },
  { name: "Mary", score: 40 },
  { name: "Jericho", score: 61 },
  { name: "Kenneth", score: 61 },
  { name: "Mikka", score: 50 },
  { name: "Lalaine", score: 39 },
  { name: "Mark", score: 84 },
  { name: "Prince", score: 64 },
  { name: "Jan", score: 75 },
  { name: "Jeric", score: 80 },
];

function OddPlayers([first, , third, , fifth]) {
  return (
    <div>
      <li>
        First: {first.name} {first.score}
      </li>
      <li>
        Third: {third.name} {third.score}
      </li>
      <li>
        Fifth: {fifth.name} {fifth.score}
      </li>
    </div>
  );
}

function EvenPlayers([, second, , fourth, , sixth]) {
  return (
    <div>
      <li>
        Second: {second.name} {second.score}
      </li>
      <li>
        Fourth: {fourth.name} {fourth.score}
      </li>
      <li>
        Sixth: {sixth.name} {sixth.score}
      </li>
    </div>
  );
}

//Destructuring
let a, b, c, d, e, rest;
[a, b, c, d, e, ...rest] = players;
console.log(a, b, c, d, e);

const FilipinoTeam = rest;

const GetLast6thPlayerOdd = ["First Player", "Second Player", "Third Player"];
const GetLast6thPlayerEven = ["Fourth Player", "Fifth Player", "Sixth Player"];

const FilipinoPlayers = [...GetLast6thPlayerOdd, ...GetLast6thPlayerEven];

function MainDisplay() {
  const [flag, setFlag] = useState(true);
  if (flag === true) {
    return (
      <div>
        <button onClick={() => setFlag(false)}>Toggle</button>
        <h1>List Of Players</h1>
        <ListOfPlayers players={players} />
        <h1>List of Player Below 70</h1>
        <PlayerScoreBelowSeventy players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setFlag(true)}>Toggle</button>
        <h1>Filipino Team</h1>
        <h1>Odd Players</h1>
        {OddPlayers(FilipinoTeam)}
        <h1>Even Players</h1>
        {EvenPlayers(FilipinoTeam)}
        <h1>List of Filipino Player Merge</h1>
        <ListOfPinoyPlayers players={FilipinoPlayers} />
      </div>
    );
  }
}

export default MainDisplay;
