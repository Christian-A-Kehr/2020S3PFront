import React, { useState, useEffect } from "react";
import { URL, getCountryDevelopmentEP } from "../../Settings/Settings";

export default function CountryDevelopmentComp(props) {
    let id = props.id
    let mounted = true;
    const [countryName, setCountryName] = useState("")

    const [countryInfected1, setCountryInfected1] = useState("No data");
    const [countryDead1, setCountryDead1] = useState("No data");
    const [countryRecovered1, setCountryRecovered1] = useState("No data");
    const [countryDate1, setCountryDate1] = useState("No data");

    const [countryInfected2, setCountryInfected2] = useState("No data");
    const [countryDead2, setCountryDead2] = useState("No data");
    const [countryRecovered2, setCountryRecovered2] = useState("No data");
    const [countryDate2, setCountryDate2] = useState("No data");

    const [countryInfected3, setCountryInfected3] = useState("No data");
    const [countryDead3, setCountryDead3] = useState("No data");
    const [countryRecovered3, setCountryRecovered3] = useState("No data");
    const [countryDate3, setCountryDate3] = useState("No data");



    useEffect(() => {
        const url = URL + getCountryDevelopmentEP + id
        fetch(url)
            .then(res => res.json())
            .then(data => {


                let date1 = "No data"
                let date2 = "No data"
                let date3 = "No data"

                let infected1 = "No data"
                let infected2 = "No data"
                let infected3 = "No data"

                let dead1 = "No data"
                let dead2 = "No data"
                let dead3 = "No data"

                let recovered1 = "No data"
                let recovered2 = "No data"
                let recovered3 = "No data"

                let name = "[select country]"


                if (!(data[0] === null || data.code == "500")) {

                    date1 = data[0].date
                    date2 = data[1].date
                    date3 = data[2].date

                    infected1 = data[0].totalConfirmedInfected.toLocaleString();
                    infected2 = data[1].totalConfirmedInfected.toLocaleString();
                    infected3 = data[2].totalConfirmedInfected.toLocaleString();

                    dead1 = data[0].totalDeaths.toLocaleString();
                    dead2 = data[1].totalDeaths.toLocaleString();
                    dead3 = data[2].totalDeaths.toLocaleString();

                    recovered1 = data[0].totalRecovered.toLocaleString();
                    recovered2 = data[1].totalRecovered.toLocaleString();
                    recovered3 = data[2].totalRecovered.toLocaleString();

                    name = data[0].countryName
                }

                // kontrol af data indhold
                console.log(data)

                setCountryDate1(date1)
                setCountryDate2(date2)
                setCountryDate3(date3)

                setCountryInfected1(infected1)
                setCountryInfected2(infected2)
                setCountryInfected3(infected3)

                setCountryDead1(dead1)
                setCountryDead2(dead2)
                setCountryDead3(dead3)

                setCountryRecovered1(recovered1)
                setCountryRecovered2(recovered2)
                setCountryRecovered3(recovered3)

                setCountryName(name)



            });
    }, [id]);



    return (

        <div>
            <h2>Country development for {countryName}</h2>

            <table className="table">
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Infected</th>
                        <th>Deceased</th>
                        <th>Recovered</th>
                    </tr>
                    <tr>
                        <td>{countryDate1}</td>
                        <td>{countryInfected1}</td>
                        <td>{countryDead1}</td>
                        <td>{countryRecovered1}</td>
                    </tr>
                    <tr>
                        <td>{countryDate2}</td>
                        <td>{countryInfected2}</td>
                        <td>{countryDead2}</td>
                        <td>{countryRecovered2}</td>
                    </tr>
                    <tr>
                        <td>{countryDate3}</td>
                        <td>{countryInfected3}</td>
                        <td>{countryDead3}</td>
                        <td>{countryRecovered3}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}