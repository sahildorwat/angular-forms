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
  user = {
    username: '',
    email: '',
    secretQ: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    console.log('in suggst');
    const suggestedName = 'Superuser';
    this.form.form.patchValue({ username: 'sahil'});
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.form.value.username;
    this.user.email = this.form.value.email;
    this.user.secretQ = this.form.value.secret;
    this.user.answer = this.form.value.answer;
    this.user.gender = this.form.value.gender;

    this.form.reset();
  }

}
