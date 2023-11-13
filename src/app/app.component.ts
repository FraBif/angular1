import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2';

  calciatori = [
    {nome:"Diego Armando", cognome:"Maradona", nazionalita:"Argentino", squadra:"Napoli"},
    {nome:"Marco", cognome:"Van Basten", nazionalita:"Olandese", squadra:"Milan"},
    {nome:"Antonio", cognome:"Conte", nazionalita:"Italiana", squadra:"Juventus"},
    {nome:"Wayne", cognome:"Rooney", nazionalita:"Inglese", squadra:"Manchester United"},
    {nome:"Roberto", cognome:"Mancini", nazionalita:"Italiana", squadra:"Inter"}
   ]    
}


