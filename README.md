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
