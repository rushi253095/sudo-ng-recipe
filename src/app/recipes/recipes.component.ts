import { Router, NavigationExtras } from '@angular/router';
import { ReceipeManagerService } from 'src/services/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes = [];
  constructor(private recipeService: ReceipeManagerService, private router: Router) { }

  ngOnInit() {
    this.getAllRecipes();
  }
  async getAllRecipes() {
    this.recipes = await this.recipeService.recipes;
  }
  recipeDetail(recipe) {
    this.router.navigate(['/recipes', recipe.id]);
  }
  removeRecipe(i) {
    this.recipeService.recipes.splice(i , 1);
  }
}
