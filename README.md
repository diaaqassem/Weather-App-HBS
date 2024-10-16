<p align="center">
  <a href="https://nodejs.org/en/" target="blank"><img src="https://th.bing.com/th/id/R.d42672d4d185739d26257ed5c653c740?rik=dvh0VB%2fEWz20hQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png&ehk=bMmyN3n62enzXql6L4A5EzHc90tJxK%2bKcr6GMACTfRk%3d&risl=&pid=ImgRaw&r=0" width="200" alt="Node.js Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nodejs/node/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nodejs/node

<p align="center">A fast, unopinionated, and minimalist <a href="https://nodejs.org/en/" target="_blank">Node.js</a> framework for building web applications and APIs with <a href="https://expressjs.com/" target="_blank">Express</a>.</p>
<p align="center">
<a href="https://www.npmjs.com/package/express" target="_blank"><img src="https://img.shields.io/npm/v/express.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/express" target="_blank"><img src="https://img.shields.io/npm/l/express.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/express" target="_blank"><img src="https://img.shields.io/npm/dm/express.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nodejs/node" target="_blank"><img src="https://img.shields.io/circleci/build/github/nodejs/node/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nodejs/node?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nodejs/node/badge.svg?branch=master" alt="Coverage" /></a>
<a href="https://discord.gg/nodejs" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/expressjs#backer" target="_blank"><img src="https://opencollective.com/expressjs/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/expressjs#sponsor" target="_blank"><img src="https://opencollective.com/expressjs/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
<a href="https://paypal.me/nodejs" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
<a href="https://opencollective.com/expressjs#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nodejs" target="_blank"><img src="https://img.shields.io/twitter/follow/nodejs.svg?style=social&label=Follow"></a>
</p>




# Weather-App-sing-HBS
This project is a weather application that uses the HBS (Handlebars) template engine to display weather information. The user can input a city, and the application will retrieve the city's latitude and longitude, and then fetch the weather details based on those coordinates.

# Weather App using HBS Template Engine

## Features
- User inputs a city to get its weather information
- Retrieves latitude and longitude of the city
- Fetches weather data using external API based on latitude and longitude
- Uses HBS for rendering dynamic views

## Technologies Used
- Express: Backend framework for building the server
- HBS (Handlebars): Template engine for rendering views
- Nodemon: For automatically restarting the server during development
- Request: For making HTTP requests to fetch weather data

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine.

### Prerequisites
- Node.js (v14 or higher)
- API key for a weather service like **OpenWeatherMap** or **Weatherstack** (optional, depending on the API used)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/diaaqassem/Weather-App-HBS.git
   cd Weather-App-HBS

2.Install dependencies:
   npm install

3.Start the project:
   npm run start
