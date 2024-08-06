import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { Router } from '@angular/router';
import { Region } from '../../models/region';
import { CardCollectionService } from '../../services/card-collection.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
})
export class AccueilComponent implements OnInit {
  pokemonList: Pokemon[];
  regionList: Region[];

  constructor(
    private router:Router,
    private cardCollectionService: CardCollectionService,
    //private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonList = this.cardCollectionService.getPokemonList();
    this.regionList = this.cardCollectionService.getAllRegions();
  }

  goToPokemon(id:number){
    this.router.navigate(['/pokemons', id]);
  }
}
