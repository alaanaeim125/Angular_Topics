import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  
  // input to recieve data from parent
  @Input() users;

  // output to send data to parent in eventEmitter as Event
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  share(user) {
    // fitr the event when click and send data to parent
    this.notify.emit(user);
  }
}
