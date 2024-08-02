import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

/*
 * @Component est un décorateur
 / Dans le component, il doit au minimum y avoir deux élément :
 * selector : permet de donner un nom au coomposant afin de l'identifier pas la suite -> c'est comme ça qu'on créer nos balises personalisées
 * template : instruction qui permet de définir le code html associé
 *            `` : spécifique à JS, permet d'ecrire du string sur plusieurs ligne sans avoir à concaténer. Ne pas confondre avec "" ou '' !
 * templateUrl : remplace template afin de faire appel un un fichier html dans lequel il y a le code html 
 *               si le ficher est dans le même doffier pas besoin de mettre le chemin relatif (./)
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
//export permet d'expoter le composant, le rentant disponible ailleur dans l'application (équivalent au public dans les classes Java)
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSeleted: Pokemon|undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string){
    const id = +pokemonId;
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if(pokemon){
      console.log(`Vous avez demandé le pokémon ${pokemon.name}.`);
      this.pokemonSeleted = pokemon;
    }else{
      console.log(`Vous avez demandé un pokémon qui n'existe de pas.`);
      this.pokemonSeleted = pokemon;
    }
    //Conversion string en number : Number(maVariable) ou +maVariable;
    //Syntaxe back-type :
    
    //permet d'éviter la concatenation
   
  }
}
