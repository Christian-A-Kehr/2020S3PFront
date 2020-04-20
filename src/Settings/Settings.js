// URL for the deployed server. All endpoints are to be added below. Called in 'REST/jokesREST'.
const URL = "https://cakehr.dk/2020S3P";

// URL for the Local vagrant server
//const URL = "http://localhost:8080/2020S3P";


/*
Following URLs are modular and can be changed according to the requirements of the project.
EP = endpoint
*/
const userDataEP = "/api/info/user";
const loginEP = "/api/login";

/*
Add custom endpoints here for REST endpoints. Called in 'Navbar/Components'.
*/
const allJokesEP = "/api/jokes";

export { URL, userDataEP, loginEP, allJokesEP };