import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  ingreOut = null;
  @Input() recipe: Recipe;
  ingredients: Recipe[];

  constructor(private recipeService: RecipeService, private sLService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.recipeService.getRecipes();
  }
  sendToShoppingList(){
  // this.ingredients.map((recipe) => {
  //   console.log('Recipe', recipe);
  //   const filteredIngredients = recipe.ingredients.filter((ingredient) => ingredient );
  // });
  this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }

}
