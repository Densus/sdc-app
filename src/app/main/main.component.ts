import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import * as moment from 'moment';
import {Router} from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    convertForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private flashMessage: FlashMessagesService,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.convertForm = this.fb.group({
            date: ['', [Validators.required]]
        });
    }
    submit() {
        const a = moment(this.convertForm.get('date').value).format('dddd, DD MMMM YYYY');
        if (this.convertForm.invalid) {
            this.showFlash1();
        } else if (a === 'Invalid date'){
            this.showFlash2();
        } else {
            // console.log(moment().format('dddd, DD MMMM YYYY'));
            this.goTo(a);
        }

    }
    showFlash1() {
        this.flashMessage.show('Field must be filled.', {cssClass: 'alert-warning', timeout: 1000});
    }
    showFlash2() {
        this.flashMessage.show('Invalid format', {cssClass: 'alert-warning', timeout: 1000});
    }
    goTo(date1) {
        this.router.navigate(['result'], {queryParams: {date: date1}});
    }

}
