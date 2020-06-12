import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlashMessagesModule} from 'angular2-flash-messages';


@NgModule({
    declarations: [MainComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        FlashMessagesModule
    ]
})
export class MainModule {
}
