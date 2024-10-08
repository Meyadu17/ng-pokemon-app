import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { CardCollectionService } from './card-collection.service';
import { AccueilComponent } from './accueil/accueil.component';
import { ImageGalleryComponent } from '../image-gallery/image-gallery.component';
import { ImageModalComponent } from '../image-modal/image-modal.component';

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
    ImageGalleryComponent,
    ImageModalComponent
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
