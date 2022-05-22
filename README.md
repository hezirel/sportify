# Sportify - API Data Analytics Dashboard

## General Informations

Sportify is the 12th project of my Open Classrooms JavaScript / React Developper Diploma.

The aim was to handle asynchronous fetch requests to a local API micro service including errors handling on multiple points. 

Then display the data received in various forms using a React charting components library

## Setup

### Backend

#### API Server

The project needs an API server to fetch the data from.

The backend for this project is available on [this repo from OpenClassrooms](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

### Frontend

#### Environnement Variables

The address of the API server must be set in [src/js/env.js](src/js/env.js)

## Start

### Live Server

Live server including hot reload on files change is provided by Create-React-App Scripts via npm

To launch live server 

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Options

### User ID

The user ID used for retrieving data is to `12` by default

To change this value add an integer at the end of the URL

#### Available Users ID

[ `12` || `18` ]