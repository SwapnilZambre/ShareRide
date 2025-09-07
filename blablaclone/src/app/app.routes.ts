import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SearchComponent } from './ride/search/search.component';
import { DetailsComponent } from './ride/details/details.component';
import { OfferComponent } from './ride/offer/offer.component';
import { BookingComponent } from './ride/booking/booking.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'search', component: SearchComponent },
    { path: 'ride/:id', component: DetailsComponent },
    { path: 'offer', component: OfferComponent },
    { path: 'booking/:id', component: BookingComponent }
  ];
