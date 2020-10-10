import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  items: FormArray;
  formItems: FormGroup;
  emailRegEx = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]+[com | net]{3}$';
  constructor(private fb: FormBuilder) {}

  formSign = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(this.emailRegEx),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get username() {
    return this.formSign.get('username');
  }
  get password() {
    return this.formSign.get('password');
  }

  // use formBuilder

  // formBuilder = this.fb.group({
  //   name: ['', Validators.required],
  //   email: ['', Validators.required],
  //   address: this.fb.group({
  //     street: ['', Validators.required],
  //     phone: ['', Validators.required],
  //   }),
  // });

  // read property from fb

  // get name() {
  //   return this.formBuilder.get('name');
  // }

  // get email() {
  //   return this.formBuilder.get('email');
  // }
  // get street() {
  //   return this.formBuilder.get('address').get('street');
  // }
  // get phone() {
  //   return this.formBuilder.get('address').get('phone');
  // }

  // using formArray with form Builder and Form Group

  ngOnInit(): void {
    // this.formItems = this.fb.group({
    //   fname: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(4),
    //       Validators.maxLength(12),
    //     ],
    //   ],
    //   sname: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(4),
    //       Validators.maxLength(12),
    //     ],
    //   ],
    //   items: this.fb.array([this.setItem()]),
    // });
  }

  // get fname() {
  //   return this.formItems.get('fname');
  // }

  // get sname() {
  //   return this.formItems.get('sname');
  // }
  // setItem(): FormGroup {
  //   return this.fb.group({
  //     street: ['', Validators.required],
  //     phone: ['', Validators.required],
  //   });
  // }

  // pushItem() {
  //   this.items = this.formItems.get('items') as FormArray;
  //   this.items.push(this.setItem());
  // }

  // get formItemsControlls() {
  //   return this.formItems.get('items')['controls'];
  // }

  submitForm() {
    console.log(this.formSign.value);
    // alert(this.formBuilder.value);
    // console.log(this.formBuilder.value);
    //  console.log(this.formBuilder);

    // console.log(this.formItems.value);
  }
}
