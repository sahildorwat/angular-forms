import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f')  form: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    console.log('in suggst');
    const suggestedName = 'Superuser';
    this.form.form.patchValue({ username: 'sahil'});
  }

  onSubmit() {
    console.log(this.form);
  }

}
