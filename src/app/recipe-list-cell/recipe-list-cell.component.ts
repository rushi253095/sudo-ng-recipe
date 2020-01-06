import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-recipe-list-cell',
  templateUrl: './recipe-list-cell.component.html',
  styleUrls: ['./recipe-list-cell.component.scss'],
})
export class RecipeListCellComponent implements OnInit, OnChanges {

  noRecord = false;
  @Input() recipe;
  recipes = [
    {
      name: 'Club Sandwich',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/02/04/14/52/fries-1179308_960_720.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur',
      type: 'Veg',
      chef: 'Rushi Patel',
    },
    {
      name: 'Red Souce Pasta',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/12/22/salad-791501_960_720.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur',
      type: 'Non-Veg',
      chef: 'Maulik Patel',
    },
    {
      name: 'Brwonie Sizzler',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/05/25/09/42/brownie-2342762_960_720.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur',
      type: 'Non-Veg',
      chef: 'Bansari Patel',
    },
  ];
  constructor() { }
  ngOnInit() {
    if (this.recipes.length === 0 || this.recipes === null) {
      this.noRecord = true;
    }
  }
  ngOnChanges() {
    if (this.recipe) {
      this.recipes.push(this.recipe);
      alert('New Recipe Added');
    }
  }
  removeRecipe(getIndex) {
    if (confirm('Are sure you want to Remove it?')) {
      this.recipes.splice(getIndex, 1);
      if (this.recipes.length === 0 || this.recipes === null) {
        this.noRecord = true;
      }
    }
  }

}
