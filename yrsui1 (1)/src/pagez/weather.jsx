import { useParams } from "react-router-dom";
import { useWeather } from "../services/useWeather.js";
export function WeatherPage() {
  const { city } = useParams();
  const data = useWeather(city);
  return (
    <div>
      <table>
        <tr>
          <td>Текущая температура:</td>
          <td>{data?.main?.temp}</td>
        </tr>
        <tr>
          <td>Минимальная:</td>
          <td>{data?.main?.temp_min}</td>
        </tr>
        <tr>
          <td>Максимальная:</td>
          <td>{data?.main?.temp_max}</td>
        </tr>
        <tr>
          <td>Погода:</td>
          <td>{data?.weather?.[0].main}</td>
        </tr>
      </table>
    </div>
  );
}
