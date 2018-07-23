import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-reg-confirmation',
  templateUrl: './reg-confirmation.component.html',
  styleUrls: ['./reg-confirmation.component.scss']
})
export class RegConfirmationComponent implements OnInit {

  public code : string;

  constructor(private router: Router) {
    this.code = "";
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    if (f.valid && this.code.length > 0) {
      this.router.navigate(['/demographics']);
    }
  }

}
