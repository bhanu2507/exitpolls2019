import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { TopnavComponent } from './topnav/topnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatDialogModule} from '@angular/material';
import { MainmapComponent } from './mainmap/mainmap.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ConspopComponent } from './conspop/conspop.component';

const appRoutes: Routes = [
  { path: 'contactus', component: ContactusComponent },
  { path: '**', component: MainmapComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    MainmapComponent,
    ContactusComponent,
    ConspopComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXa9d_GSmDEI8dnrAdfHZk5myGtNPfdtQ'
    }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
    ConspopComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
