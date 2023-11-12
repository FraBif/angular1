import { Component,  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';




@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css',
})
export class ProvaComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit{
   constructor(){}
   title = "cibo"
   ngOnInit() {
       console.log("ngOnInit")
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
   onInput(event: Event){
    this.title = (<HTMLInputElement>event.target).value
   }
   onClick(event: Event){
    this.title = "pizza"
   }
   isVisible = true
}


