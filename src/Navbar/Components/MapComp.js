import React, { useState, useEffect } from "react";
import world from './world.svg';
import "./map.css";
import { useForm } from "./useform";
import { useFetch } from "./useFetch";

// skal formentligt laves om så map = mapComp 
export default function MapComp({ isLoggedIn }) {

    return (
        <div>
            < Map />
        </div>
    );
}


var prev;
function Map() {
    // uses custom hook from useform.js
    const [values, setValues] =
        useForm(
            {
                countryCode: "",
                countryName: "",
                countryPopulation: "",
                countryInfcted: "",
                countryDead: "",
                countryrecovered: ""
            });

    // // fetch all countries via backEnd
    const { data, loading } = useFetch("http://localhost:8080/2020S3PBack/api/country");

    // use useEffect to see values in consol doing development and afterwords changes it to display all data
    useEffect(() => {
        const onMouseover = e => {
            console.log(e.target.id);
        };
        document.addEventListener('click', onMouseover);
        return () => {
            document.removeEventListener("click", onMouseover);
        };


        //  
        //     console.log(values.countryCode);
        // }, [values.countryCode]);
    }, []);
    // const eventClick = world.getElementById("svg2");
    // eventClick.addEventListener("click", eventHandler, false)



    return (

        <div>
            <div id="worldMap">

                {/* not sure about img, in world its svg */}
                <img src={world} alt="worldMap" />

                <div>{loading ? 'loading...' : data}</div>
                {/* < onClick={() => setCountry(e.target.id)} */}

            </div>


        </div>
    )
}

function Clicked(props) {
    var id = props.id;
    return
}

function eventHandler(e) {
    // get id from event
    var id = e.target.id;
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
    // getCountry(id);
}



// // eventClick = hvor på kortet bliver der trykket på. 
// const eventClick = document.getElementById("svg2");
// // hvor vil vi placere daten vi henter (her navngivet som returnPoint (ref til index))
// const returnPoint1 = document.getElementById("contryName");
// const returnPoint2 = document.getElementById("contryPopulation");
// const returnPoint3 = document.getElementById("contryArea");
// const returnPoint4 = document.getElementById("contryBorders");


function getCountry(id) {
    // Brug id til at lave fix på GB og vandmasserne her. bare sæt egen værdier i returnpoints
    console.log(id)
    if (id == "svg2") {
        // // // returnpoints skal laves om til at pege på hook   
        // returnPoint1.innerText = "Name: Ocean"
        // returnPoint2.innerText = "Population: alot "
        // returnPoint3.innerText = "Area: less than 510.100.000 km2"
        // returnPoint4.innerText = "Borders: incuding rivers? idk!"
    } else {

        var url = "http://restcountries.eu/rest/v1/alpha?codes=" + id
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // kontrol af data indhold
                console.log(data)
                // // then data =>{} = hvad skal der ske med dataen 
                // // returnpoints skal laves om til at pege på hook   
                // returnPoint1.innerText = "Name: " + data[0].name
                // returnPoint2.innerText = "Population: " + data[0].population
                // returnPoint3.innerText = "Area: " + data[0].area
                // returnPoint4.innerText = "Borders: " + data[0].borders
            })
    }
}

// // eventListener registrere click på kortet og vidergiver event til eventHandler (Egen funktion)
// eventClick.addEventListener("click", eventHandler, false)

// // Var til at reset farver (skal være null til at begynde med, derfor er ingen værdi oplyst)
// var prev;

// function eventHandler(e) {
//     // tag id givet fra event 
//     var id = e.target.id;
//     // giv farve hvis der ingen er ellers reset 
//     if (!prev) {
//         e.target.style.fill = "red";
//         prev = e.target;
//     } else {
//         prev.style.fill = "rgb(192, 192, 192)";
//         e.target.style.fill = "red";
//         prev = e.target;
//     }
//     // getCountry henter daten og retuner det til returnPoints 
//     getCountry(id);
// }