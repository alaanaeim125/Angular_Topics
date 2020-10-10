import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  userComming = {};
  addedToCart = false;
  private subscription: Subscription;

  constructor(
    private activeRoute: ActivatedRoute,
    private cartServ: CartService
  ) {}

  ngOnInit(): void {
    // way to get params from navigate url
    const userid = this.activeRoute.snapshot.params.userid;

    // another way to get params from navigate
    this.activeRoute.paramMap.subscribe((params) => {
      const useriiid = params.get('userid');
      console.log('From Product Details ', useriiid);
    });

    // get data that send with navigate in url
    this.userComming = window.history.state.user;

    console.log(window.history.state.user);


    // get data using service from api

    this.subscription = this.cartServ.getAllDataFromApi().subscribe((data) => {
      console.log('data from Api ', data);
    });
  }

  addToCart() {
    this.cartServ.addToCart(this.userComming);
    this.addedToCart = true;
  }

  clearCart() {
    this.cartServ.clearUsers();
  }

  getAllUsers() {
    const AllUsers = this.cartServ.getAllUsers();
    console.log('All Users In Cart : ', AllUsers);
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
