import React, { useState, useEffect } from "react";
import facade from "./RESTFacade"
import { URL } from "../Settings/Settings"

function GETNewestCovid({ endpoint }) {
    const [responseData, setResponseData] = useState("");
    

    useEffect(() => {
        facade.getCall(URL, endpoint).then((data) => setResponseData(data));
    }, []);

    return (
            <div class="fetched">
                Country name:        {responseData.countryName} <br></br>
                Population:          {responseData.countryPopulation.population} <br></br>
                Infected:            {responseData.countryInfected.totalConfirmedInfected} <br></br>
                Deceased:            {responseData.countryDead.totalDeaths} <br></br>
                Recovered:           {responseData.countryRecovered.totalRecovered} <br></br>
            </div>)
}

/*
remember to add all new components to the export for use in the governing JokesComp.
*/
export { GETNewestCovid }