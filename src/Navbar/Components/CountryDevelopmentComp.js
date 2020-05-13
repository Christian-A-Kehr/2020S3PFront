import React, { useState, useEffect } from "react";
import { URL, getNewestCovidEP, getCountriesEP, getCountryDevelopmentEP } from "../../Settings/Settings";

export default function CountryDevelopmentComp({ id, doFetch }) {
    // const [doFetch, setDoFetch] = useState([]);

    // useEffect(() => {
    const url = URL + getCountryDevelopmentEP + id
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // kontrol af data indhold
            console.log(data)
        });
    // }, setDoFetch);



    return (

        <div>
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
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
        </div>

    )
}