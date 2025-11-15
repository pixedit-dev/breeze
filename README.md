# Breeze - Weather Web Application

Breeze is a modern, responsive weather application designed to deliver accurate forecasts with a clean and intuitive interface. It’s simple to use and quickly provides users with all the important weather data in a clear, straightforward way. Although it began as a personal learning project, I hope you find it useful and enjoyable.

## Demo link

_I'll add this later_

## Features

- Real-time weather updates powered by [OpenWeatherAPI](https://openweathermap.org/)

- 5-day forecast with detailed daily breakdown

- 48-hour hourly forecast

- Toggle button to switch between Fahrenheit & Celsius

- Fully responsive across all devices

- Simple to use and user-friendly design

- Light/Dark mode support

## Tech Stack

- **Frontend:** React, JavaScript, Context API, useReducer

- **Bundler:** Vite

- **API:** OpenWeatherMap

- **Deployment:** Vercel

- **Version Control:** Git + GitHub

## How to start?

### Requirements

- Node.js (^18)
- npm or yarn

### Clone the Repository

```
git clone https://github.com/pixedit-dev/breeze.git
```

### Navigate to Project Directory

```
cd breeze
```

### Install Dependencies

```
npm install
```

### You will need an API key in a `.env` file in the root

Go to [OpenWeatherAPI](https://openweathermap.org/), sign-up and generate your API key, and paste it into the `.env` file like:

```
VITE_OPENWEATHER_API_KEY=the_api_key_here
```

_Make sure the `.env` file is included in your `.gitignore` to avoid exposing your API key._

### _Quick Note!_

The application reads this variable using import.meta.env.VITE_OPENWEATHER_API_KEY in `api.js` file.

### Start development server

```
npm run dev
```

## Preview

_Screenshots will be added later!_

## Next features include:

- Dynamic background based on weather condition
- Receive weather data automatically based on user location
- Coordinate-based search
- Improved UI layout and styling

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Developed by Milad — Front-End Developer

[GitHub](https://github.com/pixedit-dev)

_Personal portfolio coming soon!_
