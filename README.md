# Resturant Reviews App
Customers can leave their reviews and it will showcase them in the website.

the reviews are stored in a dynamodb and data is read and written to it via lambdas.

The lambdas are stored in `lambdas` folder, they have been deployed directly via the aws console. 
For bigger projects it is better to use AWS SAM and use a cloud formation teplate to deploy the backend.




## Installation

While inside `goals-app` 
use `yarn install` or `npm install` depending on the package manager available to install the dependencies of the project

inside `goals-app\src\common\config.js` file, put in the API gateway endpoint in the denoted spot.

then use `yarn start` or `npm start`, 
this will run the application locally at [http://localhost:3000](http://localhost:3000)

### Images
![](../ApplicationWorking.png)
![](../ApplicationWorking2.png)

