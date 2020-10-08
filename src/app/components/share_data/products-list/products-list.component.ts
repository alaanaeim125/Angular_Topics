import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  users = [
    { name: 'Alaa Naeeim', age: 25, job: 'Mobile Developer' },
    { name: 'Bassem Naeeim', age: 21, job: 'FrontEnd Developer' },
    { name: 'Ashrif Naeeim', age: 22, job: 'BackEnd Developer' },
  ];

  constructor() {}

  ngOnInit(): void {}

  displayUserData(user) {
    alert(
      'User name : ' +
        user.name +
        '\n user age : ' +
        user.age +
        '\n user job : ' +
        user.job
    );
  }
}
