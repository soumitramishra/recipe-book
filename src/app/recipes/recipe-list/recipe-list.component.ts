import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
  	new Recipe('Dal Fry', 'Indian style lentils fry', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',['Toor lentil','Tomatoes', 'Onions','Turmeric','Cumin']),
  	new Recipe('Pizza', 'Baked flatbread with meat and cheese toppings', 'https://www.justataste.com/wp-content/uploads/2020/04/recipe-pizza-dough-without-yeast-580x875.jpg', ['Flour','Chicken','Cheese','Onions','Mushrooms'])
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    console.log('recipe logggggggggeed');
    this.recipeWasSelected.emit(recipe);
  }
}
