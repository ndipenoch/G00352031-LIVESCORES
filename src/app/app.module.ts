import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivescoresDetailsComponent } from './livescores-details/livescores-details.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LivescoresService} from './livescores.service';
import { FormsModule } from "@angular/forms";
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatDialogModule,
  MatExpansionModule} from '@angular/material';
import { EnglandComponent } from './england/england.component';
import { SpainComponent } from './spain/spain.component';
import { ItalyComponent } from './italy/italy.component';
import { GermanyComponent } from './germany/germany.component';
import { FranceComponent } from './france/france.component';
import { PortugalComponent } from './portugal/portugal.component';
import { NetherlandComponent } from './netherland/netherland.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { BelgiumComponent } from './belgium/belgium.component';
import { PopupComponent } from './popup/popup.component';
import { SendRequestComponent } from './send-request/send-request.component';

/*Route or navigate to each component once they are called*/
const appRoutes: Routes = [
  {
    path:'england',
    component: EnglandComponent,
  },
  {
    path:'spain',
    component: SpainComponent,
  },
  {
    path: 'italy',
    component: ItalyComponent
  },
  {
    path: 'germany',
    component: GermanyComponent
  },
  {
    path: 'france',
    component: FranceComponent
  },
  {
    path: 'portugal',
    component: PortugalComponent
  },
  {
    path: 'netherland',
    component: NetherlandComponent
  },
  {
    path: 'belgium',
    component: BelgiumComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  //default component
  { path: '**', component: SpainComponent }

];



@NgModule({
  declarations: [
    AppComponent,
    LivescoresDetailsComponent,
    EnglandComponent,
    SpainComponent,
    ItalyComponent,
    GermanyComponent,
    FranceComponent,
    PortugalComponent,
    NetherlandComponent,
    LoginComponent,
    EditComponent,
    BelgiumComponent,
    PopupComponent,
    SendRequestComponent,
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatExpansionModule,
    MatTooltipModule,
  ],
  entryComponents : [PopupComponent],
  providers: [LivescoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
