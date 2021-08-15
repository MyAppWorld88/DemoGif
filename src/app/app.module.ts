import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';

import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';


import { UserAuthService } from './service/user-auth.service';
import { FeaturemoduleModule } from './mycomponent/featuremodule/featuremodule.module';
import { FeatureroutingModule } from './mycomponent/featuremodule/featurerouting.module';
import { PageNotFoundComponent } from './mycomponent/page-not-found/page-not-found.component';







@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturemoduleModule,
    FeatureroutingModule,
    HttpClientModule
  ],
  providers: [
    UserAuthService,
    ErrorHandlerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
