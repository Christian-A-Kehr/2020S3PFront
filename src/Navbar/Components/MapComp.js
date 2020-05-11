import React, { useState, useEffect } from "react";
import world from './world.svg';
import "./map.css";
import { useForm } from "./useform";
import { useFetch } from "./useFetch";
import { facadeREST } from "../../REST/RESTFacade"
import facade from "../../Login/ApiFacade";

export default function MapComp({ isLoggedIn }) {
    const [countryCode, setCountrycd] = useState("");
    const [countryName, setCountryName] = useState("");
    const [countryPopulation, setCountryPopulation] = useState("");
    const [countryInfected, setCountryInfected] = useState("");
    const [countryDead, setCountryDead] = useState("");
    const [countryRecovered, setCountryRecovered] = useState("");
    const [day1, setDay1] = useState("");
    const [loading, setLoading] = useState("")

    const urlGetdays = "/api/country/newest/{days}/{code}";

    // const [values, setValues] =
    //     useForm(
    //         {
    //             countryCode: "",
    //             countryName: "",
    //             countryPopulation: "",
    //             countryInfcted: "",
    //             countryDead: "",
    //             countryrecovered: ""
    //         });

    /////////////////////////////////UseEffect\\\\\\\\\\\\\\\\\\\\\\\
    // useEffect(() => {
    //     setLoading(true)


    // })

    /////////////////////////////////getCountry\\\\\\\\\\\\\\\\\\\\\\\
    function getCountry(id) {
        // console.log(id)
        // if you click outside a country you will get svg2 as id
        if (id == "svg2") {
            setCountryName("Ocean")
            setCountryPopulation("2100000")
            setCountryInfected("")
            setCountryDead("")
            setCountryRecovered("")
            setDay1("")

        } else {
            const url = "http://localhost:8080/2020S3PBack/api/country/new/" + id
            console.log(url)
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    // kontrol af data indhold
                    // console.log(data)
                    // // then data =>{} = hvad skal der ske med dataen 

                    // var population = data.population;
                    // var infected = data.totalConfirmedInfected;
                    // var deaths = data.totalDeaths;
                    // var recovered = data.totalRecovered;


                    var population = data.population.toLocaleString();
                    var infected = data.totalConfirmedInfected.toLocaleString();
                    var deaths = data.totalDeaths.toLocaleString();
                    var recovered = data.totalRecovered.toLocaleString();

                    var p = population;
                    var i = infected;
                    var d = deaths;
                    var r = recovered;



                    setCountrycd(id)
                    setCountryName(data.countryName)
                    setCountryPopulation(p)
                    setCountryInfected(i)
                    setCountryDead(d)
                    setCountryRecovered(r)
                    setDay1(data.date)

                    setLoading(false)
                    // console.log("code: " + countryCode + " Name: " + countryName + " poulation : " + countryPopulation);

                    ////// Christian rod!\\\\\\ 
                    // values.countryCode.setValues(data[0].alpha2Code)
                    // setValues(values.countryCode = data[0].alpha2Code)
                    // values.countryCode.setValues = data[0].alpha2Code
                    // values.countryName = data[0].name
                    // values.countryPopulation = data[0].population
                    // values.countryInfcted = data[0].
                    // returnPoint4.innerText = "Borders: " + data[0].borders
                    ///////////////////\\\\\\\\\\\\\\\\\\\
                })
        }
    }
    ////////////////////////////Dropdown box\\\\\\\\\\\\\\\\\\\
    function dropdown() {
        var x = document.getElementById("Demo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
    /////////////////////////populate table\\\\\\\\\\\\\\\\\\\\\

    function populateTable(id) {
        // 1. fetchCall(id)
        // 2. insert data in table. alternativ create table loob 
    }

    ////////////////////////eventHandler\\\\\\\\\\\\\\\\\\\\\\\\
    var prev;
    function eventHandler(e) {
        // get id from event
        var id = e.target.id;
        // console.log(id);
        // paint or reset
        if (!prev) {
            e.target.style.fill = "rgb(131, 60, 60)";
            prev = e.target;
        } else {
            prev.style.fill = "rgb(192, 192, 192)";
            e.target.style.fill = "red";
            prev = e.target;
        }
        // getCountry henter daten og retuner det til returnPoints
        console.log("Calling")
        getCountry(id);
        populateTable(id);

    }

    function myFunction() {
        var x = document.getElementById("svg2");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    ////////////////////////////////return MapComp\\\\\\\\\\\\\\\\\\\\\\\\\\\



    return (
        <div>
            {/* Smid svg rent in her hvis det ikke snart virker... */}
            <div> <button onClick={myFunction}>Toggle map</button></div>
            <div id="textBox">





                <div>   <button onClick={dropdown} className="DropDownButton">Select country</button></div>
                <button onClick={dropdown} className="DropDownButton">Select country</button>

                {loading}
                {/* Country name:        {countryName} <br></br>
                Population:          {countryPopulation} <br></br>
                Infected:            {countryInfected} <br></br>
                Deceased:            {countryDead} <br></br>
                Recovered:           {countryRecovered} <br></br> */}
                <table className="table">
                    <tbody>
                        <tr>
                            {/* <th>Country</th> */}
                            <th>Country name</th>
                            <th>Population</th>
                            <th>Infected</th>
                            <th>Deceased</th>
                            <th>Recovered</th>
                        </tr>
                        <tr>
                            {/* <td>DE</td> */}
                            <td>{countryName}</td>
                            <td>{countryPopulation}</td>
                            <td>{countryInfected}</td>
                            <td>{countryDead}</td>
                            <td>{countryRecovered}</td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                ________________________________________________________________________ <br></br>
                <h2>Country development</h2>

                <table className="table">
                    <tbody>
                        <tr>
                            {/* <th>Country</th> */}
                            <th>Date</th>
                            <th>Infected</th>
                            <th>Deceased</th>
                            <th>Recovered</th>
                        </tr>
                        <tr>
                            {/* <td>DE</td> */}
                            <td>{day1}</td>
                            <td>{countryInfected}</td>
                            <td>{countryDead}</td>
                            <td>{countryRecovered}</td>
                        </tr>
                        <tr>
                            {/* <td>DK</td> */}
                            <td>No date</td>
                            <td>No data</td>
                            <td>No data</td>
                            <td>No data</td>
                        </tr>
                        <tr>
                            {/* <td>Se</td> */}
                            <td>No date</td>
                            <td>No data</td>
                            <td>No data</td>
                            <td>No data</td>
                        </tr>
                    </tbody>
                </table>
                ________________________________________________________________________<br></br>
                <p>Graf TBO</p>
            </div>

            <div id="worldMap">
                {/* not sure about img, in world its svg */}
                {/* <img src={world} alt="worldmap" onClick={eventHandler} /> */}
                {/* <img src={world} alt="worldmap" />
                {window.addEventListener("click", eventHandler, false)} */}
                {document.getElementById("svg2").addEventListener('click', eventHandler)};
            </div>

        </div >

    );

}
// options:
// 1
// // {addEventListener('click', eventHandler, false)}
// 2
// {eventHandler(Event)}

//////////////////////Links\\\\\\\\\\\\\\\\\\
// Accessing Object Values + objt loop: https://www.w3schools.com/js/js_json_objects.asp

// drop down with search: https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
