const cityName = document.querySelector("#city");
const searchBtn = document.querySelector("#submitForecast");

const apiKey = `b12728230195715929ebcf26e3e59240`;
async function getWeather(e) {
  try {
    e.preventDefault();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&APPID=${apiKey}`,
    );

    const data = await response.json();

    forecastWeather.innerHTML = `
    <tr>
      <td>
        <img
          src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"
          alt="weather icon"
        />
      </td>
      <td>${data.weather[0].main}</td>
      <td>${data.weather[0].description}</td>
      <td>-</td>
      <td>-</td>
      <td>${data.main.temp_min.toFixed(2)}°C</td>
      <td>${data.main.temp_max.toFixed(2)}°C</td>
      <td>${data.main.pressure} hPa</td>
      <td>${data.main.humidity}%</td>
      <td>${data.wind.speed} m/s</td>
      <td>${new Date(data.dt * 1000).toLocaleDateString()}</td>
    </tr>
  `;

    console.log(data);
    cityName.value = "";
  } catch {
    alert("City not found. Please try again.");
  }
}

searchBtn.addEventListener("click", getWeather);
