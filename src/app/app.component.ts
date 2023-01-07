import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad9';
  num1: number =0;
  num2: number =0;
  resultado: number = 0;

  selectValue: string = "";

  calculate(){
    console.log(this.selectValue)
    switch (this.selectValue){
      case "+":
        this.resultado = this.num1 + this.num2;
        break
      case '-': 
        this.resultado = this.num1 - this.num2;
        break
      case '/':
        this.resultado = this.num1 / this.num2;
        break
      case '*': 
        this.resultado = this.num1 * this.num2;
        break
    } 
  }



}
