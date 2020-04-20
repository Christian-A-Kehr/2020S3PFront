import React from "react";
import "./text.css";

export default function Home() {
    return (
        <div>
            <HowToUse />
            <PersonalReflectionsChristian />
            <PersonalReflectionsMartin />
        </div>
    );
}

function HowToUse() {
    return (
        <div>
            <div className=" instructions">
                <h2> Instructions</h2>
                <div className="introText">
                    <p>
                    1. Don't touch: 'Login/Login.js', 'index.js' and 'ApiFacade.js'.<br />
                    <br />
                    2. All URLs are to be added in 'Settings/Settings.js'. Remember to
                    handle exports and imports of the URLs where required.<br />
                    <br />
                    3. A template for how to use REST fetch is shown in '/REST/Jokes.js'.
                    This can be changed or copied according to the project requirements.<br />
                    <br />
                    4. The Navbar is also partly a template. It should be modified to suit
                    the project.<br />
                    <br />
                    5. When cloning, remember to double check the REST URLs.<br />
                    <br />
                    6. Then use 'npm install', 'npm install react-router-dom' followed by
                    'npm start' to get a local deployment.<br />
                    <br />
                    7. Surge deployment is done as follows:<br />
                    1- In the root of the frontend open a terminal and do 'npm run build'<br />
                    2- In the same terminal do 'surge --project ./build --domain A_DOMAIN_NAME.surge.sh'<br />
                    <br />
                    If you have not installed Surge or made an account previously, more info can be found here:
                    https://docs.google.com/document/d/1TPkVw4HLB1yeKXOrQQKvH72JOvBQhgVmxSCe8087NoE/edit
                    </p>
                </div>
            </div>
        </div>
    )
}

function PersonalReflectionsChristian() {
    return (
        <div className=" instructions">
            <h2>Personal reflections related to how the start code was used</h2>
            Name: Christian Kehr <br />
            <div className="personaltext">
                <p>
                CA3 has been a great way to catch up on topics that were missed or
                needed refreshing. <br />
                The fact that Covid19 has made the two react weeks a nightmare for
                those of us with kids. Is clearly felt while struggling with the
                frontEnd. <br />
                That's why CA3 is a great why to ensure that students reach a state
                where they can actually focus on coding and not the set-up aspect.
                </p>
            </div>
        </div>
    )
}

function PersonalReflectionsMartin() {
    return (
        <div className=" instructions">
            <h2>Personal reflections related to how the start code was used</h2>
            Name: Martin Brandstrup <br />
            <div className="personaltext">
                <p>
                I appreciate that we have a CA project aimed to help us in our future
                assignments, instead of proof-of-concept handins that we will never use
                again for anything but code references and practicing. <br />
                </p>
            </div>
        </div>
    )
}
