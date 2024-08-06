import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { Router } from '@angular/router';
import { CardCollectionService } from '../../services/card-collection.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  //j'ai besoin de récupérer 1 pokemon
  @Input() pokemon: Pokemon;
  types: string[];

  constructor(
    private pokemonService: CardCollectionService,
    private router: Router
    ){}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean{
    //si le type passé en paramètre est présent dans le type du pokemon, cela revois true
    //si le type passé en paramètre n'est pas présent dans le type du pokemon, cela revois false
    return this.pokemon.types.includes(type);
  }

  /**
   * Mis à jour du pokémon courant en fonction des cases remplis par le user
   * @param $event pour savoir si l'element à été coché ou décoché
   * @param type pour savoir de quel type on parle
   */
  selectType($event: Event, type: string){
    const isChecked = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  /**
   * Methode qui empêche :
   * - de décocher une case que seulement 1 checbox est coché
   * - de cocher des cases si plus de 2 checbox sont cochés
   * @param type 
   * @returns 
   */
  isTypesValid(type: string): boolean{
    //Si l'utilisateur a coché une seule case, il faut l'empêcher de pouvoir desélectionner cette case.
    //(pour ne pas tomber à 0 case coché)
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    } 
    
    //si l'utilisateur a déjà sélectionné 3 cases, il faut l'empêcher de sélectionner les autres cases
    //(pour ne pas avoir plus de 3 types)
    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
        return false;
      }

    return true;
  }

  onSubmit(){
    console.log('Le formulaire à bien été soumits');
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }

}
