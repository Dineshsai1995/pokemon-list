import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { response } from 'express';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit{

  pokemons: any[] = [];
  test = "dummy"
charmander: any;

  constructor( private dataservice: DataService)
  
  { }

  ngOnInit(): void{
    this.dataservice.getPokemons( )
    .subscribe((response: any)=>{
        console.log(response)
        this.pokemons = response.results;
      // response.results.forEach(results => {
      //   this.dataservice.getMoreData(result.name)
      //   .subscribe((response: any) => {

      //   })
      // })
    })
  }
}
