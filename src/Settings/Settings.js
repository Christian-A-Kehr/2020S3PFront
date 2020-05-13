// URL for the deployed server. All endpoints are to be added below. Called in 'REST/jokesREST'.
//const URL = "https://e-scape.dk/2020S3PBack/";

// URL for the Local vagrant server
const URL = "http://localhost:8080/2020S3PBack";


/*
Following URLs are modular and can be changed according to the requirements of the project.
EP = endpoint
*/
const userDataEP = "/api/info/user";
const loginEP = "/api/login";

/*
Add custom endpoints here for REST endpoints. Called in 'Navbar/Components'.
*/
// const allJokesEP = "/api/jokes";
//new covid data for one country needs an id => countryCode
const getNewestCovidEP = "/api/country/new/"; //+ countryCode
// get a list of all countries 
const getCountriesEP = "/api/country";
// get a list of the latest covid entries needs an id => countryCode
const getCountryDevelopmentEP = "/api/country/new/3/"; //+ countryCode

export { URL, userDataEP, loginEP, getNewestCovidEP, getCountriesEP, getCountryDevelopmentEP };