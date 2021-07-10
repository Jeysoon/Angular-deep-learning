import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }
  @Input() recipe_item: {name: string; description:string; imagePath: string};
  @Input() recipe_index:number;
  @Output() recipeSelected = new EventEmitter<void>();

  ngOnInit() {
    console.log("ngOnInit", this.recipe_item);
  }
  onSelected(){
    this.recipeSelected.emit();
  }

}
