import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PersonAddComponent } from './person/person-add.component';
import { PersonEditComponent } from './person/person-edit.component';
import { PersonListComponent } from './person/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonEditComponent,
    PersonAddComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'persons', pathMatch: 'full'
      },
      {
        path: 'persons', component: PersonListComponent
      },
      {
        path: 'persons/edit/:id', component: PersonEditComponent
      },
      {
        path: 'persons/new', component: PersonAddComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
