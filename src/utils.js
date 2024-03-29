export async function getData(city, language) {
  const key = "d177c104f9332b33dd4955c5315f9dcf"; //process.env.WEATHER_API_KEY;
  const API_LINK = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&APPID=${key}&units=metric`;
  try {
    const response = await fetch(API_LINK);
    const data = await response.json();
    if (data.cod != 200) {
      return {
        cod: 400,
      };
    }

    const info = {
      cod: 200,
      city: data.name,
      country: data.sys.country,
      temp: Math.round(data.main.temp),
      wind: data.wind.speed,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      description: data.weather[0].description,
      type: data.weather[0].main,
    };

    return info;
  } catch (error) {
    return error.message;
  }
}

// const dat = await getData('ss', 'pl');
// console.log(dat);
