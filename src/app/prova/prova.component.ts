import { Component } from '@angular/core';




@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css',
})
export class ProvaComponent{
   constructor(){}

   calciatori = [
    {nome:"Diego Armando",
     cognome:"Maradona",
     nazionalita:"Argentino",
     squadra:"Napoli",
     immagine:"https://www.istitutoremobrindisi.it/wp-content/uploads/2020/12/Diego_Armando_Maradona_6.jpg",
     descrizione:`Diego Armando Maradona è stato un calciatore, allenatore di calcio e dirigente sportivo argentino, di ruolo centrocampista offensivo, campione del mondo nel 1986 e vicecampione del mondo nel 1990 con la nazionale argentina. Soprannominato El Pibe de Oro, è considerato uno dei più grandi calciatori di tutti i tempi.`
    },
     

    {nome:"Marcel",
     cognome:"Van Basten",
     nazionalita:"Olandese",
     squadra:"Milan",
     immagine:"https://editorial.uefa.com/resources/0253-0d041a4a788e-72dc8c565498-1000/0.68_marco_van_basten_ajax_ac_milan_19_goals_in_28_games.jpeg",
     descrizione:`Marcel van Basten, detto Marco, è un allenatore di calcio ed ex calciatore olandese, di ruolo attaccante. È ambasciatore del calcio per la UEFA, dopo aver già ricoperto il ruolo di Chief Officer for Technical Development per la FIFA.`
    },

    {nome:"Antonio",
     cognome:"Conte",
     nazionalita:"Italiana",
     squadra:"Juventus",
     immagine:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrltT-JBpNWaF0vAs2bcjkT5pE6K-5w91Jw&usqp=CAU",
     descrizione:`Antonio Conte è un allenatore di calcio ed ex calciatore italiano, di ruolo centrocampista. Giocatore combattivo e molto versatile tatticamente,è cresciuto nel settore giovanile del Lecce, con cui ha esordito in Serie A e in cui ha militato per nove annate, per poi assurgere ad alti livelli nella Juventus, club di cui ha vestito la maglia per tredici stagioni, a cavallo degli anni 1990 e 2000, diventandone capitano e simbolo in virtù della propria dedizione, tenacia e grinta.`
    },

    {nome:"Wayne",
     cognome:"Rooney",
     nazionalita:"Inglese",
     squadra:"Manchester United",
     immagine:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xK4FphqXf8JugfCJVutH1L38WUCcPisMvw&usqp=CAU",
     descrizione:`Wayne Mark Rooney è un allenatore di calcio ed ex calciatore inglese, di ruolo attaccante, tecnico del Birmingham City.`
    },

    {nome:"Luis Nazario",
     cognome:"De Lima",
     nazionalita:"Brasiliana",
     squadra:"Inter",
     immagine:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjxR-zKT44BBGTQ1OC7sa7xzeBvSkKNq7JA&usqp=CAU",
     descrizione:`Ronaldo Luís Nazário de Lima, conosciuto semplicemente come Ronaldo, è un dirigente sportivo ed ex calciatore brasiliano, di ruolo attaccante, proprietario del Real Valladolid e del Cruzeiro.`
    }
   ]    
}


