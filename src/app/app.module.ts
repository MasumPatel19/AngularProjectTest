import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DetailsModule } from './details/details.module';
import { UserDataComponent } from './user-data/user-data.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
// import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import {HttpClientModule} from '@angular/common/http';
import { MyserviceService } from './services/myservice.service';
import { DemopipePipe } from './demopipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    UserDataComponent,
    UserInfoComponent,
    HeaderComponent,
    FormComponent,
    ChildComponent,
    DemopipePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DetailsModule,
    FormsModule,
    // NgbAlertModule,
    HttpClientModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
