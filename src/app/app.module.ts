import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateJuryComponent } from './jury/create-jury/create-jury.component';
import { JuryDetailsComponent } from './jury/jury-details/jury-details.component';
import { JuryListComponent } from './jury/jury-list/jury-list.component';
import { UpdateJuryComponent } from './jury/update-jury/update-jury.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    CreateJuryComponent,
    JuryDetailsComponent,
    JuryListComponent,
    UpdateJuryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
