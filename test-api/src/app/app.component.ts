import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //a variável "users$" está recebendo uma lista de objetos User
  users$: User[];


  /*aqui estamos injetando (declarando na passagem por parâmetro ou chave no constructor) 
  uma variável do tipo "DataService" que é o service que criamos para este processo.*/
  constructor(private dataService: DataService){}


  /*aqui estamos "montando" a lista de usuarios*/
  ngOnInit(){
    return this.dataService.getUsers()
      .subscribe(data => this.users$ = data); 
    }
}
