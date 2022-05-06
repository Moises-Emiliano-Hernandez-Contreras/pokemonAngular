import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private http:HttpClient) { }
  getPokemon():Observable<any>{
    let id=Math.floor(Math.random() * (151 - 1)) + 1;
    const URL='https://pokeapi.co/api/v2/pokemon/'+id
    return this.http.get(URL)
  }
}
