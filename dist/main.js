/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("async function getWeather(city){\n    try{\n        let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}\n        &APPID=0d688a8923717e5837591543c3ea1657&units=imperial`,{mode: 'cors'});\n        request = await request.json();\n        if(request.cod != 200){\n            throw new Error(`${request.cod}: ${request.message}`);\n        }\n        return await processWeatherJSON(request);\n    }\n    catch(err){\n        console.error(`ERROR ${err.message}`);\n    }\n}\n\nasync function processWeatherJSON(json){\n    return {\n        coord: json.coord,\n        weather: json.weather,\n        main: json.main,\n        name: json.name,\n        wind: json.wind,\n        clouds: json.clouds,\n        sunrise: json.sys.sunrise,\n        sunset: json.sys.sunset,\n    }\n}\n\nasync function displayWeather(data){\n    const city = document.querySelector(\"#city\");\n    const cond = document.querySelector(\"#condition\");\n    const temp = document.querySelector(\"#temperature\");\n    const hilo = document.querySelector(\"#highlow\");\n\n\n    city.textContent = data.name;\n    cond.textContent = data.weather[0].main;\n    temp.textContent = data.main.temp + \"\\u00B0\";\n    hilo.textContent = `High: ${data.main.temp_max}\\u00B0 Low: ${data.main.temp_min}\\u00B0 Feels Like: ${data.main.feels_like}\\u00B0`\n}\n\nconst searchCity = document.createElement(\"input\");\nsearchCity.setAttribute(\"type\", \"search\");\nsearchCity.setAttribute(\"id\", \"search\");\nsearchCity.setAttribute(\"placeholder\", \"Search City\");\nsearchCity.addEventListener(\"keyup\", async (e) => {\n    if(e.key === \"Enter\"){\n        const weather = await getWeather(searchCity.value);\n        displayWeather(weather);\n    }\n\n})\n\ndocument.querySelector(\"h1\").appendChild(searchCity);\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;