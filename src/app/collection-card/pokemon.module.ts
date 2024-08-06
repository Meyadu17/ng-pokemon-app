import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { CardCollectionService } from '../services/card-collection.service';
import { AccueilComponent } from './accueil/accueil.component';
import { ImageModalDirective } from './image-modal.directive';

//Attention à l'ordre des routes !
//on pars du plus spécifique au plus global !!!
const pokemonRoutes: Routes = [
  { path: 'edit/pokemons/:id', component: EditPokemonComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'pokemons/:id', component: DetailPokemonComponent},
];

@NgModule({
  declarations: [
    AccueilComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    ImageModalDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [
    CardCollectionService
  ]
})
export class PokemonModule { }
