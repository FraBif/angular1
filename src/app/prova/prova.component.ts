import { Component, OnInit } from '@angular/core';
import { CalciatoriService } from '../services/calciatori.service';




@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css',
})
export class ProvaComponent implements OnInit{
   constructor(public calciatori: CalciatoriService){}

   ngOnInit(): void {
       console.log(this.calciatori.calciatori[2].nome)
   }

  
}


