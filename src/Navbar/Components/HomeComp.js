import React from "react";
import "./text.css";
// import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <ApplicationDecription />
            {/* <HowToUse />
            {/* <PersonalReflectionsChristian /> */}
            {/* <PersonalReflectionsMartin /> */}
        </div>
    );
}

function ApplicationDecription() {
    return (
        <div className=" instructions">
            <h2>Covid19 tracker</h2>

            <div className="personaltext">

                <h4>Short summary of the web application: </h4>
                    This application is an independent project, meant to help people keep track of covid19 status
                    in different countries around the world. <br />

                <h4> Info about our outsourcing project </h4>
                    This application can also be found on a mobil at in “TBD”
                    <h4> Our REST API </h4>
                    Get all countries:<br />
                    https://e-scape.dk/2020S3PBack/api/country<br /><br />
                    Get all Covid19 data for specified country by country code: <br />
                 https://e-scape.dk/2020S3PBack/api/country/(code)"> <br /> <br />
                    Get newest Covid19 entry for country by country code: <br />
                https://e-scape.dk/2020S3PBack/api/country/new/(code)">  <br /><br />
                    Fetch Covid data for country by code: <br />
                https://e-scape.dk/2020S3PBack/api/country/fetch/covid/(code)">  <br /> <br />
                    Fetch all countries: <br />
                https://e-scape.dk/2020S3PBack/api/country/fetch/country/">  <br /><br />
                    Fetch country by code:  <br />
                https://e-scape.dk/2020S3PBack/api/country/fetch/country/(code)">  <br /><br />

                <h2> Which external APIs we are using</h2>
                    find Covied19 data from one specified <br />
                https://api.covid19api.com/dayone/country/(code)"> <br /> <br />
                    find country data for one specified country <br />
                https://restcountries.eu/rest/v1/alpha?codes=(code)">  <br /><br />
                    Get all countries <br />
                http://restcountries.eu/rest/v1/ "><br />

                <h4>Info about us (the developers)</h4>

                    Developed by MC
                    <h4>How to use </h4>
                    Features: <br />
                    -	Choose a country from the map by clicking on the country or by selecting it from a dropdown menu. <br />
                    -	After selecting the country, you will be presented with; TBD last week!! <br />
                <h4>Link to download mobile app</h4> <br />
                <href>https://aegle.damat.at/apk/CLS-release.apk</href>

            </div>
        </div>
    )
}

// function HowToUse() {
//     return (
//         <div>
//             <div className=" instructions">
//                 <h2> How to use</h2>
//                 <div className="introText">
//                     <p>
//                         1. Don't touch: 'Login/Login.js', 'index.js' and 'ApiFacade.js'.<br />
//                         <br />
//                     2. All URLs are to be added in 'Settings/Settings.js'. Remember to
//                     handle exports and imports of the URLs where required.<br />
//                         <br />
//                     3. A template for how to use REST fetch is shown in '/REST/Jokes.js'.
//                     This can be changed or copied according to the project requirements.<br />
//                         <br />
//                     4. The Navbar is also partly a template. It should be modified to suit
//                     the project.<br />
//                         <br />
//                     5. When cloning, remember to double check the REST URLs.<br />
//                         <br />
//                     6. Then use 'npm install', 'npm install react-router-dom' followed by
//                     'npm start' to get a local deployment.<br />
//                         <br />
//                     7. Surge deployment is done as follows:<br />
//                     1- In the root of the frontend open a terminal and do 'npm run build'<br />
//                     2- In the same terminal do 'surge --project ./build --domain A_DOMAIN_NAME.surge.sh'<br />
//                         <br />
//                     If you have not installed Surge or made an account previously, more info can be found here:
//                     https://docs.google.com/document/d/1TPkVw4HLB1yeKXOrQQKvH72JOvBQhgVmxSCe8087NoE/edit
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// function PersonalReflectionsChristian() {
//     return (
//         <div className=" instructions">
//             <h2>Personal reflections related to how the start code was used</h2>
//             Name: Christian Kehr <br />
//             <div className="personaltext">
//                 <p>
//                     CA3 has been a great way to catch up on topics that were missed or
//                 needed refreshing. <br />
//                 The fact that Covid19 has made the two react weeks a nightmare for
//                 those of us with kids. Is clearly felt while struggling with the
//                 frontEnd. <br />
//                 That's why CA3 is a great why to ensure that students reach a state
//                 where they can actually focus on coding and not the set-up aspect.
//                 </p>
//             </div>
//         </div>
//     )
// }

// function PersonalReflectionsMartin() {
//     return (
//         <div className=" instructions">
//             <h2>Personal reflections related to how the start code was used</h2>
//             Name: Martin Brandstrup <br />
//             <div className="personaltext">
//                 <p>
//                     I appreciate that we have a CA project aimed to help us in our future
//                     assignments, instead of proof-of-concept handins that we will never use
//                 again for anything but code references and practicing. <br />
//                 </p>
//             </div>
//         </div>
//     )
// }
