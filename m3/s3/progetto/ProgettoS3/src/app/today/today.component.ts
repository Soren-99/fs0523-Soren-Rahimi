import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrl: './today.component.scss'
})
export class TodayComponent implements OnInit {
  lat!: number;
  lon!: number;
  weather: any;
  cittaSalvata!: string;








  constructor(private weatherService: WeatherService) { }

ngOnInit() {
  this.getLocation();
  this.caricaCittaSalvata();
}

getLocation(){
  if("geolocation" in navigator){
    navigator.geolocation.watchPosition((success)=>{
      this.lat = success.coords.latitude;
      this.lon = success.coords.longitude;

      this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data =>{
        this.weather = data;
      },

      );
    })

  }
}
  getCity(city: string){
    this.weatherService.getWeatherDataByCityName(city).subscribe(data=>{
      this.weather = data;
    })
  }

  salvaCitta() {
    if (this.weather && this.weather.name) {
      this.cittaSalvata = this.weather.name;
      localStorage.setItem('cittaSalvata', this.cittaSalvata);
    }
  }

  caricaCittaSalvata() {
    const citta = localStorage.getItem('cittaSalvata');
    if (citta) {
      this.getCity(citta); // Carica i dati della città salvata quando la pagina si carica
      this.cittaSalvata = citta;

    }
  }





}
