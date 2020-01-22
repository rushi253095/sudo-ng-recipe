import { ReceipeManagerService } from 'src/services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-recipe-list-cell',
  templateUrl: './recipe-list-cell.component.html',
  styleUrls: ['./recipe-list-cell.component.scss'],
})
export class RecipeListCellComponent implements OnInit {

  noRecord = false;
  recipe;
  constructor(private route: ActivatedRoute, private recipeService: ReceipeManagerService) { }
  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.recipe = await this.recipeService.recipes.find(r => r.id === +params.id);
    });
  }
  unlikeRecipe(recipe) {
    recipe.isFavourite = false;
    this.recipeService.likeRecipe(recipe.id);
  }
  likeRecipe(recipe) {
    recipe.isFavourite = true;
    this.recipeService.disLikeRecipe(recipe.id);
  }

}
