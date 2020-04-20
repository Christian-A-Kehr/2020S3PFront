### How to use:

- Don't touch: 'Login/Login.js', 'index.js' & 'ApiFacade.js'
- All URLs are to be added in 'Settings/Settings.js'. Remember to handle exports and imports of the URLs where required
- A template for how to use REST fetch is shown in '/REST/Jokes.js'. This can be changed or copied according to the project requirements
- The Navbar is also partly a template. It should be modified to suit the project

## Cloning:

- First thing to do is remove the old .git folder
- Next create a fresh github repository to publish your project to. Remember to change the folder name

- Change target backend URL to the appropriate droplet in the 'Settings/Settings.js' file
- Open a terminal in the root folder and write:
- 'npm install'
- 'npm install react-router-dom'
- 'npm start' to get a local deployment

## Deployment Surge:

- In the root of the frontend open a terminal and do 'npm run build'
- In the same terminal do 'surge --project ./build --domain A_DOMAIN_NAME.surge.sh'

If you have not installed Surge or made an account previously, more info can be found here: 
https://docs.google.com/document/d/1TPkVw4HLB1yeKXOrQQKvH72JOvBQhgVmxSCe8087NoE/edit