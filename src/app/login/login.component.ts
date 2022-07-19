import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "Vito";
  password: string = "";

  autenticazione: boolean = true;

  okMsg: string = "Accesso consentito";
  errMsg : string = "Spiacente, la userId e/o la password sono errati!";


  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAuth() {
    // console.log(this.userId);

    if(this.userId === "Vito" && this.password ==="pippo"){
      this.route.navigate(["welcome", this.userId]);
      this.autenticazione = true;
    }
    else{
      this.autenticazione = false;
    }
  }

}
