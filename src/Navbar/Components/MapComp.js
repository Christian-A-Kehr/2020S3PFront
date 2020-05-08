import React, { useState, useEffect } from "react";
import world from './world.svg';
import "./map.css";
import { GETNewestCovid } from "../../REST/CovidREST"
import {
    newestCovidEP
} from "../../Settings/Settings";
import { useForm } from "./useform";
import { useFetch } from "./useFetch";


export default function MapComp({ isLoggedIn }) {
    // const [countryCode, setcountrycd] = useState("");
    // const [countryName, setCountryName] = useState("");
    // const [countryPopulation, setcountryPopulation] = useState("");
    // const [countryInfected, setcountryInfected] = useState("");
    // const [countryDead, setcountryDead] = useState("");
    // const [countryRecovered, setcountryRevored] = useState("");

    var mapsvg = document.getElementById("worldMap")


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


    ////////////////////////////////UseEffect\\\\\\\\\\\\\\\\\\\\\\\\\\\            
    //skal vise obj så lav en getCountry function som aktiveres ved click
    useFetch("http://localhost:8080/2020S3PBack/api/country");

    // useEffect(() => {
    //     const onMouseClik = e => {
    //         console.log(e.target.id);
    //         // values.countryCode.setValues(e.taget.id);
    //     };
    //     document.addEventListener('click', onMouseClik);
    //     return () => {
    //         document.removeEventListener("click", onMouseClik);
    //     };
    //     //     console.log(values.countryCode);
    //     // }, [values.countryCode]);
    // }, []);

    /////////////////////////////////getCountry\\\\\\\\\\\\\\\\\\\\\\\
    // function getCountry(id) {
    //     // Brug id til at lave fix på GB og vandmasserne her. bare sæt egen værdier i returnpoints
    //     console.log(id)
    //     if (id == "svg2") {
    //         // // // returnpoints skal laves om til at pege på hook   
    //         // returnPoint1.innerText = "Name: Ocean"
    //         // returnPoint2.innerText = "Population: alot "
    //         // returnPoint3.innerText = "Area: less than 510.100.000 km2"
    //         // returnPoint4.innerText = "Borders: incuding rivers? idk!"
    //     } else {

    //         var url = "http://restcountries.eu/rest/v1/alpha?codes=de" + id
    //         console.log(url)
    //         fetch(url)
    //             .then(res => res.json())
    //             .then(data => {
    //                 // kontrol af data indhold
    //                 console.log(data)
    //                 // // then data =>{} = hvad skal der ske med dataen 
    //                 // // returnpoints skal laves om til at pege på hook
    //                 // values.countryCode.setValues(data[0].alpha2Code)

    //                 setcountrycd(data[0].alpha2Code)
    //                 setCountryName(data[0].name)
    //                 setcountryPopulation(data[0].population)

    //                 // setValues(values.countryCode = data[0].alpha2Code)
    //                 // values.countryCode.setValues = data[0].alpha2Code
    //                 // values.countryName = data[0].name
    //                 // values.countryPopulation = data[0].population
    //                 // values.countryInfcted = data[0].
    //                 // returnPoint4.innerText = "Borders: " + data[0].borders
    //                 console.log("code: " + countryCode + " Name: " + countryName + " poulation : " + countryPopulation);
    //             })
    //     }
    // }

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
        console.log(id);
        // paint or reset
        if (!prev) {
            e.target.style.fill = "red";
            prev = e.target;
        } else {
            prev.style.fill = "rgb(192, 192, 192)";
            e.target.style.fill = "red";
            prev = e.target;
        }
        // getCountry henter daten og retuner det til returnPoints
        getCountry(id);
        populateTable(id);
    }
    ////////////////////////////////return MapComp\\\\\\\\\\\\\\\\\\\\\\\\\\\

    return (
        <div>
            {/* Smid svg rent in her hvis det ikke snart virker... */}
            <div id="textBox">
                <div>   <button onclick={dropdown} class="DropDownButton">Select country</button></div>
                <div>
                    <GETNewestCovid 
                    endpoint={newestCovidEP + alpha2Code}
                    />
                </div>
                _____________________________________ <br></br>
                <p>country development</p>

                <table class="table">
                    <tr>
                        {/* <th>Country</th> */}
                        <th>Date</th>
                        <th>Infected</th>
                        <th>Deceased</th>
                        <th>Recovered</th>
                    </tr>
                    <tr>
                        {/* <td>DE</td> */}
                        <td>No date</td>
                        <td>No data</td>
                        <td>No data</td>
                        <td>No data</td>
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
                </table>
                _____________________________________ <br></br>
                <p>Graf TBO</p>
            </div>

            <div id="worldMap">
                {/* not sure about img, in world its svg */}
                <img src={world} alt="worldmap" onClick={eventHandler} />
                {/* {mapsvg.addEventListener("click", eventHandler, false)} */}

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
