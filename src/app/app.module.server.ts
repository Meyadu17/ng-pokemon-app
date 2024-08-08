import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    MatDialogModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
