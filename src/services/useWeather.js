import { useEffect, useState } from "react";

export function useWeather(city) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=15f25cebf3f53ab1a5d9d8c466ed17be`
    )
      .then((e) => e.json())
      .then((e) => {
        setData(e);
      });
  }, [city]);

  return data;
}
