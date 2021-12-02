import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initFrom();
  }

  initFrom() {
    this.formGroup = this.formBuilder.group({
      promotionGroupDesc: null,
      carBrandList: this.formBuilder.array([]),
    });
  }

  private createcarBrandList(): FormGroup {
    return new FormGroup({
      carBrandId: new FormControl(null),
    });
  }

  private addCarBrandListForm() {
    const addArray = this.formGroup.get('carBrandList') as FormArray;
    addArray.push(this.createcarBrandList());
  }

  addArray() {
    this.addCarBrandListForm();
  }
}
