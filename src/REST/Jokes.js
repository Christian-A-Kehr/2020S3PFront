import React, { useState, useEffect } from "react";
import facade from "../Login/ApiFacade";

function Jokes(props) {
  const URL = props.url;
  const endpoint = props.allJokesEP;
  const isLoggedIn = props.isLoggedIn;
  const [jokes, setJokes] = useState({});

  useEffect(() => {
    const options = facade.makeOptions("GET", true);
    if (isLoggedIn) {
      fetch(URL + endpoint, options)
        .then(facade.handleHttpErrors)
        .then((data) => {
          console.log(data);
          setJokes(data);
        });
    }
  }, []);

  return (
    (isLoggedIn ? (
      <div class="fetched">
        <h2>First joke: </h2>
        <p>{jokes.firstApi}</p>
        <h2>Second joke: </h2>
        <p>{jokes.secondApi}</p>
        <h2>Third joke: </h2>
        <p>{jokes.thirdApi}</p>
        <h2>Fourth joke: </h2>
        <p>{jokes.fourthApi}</p>
        <h2>Fifth joke: </h2>
        <p>{jokes.fifthApi}</p>
      </div>) :(
      <div class="fetched">
        <p>Please log in</p>
      </div>)))

}

export default Jokes;
