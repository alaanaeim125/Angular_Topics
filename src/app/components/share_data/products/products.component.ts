import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  share(user) {
    // fitr the event when click and send data to parent
    this.notify.emit(user);
  }

  navigateToProductDetails(userid, user) {

    this.router.navigate(['/products', userid], {
      state: { user: user },
    });
  }
}
