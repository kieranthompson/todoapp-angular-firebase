import { Component } from '@angular/core';
import { AngularFireDatabase , FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string;
  password: string;
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal = '';
  isDisabled = true;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, public authService: AuthService) {
    this.items = af.list('/messages');


    this.user = this.afAuth.authState;
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  send(desc: string) {
    this.items.push({ message: desc});
    this.msgVal = '';
}
}
