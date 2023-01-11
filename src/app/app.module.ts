import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule} from '@angular/router';
import { ROUTES} from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { UserComponent } from './menu/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    SignUpComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
