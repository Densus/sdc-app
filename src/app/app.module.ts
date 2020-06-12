import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainModule} from './main/main.module';
import {ResultModule} from './result/result.module';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {ResultComponent} from './result/result.component';
import {HttpClientModule} from '@angular/common/http';
import {FlashMessagesModule} from 'angular2-flash-messages';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MainModule,
        ResultModule,
        RouterModule.forRoot([
            {
                path: '',
                component: MainComponent
            },
            {
                path: 'result',
                component: ResultComponent
            }
        ]),
        HttpClientModule,
        FlashMessagesModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
