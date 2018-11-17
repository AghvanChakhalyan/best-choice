import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {HomeComponent} from './pages/home/home.component';


const appRoute: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
     path: 'sport',
     loadChildren: "./pages/sport-school/sport-school.module#SportSchoolModule"
   },
  {
    path: 'news',
    loadChildren: './pages/news/news.module#NewsModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
