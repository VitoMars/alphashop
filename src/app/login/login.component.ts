import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userId: string = 'Vito';
  password: string = '';

  autenticazione: boolean = true;

  okMsg: string = 'Accesso consentito';
  errMsg: string = 'Spiacente, la userId e/o la password sono errati!';

  titolo: string = 'Accesso & Autenticazione';
  sottotitolo: string = 'Procedi ad inserire la userid e la password';

  constructor(private route: Router, private BasicAuth: AuthappService) {}

  ngOnInit(): void {}

  gestAuth() {
    // console.log(this.userId);

    if (this.BasicAuth.autentica(this.userId, this.password)) {
      this.route.navigate(['welcome', this.userId]);
      this.autenticazione = true;
    } else {
      this.autenticazione = false;
    }
  }
}
