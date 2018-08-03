import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {

  private readonly confirmationCodeTitle: string;
  private readonly confirmationCodeFloatingLabel: string;
  private userName: string;
  private readonly code: string;

  constructor(private readonly router: Router) {
    this.confirmationCodeTitle = 'Confirmation Code *';
    this.confirmationCodeFloatingLabel = 'Confirmation Code';
    this.code = '';
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    if (f.valid && this.code.length > 0) {
      this.router.navigate(['/demographics']);
    }
  }

}
