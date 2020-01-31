import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {ServiceWorkerModule} from '@angular/service-worker';
import {HttpClientModule} from '@angular/common/http';

import {environment} from '../environments/environment';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryApiService} from './services';
import {httpInterceptorProviders} from './http-interceptors';
import {AppRoutingModule} from './app-routing.module';
import {AppMaterialModule} from './app-material.module';
import {AppComponent} from './app.component';
import {ToolbarComponent} from './toolbar';
import {HomeComponent} from './home';
import {GroupSearchComponent} from './group-search';
import {LoginComponent} from './login';
import {MatAutocompleteModule} from "@angular/material";
import {MapsModule} from './map';
import {MapSearchBarComponent, SidenavContentComponent} from './group-search';
import {GroupCreateComponent} from "./group-create/group-create.component";
import {GroupManageComponent} from "./group-manage/group-manage.component";
import {SidenavChatComponent} from "./group-manage/sidenav-chat/sidenav-chat.component";

@NgModule({
    declarations: [
        AppComponent,
        GroupSearchComponent,
        GroupCreateComponent,
        GroupManageComponent,
        ToolbarComponent,
        HomeComponent,
        LoginComponent,
        SidenavContentComponent,
        SidenavChatComponent,
        MapSearchBarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        MapsModule,
        AppMaterialModule,
        MatAutocompleteModule,
        HttpClientModule,
        // environment.production ?
        //     [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryApiService),
        // TODO DB not ready, enabled temporarily
        // environment.production ?
        //     [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryApiService),
        HttpClientInMemoryWebApiModule.forRoot(InMemoryApiService),
        AppRoutingModule
    ],
    entryComponents: [HomeComponent],
    providers: [httpInterceptorProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}
