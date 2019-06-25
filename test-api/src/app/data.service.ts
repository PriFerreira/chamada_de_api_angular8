import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /*este é o service que criamos para realizar essa comunicação com a url 
  da api. Declaramos a variável "apiUrl" para guardar o endereco da api*/
  apiUrl = 'http://jsonplaceholder.typicode.com/users';
 

   /*aqui estamos injetando (declarando na passagem por parâmetro ou chave no constructor) 
  uma variável do tipo "HttpClient" que efetuará a comunicação com o endereço que lancamos 
  na variável anteriormente citada*/
  constructor( private _http: HttpClient ) { }


   /*getUsers() traz o retorno dos dados contidos na api */
    getUsers(){
      return this._http.get<User[]>(this.apiUrl);
    }
}
