import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoading: boolean = false;

  form: FormGroup = new FormGroup({
    ingredients: new FormControl('',
    [
      Validators.required,
      Validators.minLength(10)
    ])
  })

  validar(){
this.form.controls['ingredients'].markAsDirty();
if(this.form.valid){
  this.form.controls['ingredients'].disable();
  this.isLoading = true;
}
  }
}
