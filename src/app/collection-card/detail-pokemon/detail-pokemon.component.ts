import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon';
import { CardCollectionService } from '../card-collection.service';

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
    private pokemonService: CardCollectionService
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

  goToEditPokemon(id:number){
    this.router.navigate(['/edit/pokemons', id]);
  }

}
