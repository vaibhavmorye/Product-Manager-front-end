import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import {ConvetToSpacesPipe } from './shared/converttospace.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductDetailsComponent } from './products/product-details.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvetToSpacesPipe,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailsComponent},
      {path: 'welcome', component:WelcomeComponentComponent },
      {path: '', redirectTo:'welcome', pathMatch:'full'},
      {path: '**', redirectTo:'welcome', pathMatch:'full'}
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
