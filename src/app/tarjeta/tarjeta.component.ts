import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  pokemon:any ={}
  loading:boolean = false
  constructor(private pokeService:PokemonService) { }
  imprimir(){
    this.loading=true;
    this.pokeService.getPokemon().subscribe(
      (r)=>{console.log(r);this.pokemon=r;this.loading=false},
      (e)=>{console.log(e)}
    )
  }
  ngOnInit(): void {
    this.imprimir()    
  }

}
