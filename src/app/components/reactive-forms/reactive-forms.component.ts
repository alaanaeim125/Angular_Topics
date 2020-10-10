import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  items: FormArray;
  formItems: FormGroup;
  constructor(private fb: FormBuilder) {}

  formSign = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  // use formBuilder

  formBuilder = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      phone: ['', Validators.required],
    }),
  });

  // read property from fb

  get name() {
    return this.formBuilder.get('name');
  }

  get email() {
    return this.formBuilder.get('email');
  }
  get street() {
    return this.formBuilder.get('address').get('street');
  }
  get phone() {
    return this.formBuilder.get('address').get('phone');
  }

  // get username() { return this.formSign.get('username'); };
  // get password() { return this.formSign.get('password'); };

  // using formArray with form Builder and Form Group

  ngOnInit(): void {
    this.formItems = this.fb.group({
      fname: ['', Validators.required],
      sname: ['', Validators.required],
      items: this.fb.array([this.setItem()]),
    });
  }

  setItem(): FormGroup {
    return this.fb.group({
      street: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  pushItem() {
    this.items = this.formItems.get('items') as FormArray;
    this.items.push(this.setItem())
  }

  get formItemsControlls() {
    return this.formItems.get('items')['controls'];
  }

  submitForm() {
    // console.log(this.formSign.value);
    // alert(this.formBuilder.value);
    // console.log(this.formBuilder.value);
    //  console.log(this.formBuilder);

    console.log(this.formItems.value);
    

  }
}
