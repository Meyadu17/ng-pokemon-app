import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../models/pokemon';
import { CardCollectionService } from '../../services/card-collection.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html'
})
export class EditPokemonComponent implements OnInit{

  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: CardCollectionService
  ){}

  ngOnInit(): void {
    const pokemonId = this.route.snapshot.paramMap.get('id');
    if (typeof pokemonId === 'string') {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }


}
