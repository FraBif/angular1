import { Component,  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css',
})
export class ProvaComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit{
   immagine = ''
   immagine1 = 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=226749&type=card'
   immagine2 = 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=226755&type=card'
  
   constructor(){}
   ngOnInit() {
       let counter = 0
       setInterval(()=>{
        if(counter%2 === 0){
           this.immagine = this.immagine1
           console.log("Delver non è flippato")
        } else{
            this.immagine = this.immagine2
            console.log("Delver è flippato")
        }
        counter++
       }, 2000)
   }
   ngOnChanges() {
       console.log("ngOnChanges")
   }
   ngDoCheck(){
       console.log("ngDoCheck")
   }
   ngAfterContentInit(){
       console.log("ngAfterContentInit")
   }
   ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
   }
   ngAfterViewInit(){
    console.log("ngAfterContentInit")
   }
   ngAfterViewChecked(){
    console.log("ngAfterViewChecked")
   }

   
}


