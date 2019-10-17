import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { TopnavComponent } from './topnav/topnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatInputModule, MatSelectModule,
  MatIconModule, MatListModule, MatDialogModule, MatCardModule, MatFormFieldModule } from '@angular/material';
import { MainmapComponent } from './mainmap/mainmap.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ConspopComponent } from './conspop/conspop.component';
import { FooterComponent } from './footer/footer.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'https://wynlab.com:3300', options: {}};

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
    ConspopComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXeVx9SW9E8L1P3HK91SVOxMb3hEAXlHY',
      libraries: ['places']
    }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
    ConspopComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
