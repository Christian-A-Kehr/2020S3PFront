import React, { useState, useEffect } from "react";
import { ReactComponent as World } from './world.svg';
import "./map.css";
import { useForm } from "./useform";
import { useFetch } from "./useFetch";
import { facadeREST } from "../../REST/RESTFacade"
import facade from "../../Login/ApiFacade";
import CountryDevelopmentComp from "./CountryDevelopmentComp";
// import { SvgFromUri } from "react-native-svg";

export default function MapComp({ isLoggedIn }) {
    /////////////Hooks\\\\\\\\\\\\\\\\\\\\
    const [countryCode, setCountrycd] = useState("");
    const [countryName, setCountryName] = useState("");
    const [countryPopulation, setCountryPopulation] = useState("");
    const [countryInfected, setCountryInfected] = useState("");
    const [countryDead, setCountryDead] = useState("");
    const [countryRecovered, setCountryRecovered] = useState("");
    const [id, setId] = useState("");
    const [loading, setLoading] = useState("Select a country");
    const [property, setProperty] = useState("de");
    const [prev, setPrev] = useState();
    const [doFetch, setDoFetch] = useState([]);


    const theMap = document.getElementById("svg2");
    const urlGetdays = "/api/country/newest/{days}/{code}";
    const { allCountries, loadingCountries } = useFetch("http://localhost:8080/2020S3PBack/api/country");

    ////////////////////////// custom hook\\\\\\\\\\\\\\\
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


        } else {
            const url = "http://localhost:8080/2020S3PBack/api/country/new/" + id
            console.log(url)
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    // kontrol af data indhold
                    console.log(data)
                    // // then data =>{} = hvad skal der ske med dataen 

                    // var population = data.population;
                    // var infected = data.totalConfirmedInfected;
                    // var deaths = data.totalDeaths;
                    // var recovered = data.totalRecovered;

                    if (data.date == null || data.date == "") {
                        var name = data.countryName;
                        var population = data.population;
                        var infected = "No data";
                        var deaths = "No data";
                        var recovered = "No data";
                    } else {

                        var name = data.countryName;
                        var population = data.population.toLocaleString();
                        var infected = data.totalConfirmedInfected.toLocaleString();
                        var deaths = data.totalDeaths.toLocaleString();
                        var recovered = data.totalRecovered.toLocaleString();
                    }

                    setCountrycd(id)
                    setCountryName(name)
                    setCountryPopulation(population)
                    setCountryInfected(infected)
                    setCountryDead(deaths)
                    setCountryRecovered(recovered)
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
    ////////////////////////////Dropdown box\\\\\\\\\\\\\\\\\\\ subject to change
    function dropdown() {
        var x = document.getElementById("Demo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
    /////////////////////////populate table\\\\\\\\\\\\\\\\\\\\\  TBD

    function populateTable(id) {
        // 1. fetchCall(id)
        // 2. insert data in table. alternativ create table loob 
    }

    ////////////////////////eventHandler\\\\\\\\\\\\\\\\\\\\\\\\

    function eventHandler(e) {
        // get id from event
        var id = e.target.id;
        setId(id);
        // paint or reset
        if (!prev) {
            e.target.style.fill = "rgb(131, 60, 60)";
            setPrev(e.target);
            console.log(prev);
        } else {
            prev.style.fill = "rgb(192, 192, 192)";
            e.target.style.fill = "rgb(131, 60, 60)";
            setPrev(e.target);
        }
        // getCountry henter daten og retuner det til returnPoints
        console.log("Calling")
        getCountry(id);
        setLoading("Loading...")
        setDoFetch();

    }

    ////////////////////////// map toggle (fix) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ subject to delte
    function myFunction() {
        var x = document.getElementById("svg2");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    /////////////////////////// button with countrys \\\\\\\\\\\\\\\\\\\\

    // // fetch all countries via backEnd
    function CharacterDropDown() {
        const [items] = React.useState([
            {
                label: "Luke Skywalker",
                value: "Luke Skywalker"
            },
            { label: "C-3PO", value: "C-3PO" },
            { label: "R2-D2", value: "R2-D2" }
        ]);
        return (
            <select>
                {items.map(item => (
                    <option
                        key={item.value}
                        value={item.value}
                    >
                        {item.label}
                    </option>
                ))}
            </select>
        );
    }


    ////////////////////////////////return MapComp\\\\\\\\\\\\\\\\\\\\\\\\\\\
    return (
        <div>

            <World id="worldMap" onClick={eventHandler} />

            <div id="textBox">
                <select
                    value={property}
                    onChange={event => setProperty(event.target.value)}
                >
                    <React.Fragment>
                        <option value="de" > {countryName}</option>
                        <option value="it" > italien</option>
                        <option value="dk" > dk</option>
                    </React.Fragment>
                </select>

                <div> {loading} </div>




                {/* <div>   <button onClick={dropdown} className="DropDownButton">Select country</button></div>
                <button onClick={dropdown} className="DropDownButton">Select country</button> */}

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

                <CountryDevelopmentComp id={id} doFetch={setDoFetch} />

                <p>Graf TBO</p>
            </div>






            {/* //////////// 1. forsøg \\\\\\\\\\\\\\\ */}

            {/* <svg src={world} alt="worldmap" onClick={eventHandler} /> */}
            {/* <img src={world} alt="worldmap" />
                
              {/* //////////// 2. forsøg \\\\\\\\\\\\\\\ */}

            {/* {theMap.addEventListener('click', eventHandler)} */}
            {/* {theMap.addEventListener("mouseover)  }; */}


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

/////////////////////// To do \\\\\\\\\\\\\\\\\\\\\\\\
// Problemformuleringer:
// - svg(kort) ligger i index.html og giver følgende problemer:
// - kort visses uhensigtsmæssigt i all navbar menuer
//     (kan løse via en funktion, men det er unødvendigt hvis svg placeres under mapComp)
//     -   