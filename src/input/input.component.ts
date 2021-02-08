import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  formValue = { limit: 0, retention: 0 };
  inputForm!: FormGroup;
  _isLoading = false;
  disableButton = false;

  get isLoading() { return this._isLoading; }

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      limit: new FormControl(this.formValue.limit,
        [
          Validators.required,
          Validators.pattern("^[-+]?\d*\.?\d*$"),
          Validators.min(0),
        ]),
      retention: new FormControl(this.formValue.retention,
        [
          Validators.required,
          Validators.pattern("^[-+]?\d*\.?\d*$"),
          Validators.min(0),
        ])
    });
  }

  get limit() { return this.inputForm.get('limit'); }

  get retention() { return this.inputForm.get('retention'); }

  onSubmit() {
    this._isLoading = true;
    this.disableButton = true;

    setTimeout(() => {
      console.log(this.inputForm.value);
      this._isLoading = false;
      this.disableButton = false;
    }, 3000);
  }

  isDisabled() {
    return !this.inputForm.valid || this.disableButton;
  }
}
