import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=1302');

  }

  // getMoreData(name: string){
  //   return this.http.get('https://pokeapi.co/api/v2/pokemon/${name}')
  // }
}
