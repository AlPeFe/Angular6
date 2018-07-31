import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{DevExtremeModule, DxTemplateModule} from 'devextreme-angular';
import { Http, HttpModule } from '@angular/http';
import { GridPacienteService } from './paciente.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DevExtremeModule,
    DxTemplateModule,
    BrowserModule,
    HttpModule,

  ],
  providers: [GridPacienteService],
  bootstrap: [AppComponent]
})

export class AppModule { }

