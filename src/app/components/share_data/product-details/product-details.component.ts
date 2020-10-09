import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  userComming = {};

  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // way to get params from navigate url
    const userid = this.activeRoute.snapshot.params.userid;

    // another way to get params from navigate
    this.activeRoute.paramMap.subscribe((params) => {
      const useriiid = params.get('userid');
      console.log('From Product Details ', useriiid);
      
    })

    // get data that send with navigate in url
    this.userComming = window.history.state.user;

    console.log(window.history.state.user);
  }
}
