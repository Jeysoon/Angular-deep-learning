import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pizza', 'Hand made dough', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Enchiladas', 'We use fresh ingredients', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe, i:number){
  // this.recipeWasSelected.emit(recipe);
  console.log('OnRecipeSelected', i);
  this.router.navigate([i], {relativeTo: this.route});

  }

}
