import { LOCALE_ID, NgModule } from '@angular/core';
// BrowserModule fournis les directives ngif et ngfor
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';;
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';

registerLocaleData(localeFr);
/*
 * NgModule permet de déclarer une serie d'éléments
 * declaration : liste les composants, les directives, les pipes qui appartienent à ce module
 * imports : cette clé permet de déclarer tout les autres modules nececaire à ce module
 * provider: permet l'injection de dépendances (il existe d'autre façon de faire de l'injection de dépendances)
 * bootstrap : propre au module racine, n'est pas dans les autres coposants.
 *             Indique quel est le premier composant à démarrer lorsque l'utilisateur charge l'application dans le navigateur
 */
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    /* attention à l'ordre des imports par rapport à la lecture des routes !! */
    PokemonModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
