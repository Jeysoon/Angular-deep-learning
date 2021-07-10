import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
  public ingredientsList = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new  Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsList.emit(this.ingredients.slice());
  }
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredients(ingredients: Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.onIngredientAdded()
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsList.emit(this.ingredients.slice())
  }
}
