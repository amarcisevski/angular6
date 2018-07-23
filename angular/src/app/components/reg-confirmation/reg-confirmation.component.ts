import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reg-confirmation',
  templateUrl: './reg-confirmation.component.html',
  styleUrls: ['./reg-confirmation.component.scss']
})
export class RegConfirmationComponent implements OnInit {

  public code : string;

  constructor() {
    this.code = "test";
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    console.log("CODE: " + this.code);
  }

}
