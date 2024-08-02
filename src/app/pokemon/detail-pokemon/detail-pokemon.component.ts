import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService
  ) { }
  
  ngOnInit(): void {
    const pokemonId = this.route.snapshot.paramMap.get('id');
    
    if(typeof pokemonId === 'string'){
    this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }

}
