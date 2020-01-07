import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-type-filter',
  templateUrl: './home-type-filter.component.html',
  styleUrls: ['./home-type-filter.component.sass']
})
export class HomeTypeFilterComponent implements OnInit {

  @Input() defaultFilters = [];
  @Output() applied = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      Apartment: [this.defaultFilters.includes('Apartment')],
      Room: [this.defaultFilters.includes('Room')],
      House: [this.defaultFilters.includes('House')],
    });
  }

  submit(formValue) {
    const homeTypes = Object.keys(formValue).filter(item => formValue[item]);
    this.applied.emit(homeTypes);
    // console.log(formValue);
  }

}
