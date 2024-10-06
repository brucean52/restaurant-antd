# Restaurant AntD -> New Chopstix Restaurant

### [Live demo](https://restaurant-antd.xyz/)
### [Frontend only branch](https://github.com/brucean52/restaurant-antd/tree/frontend-only)

## Description

A fullstack demo restaurant app using Ant Design, React, TypeScript, Nodejs, Express, and PostgreSQL

Includes the following:
- Home, menu, nutrition and checkout page with routing. (React Router v6)
- Cart/Bag drawer with add, edit, and remove item functionality.
- Mobile Responsive.
- Dark Mode. (default is based on user preference)
- Server side REST API with SQL queries to setup the db.

![Alt text](https://github.com/brucean52/restaurant-antd/blob/master/sample_images/home.png "main")
![Alt text](https://github.com/brucean52/restaurant-antd/blob/master/sample_images/menu.png "menu")
![Alt text](https://github.com/brucean52/restaurant-antd/blob/master/sample_images/add-item.png "add-item")
![Alt text](https://github.com/brucean52/restaurant-antd/blob/master/sample_images/drawer.png "drawer")
![Alt text](https://github.com/brucean52/restaurant-antd/blob/master/sample_images/bag-edit.png "bag-edit")
![Alt text](https://github.com/brucean52/restaurant-antd/blob/master/sample_images/checkout.png "checkout")
![Alt text](https://github.com/brucean52/restaurant-antd/blob/master/sample_images/nutrition.png "nutrition")
![Alt text](https://github.com/brucean52/restaurant-antd/blob/master/sample_images/nutri-item1.png "nutrition-item1")
![Alt text](https://github.com/brucean52/restaurant-antd/blob/master/sample_images/nutri-item2.png "nutrition-item2")
![Alt text](https://github.com/brucean52/restaurant-antd/blob/master/sample_images/nutri-item3.png "nutrition-item3")

## Installation and Setup

In the project directory, you can run:

### 1. Must have a PostgreSQL db setup and running
Run the SQL queries in the `/backend/src/queries` directory to setup the db.

### 2. System configuration setup
Create a .env file in both the backend and frontend folders using the .env.example files. 

### 3. `npm install` 
Required in the root directory in order to use the below npm commands concurrently for both frontend and backend folders.

### 4. `npm run install-all`
Installs the necessary modules for both the frontend and backend directories to run the application.

### `npm start` or `npm run dev`
Runs the app in development mode.
Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

### `npm run build`
Creates a production build of the app in the dist directory

### Front End Directory
### `npm test` 
Runs the applications tests. Test code was wrtten using React Testing Library.

## References

- Menu items & pictures are from [P.F. Chang's](https://www.pfchangs.com/)
- Rice bowl pictures are from [https://www.pressurecookrecipes.com/](https://www.pressurecookrecipes.com/)
- [Logo Graphic](https://www.dreamstime.com/chinese-plate-chopsticks-logo-template-asian-style-plate-vector-design-chinese-plate-chopsticks-logo-template-asian-image108252892)
- [Frame Graphic](https://www.freepik.com/free-vector/oriental-frames-set_8610267.htm#fromView=search&page=2&position=18&uuid=55f16bb0-8292-4e5e-a01f-54186389595a)