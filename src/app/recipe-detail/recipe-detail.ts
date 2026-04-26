import { Component, computed, input, signal } from '@angular/core';
import { RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {

  readonly selectedRecipe = input.required<RecipeModel>();

  protected readonly servings = signal<number>(1);

  protected incrementServings(): void {
    this.servings.update(s => s + 1);
  }

  protected decrementServings(): void {
    if(this.servings() <= 1)
      return;

    this.servings.update(s => s - 1);
  }

  protected readonly adjustedIngredients = computed(() => this.selectedRecipe().ingredients.map(i => ({
    name: i.name,
    quantity: i.quantity * this.servings(),
    unit: i.unit
  })));
}
