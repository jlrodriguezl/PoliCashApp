import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/personas.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:Persona;

  constructor(private personaService:PersonaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.user = new Persona();
  }

  login(){
    console.log(this.user);
    this.personaService.login(this.user).subscribe(
      response => {
        if(response === 1){
          this.router.navigate(['/principal']);
        }
      },
      error => {
        console.log(<any>error)
      }
    );
  }
}
