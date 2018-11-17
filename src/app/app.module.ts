import {NgModule} from '@angular/core';
import {MomentModule} from 'ngx-moment';
import {BrowserModule} from '@angular/platform-browser';

import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {HeaderComponent} from './components/header/header.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppComponent} from './components/root/app.component';
import {HomeComponent} from './pages/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MomentModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
