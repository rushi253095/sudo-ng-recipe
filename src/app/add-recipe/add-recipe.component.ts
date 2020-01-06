import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  recipeForm: FormGroup;
  constructor() { }
  recipeData = [];
  ngOnInit() {
    this.generateForm();
  }
  generateForm() {
    this.recipeForm = new FormGroup({
      name : new FormControl(''),
       imageUrl: new FormControl(''),
       description: new FormControl(''),
       type: new FormControl(''),
       chef: new FormControl(''),
     });
  }
  onFormSubmit() {
    this.valueChange.emit(this.recipeForm.value);
    this.recipeForm.reset();
  }
}
