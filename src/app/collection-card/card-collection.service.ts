import { Injectable } from '@angular/core';
import { Region } from '../models/region';
import { Pokemon } from '../models/pokemon';
import { POKEMONS, REGION } from '../mock';

@Injectable()
export class CardCollectionService {

  constructor() { }

  getAllRegions(): Region[]{
    return REGION;
  }

  //---------------------------------------------------//
  getPokemonList():Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon{
    const pokemon = POKEMONS.find(pokemon => pokemon.id === pokemonId);
    if (!pokemon) {
      throw new Error('Il n\existe pas de pokemon avec l\'id ' + pokemonId + '.');
    }
    return pokemon;
  }

  getPokemonTypeList(): string[]{
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Incecte', 
      'Electrik', 
      'Poison', 
      'Fér', 
      'Vol', 
      'Combat', 
      'Psy'
    ];
  }
  //---------------------------------------------------//

}
