import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;

  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //     userData: {
    //         userName: suggestedName,
    //         email: ''
    //     },
    //     secret: 'pet',
    //     questionAnswer: '',
    //     gender: 'male'
    // });

      this.signupForm.form.patchValue({
        userData: {
          userName: suggestedName
        }
      })
  }
  
  // onSubmit(form : NgForm){
  //   console.log("submitted");
  //   console.log(form);
  // }

// Accessing the Form with @ViewChild
 onSubmit() {
   console.log(this.signupForm);
 }


}
