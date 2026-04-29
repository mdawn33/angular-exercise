import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly recipeService = inject(Recipe);


  private readonly selectedRecipeId: string | null = this.route.snapshot.paramMap.get('id'); 

  protected readonly selectedRecipe = this.recipeService.getRecipeById(this.selectedRecipeId ?? undefined) ?? this.recipeService.recipes()[0];

  protected readonly servings = signal<number>(1);

  protected incrementServings(): void {
    this.servings.update(s => s + 1);
  }

  protected decrementServings(): void {
    if(this.servings() <= 1)
      return;

    this.servings.update(s => s - 1);
  }

  protected readonly adjustedIngredients = computed(() => this.selectedRecipe?.ingredients.map(i => ({
    name: i.name,
    quantity: i.quantity * this.servings(),
    unit: i.unit
  })));
}
