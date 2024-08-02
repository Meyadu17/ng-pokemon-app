import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable()
export class PokemonService {

  constructor() { }

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
}
