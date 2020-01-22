import { Router } from '@angular/router';
import { ReceipeManagerService } from 'src/services/recipe.service';
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
  constructor(private recipeService: ReceipeManagerService, private router: Router) { }
  recipeData = [];
  ngOnInit() {
    this.generateForm();
  }
  generateForm() {
    this.recipeForm = new FormGroup({
       id: new FormControl(this.recipeService.recipes.length + 1),
       name : new FormControl(''),
       imageUrl: new FormControl(''),
       description: new FormControl(''),
       type: new FormControl(''),
       chef: new FormControl(''),
       isFavourite : new FormControl(false)
     });
  }
  onFormSubmit() {
    this.recipeService.addRecipe(this.recipeForm.value);
    // this.valueChange.emit(this.recipeForm.value);
    this.recipeForm.reset();
    this.router.navigate(['recipes']);
  }
}
