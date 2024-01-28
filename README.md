# The Rostering App



https://github.com/Tali12345/Rostering-App/assets/89640588/484e7fa0-414c-4505-92d7-9c2ecb9b11b2



## How to Run?
1. Run `git clone https://github.com/Tali12345/Rostering-App.git`.
2. Run `cd Rostering-App`.
3. Run `npm install`.
4. Add .env file with DB_USERNAME=XXX DB_PASSWORD=YYY where XXX and YYY are the mongodb usename and password respectively.
5. Run `npm run server` then the server will run on port 8080.
6. In a different tab run `npm start`, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## The Project

### Client
The React Components are:
- **Drivers** - Drivers table with the columns: Name, Id and a last column for actions. **Actions** is a component that returns a button for choosing the driver.
- **Assignments** - Assignments table with the columns: Driver, Task Id and a column for each day of the week for the type of the daily task. **DriverCell** represents the driver cell of the column Driver in the Assignments table.

The app provides an easy way to assign drivers to tasks, and there is also an option to reset all the user's assignments actions, by clicking the reset button.

There are 2 ways in which the user can match an assignment and a driver:
1. Picking a driver from the drivers table (by clicking the suitable button in the drivers table) and then picking which task to assign to him (by clicking the suitable "+ Driver" button in the assignments table)
2. Clicking a task (clicking the suitable "+ Driver" button in the assignments table) and choosing which driver to assign to it from the drivers table (by clicking the suitable button in the drivers table)

The redux store holds the current application state. 

### Server
The server persists the application state so after clicking the refresh button in the browser the state is still kept. 
The server also keeps the data (state) in a database - mongoDB, so if the server stops, the data will still be kept.
The client and server are communicating through HTTP protocol.

## Technologies
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a>
<a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
<a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
<a href="https://redux.js.org/" target="_blank" rel="noreferrer"> <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a>
<a href="https://www.mongodb.com/" target="_blank"> <img src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a>  
