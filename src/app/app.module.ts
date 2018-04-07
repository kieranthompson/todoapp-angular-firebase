import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';

export const firebaseConfig =  {
  apiKey: 'AIzaSyDUgtVeG9Mos_lpDblUhQ1STE5u3CQ5Z2k',
  authDomain: 'keztodoapp.firebaseapp.com',
  databaseURL: 'https://keztodoapp.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '401682541800'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
