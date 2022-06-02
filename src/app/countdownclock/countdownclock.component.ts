import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-countdownclock',
  templateUrl: './countdownclock.component.html',
  styleUrls: ['./countdownclock.component.css']
})
export class CountdownclockComponent implements OnInit {
displayval:any
limit:any

  constructor() { }
  
  ngOnInit(): void {
  }
  getvalue(val:string){

   this.displayval=parseInt(val)



var i = 0;                  

    const myLoop = () => {         
  setTimeout(() => {   
   this.displayval--  
                       
    if (this.displayval>0) {           
      myLoop();             
    }                      
  }, 1000)
}

myLoop();                   

  }
           
    
  }


function push(displayval: any): any[] {
  throw new Error('Function not implemented.');
}

