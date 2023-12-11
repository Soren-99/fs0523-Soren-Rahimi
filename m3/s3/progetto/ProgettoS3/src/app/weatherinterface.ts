
interface WeatherData {
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  main: {
    temp:number;
    humidity: number;
    pressure: number;
  };
  weather: {
    description: string;
  }[];
  coord:{
    lat: number;
    lon: number;

  }
}
