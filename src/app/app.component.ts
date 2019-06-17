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
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

   submitted = false;

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
       this.submitted = true;
       console.log(this.signupForm);
       this.user.username = this.signupForm.value.userData.userName;
       this.user.email = this.signupForm.value.userData.email;
       this.user.secretQuestion = this.signupForm.value.secret;
       this.user.answer = this.signupForm.value.questionAnswer;
       this.user.gender = this.signupForm.value.gender;

       this.signupForm.reset();
 }


}
