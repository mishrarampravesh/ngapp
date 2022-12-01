import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component-copy.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length : Number = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymble = false;
  password = '';


  onChangeIncludeLetters(){
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters)
  }

  onChangeIncludeNumbers(){
    this.includeNumbers = !this.includeNumbers;
    console.log(this.includeNumbers)
  }

  onChangeIncludeSymble(){
    this.includeSymble = !this.includeSymble;
    console.log(this.includeSymble)
  }

  onUserInput(bantu : Event){
    //String to nunber conversion --> use '+' or parseIn()
    this.length = +(bantu.target as HTMLInputElement).value;
    console.log(this.length)
  }

  genPass(){
    //use 'let' or 'const' for variable declaration in typescript
    const letters = 'abcdefghijklmnopqurstuvwxyz';
    const Number = '0123456789';
    const Symble = '!@#$%^&*()';

    let validChar = '';

    //what babu want
    if(this.includeLetters) validChar += letters;
    if(this.includeNumbers) validChar += Number;
    if(this.includeSymble) validChar = validChar + Symble;

    console.log(validChar);

    let generatedPassword = '';
    for(let i=0; i < this.length; i++){
      //not point 
      const index = Math.floor(Math.random()*validChar.length)
      generatedPassword += validChar[index];
    }
    this.password=generatedPassword;
  }

/*
  password = '';  //property binding
 buttonclick(){
  console.log("click ho gya");
  this.password = "@apna_password";
 } */
}
