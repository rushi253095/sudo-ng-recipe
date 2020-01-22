import { Component, OnInit } from '@angular/core';
import { ReceipeManagerService } from 'src/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes = [];
  constructor(private recipeService: ReceipeManagerService) { }

  ngOnInit() {
    this.getAllLikeRecipes();
  }

  getAllLikeRecipes() {
    this.recipes = this.recipeService.recipes.filter((r) => r.isFavourite);
    // this.recipeService.recipes
  }

}
