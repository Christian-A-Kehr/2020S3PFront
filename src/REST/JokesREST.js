import React, { useState, useEffect } from "react";
import facade from "./RESTFacade"
import { URL } from "../Settings/Settings"

function GETAllJokes({ endpoint, isLoggedIn }) {
    const [responseData, setResponseData] = useState("Not logged in");
    
    /*
    alternative solution.
    disadvantage: calls it every time switching tab in Navbar.
    advantage: runs automatically and renders newest data.
    */

    // useEffect(() => {
    //     facade.getCall(URL, endpoint).then((data) => setResponseData(data));
    // }, []);

    const doFetch = () => {
        facade.getCall(URL, endpoint).then((data) => setResponseData(data));
    }

    return (
        (isLoggedIn ? (
            <div class="fetched">
                <button onClick={doFetch}>Get me some new Jokes</button>
                <h2>First joke: </h2>
                <p>{responseData.firstApi}</p>
                <h2>Second joke: </h2>
                <p>{responseData.secondApi}</p>
                <h2>Third joke: </h2>
                <p>{responseData.thirdApi}</p>
                <h2>Fourth joke: </h2>
                <p>{responseData.fourthApi}</p>
                <h2>Fifth joke (DadJoke): </h2>
                <p>{responseData.fifthApi}</p>
            </div>) : (
                <div class="fetched">
                    <p>Please log in</p>
                </div>)))
}

// this function is merely proof-of-concept and has not been tested
function POSTJoke({ endpoint, isLoggedIn, joke }) {
    const [responseData, setResponseData] = useState("Not logged in");
    const doFetch = () => {
        facade.postCall(URL, endpoint, joke).then((data) => setResponseData(data));
    }

    // missing return data
}

/*
remember to add all new components to the export for use in the governing JokesComp.
*/
export { GETAllJokes, POSTJoke }