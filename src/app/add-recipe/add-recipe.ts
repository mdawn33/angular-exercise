import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Recipe } from '../recipe';
import { Ingredient, RecipeModel } from '../models';
import { v7 as uuidv7 } from 'uuid';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-recipe',
  imports: [ReactiveFormsModule],
  templateUrl: './add-recipe.html',
  styleUrl: './add-recipe.css',
})
export class AddRecipe {
  private readonly router = inject(Router);
  private readonly recipeService = inject(Recipe);
  private readonly fb = inject(FormBuilder);

  protected readonly recipeForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      isFavorite: [''],
      imgUrl: [''],
      ingredients: this.fb.array([this.createIngredient()])
  });

  protected get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  private createIngredient() {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: [, Validators.required],
      unit: ['', Validators.required]
    });
  }

  protected addIngredient(): void {
    this.ingredients.push(this.createIngredient());
  }

  protected removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  protected onSubmit(): void {
    if (this.recipeForm.invalid) return;

   
    const newRecipe: RecipeModel = {
      id: uuidv7(),
      name: this.recipeForm.value.name!,
      description: this.recipeForm.value.description!,
      isFavorite: Boolean(this.recipeForm.value.isFavorite ?? false),
      ingredients: this.ingredients.value as Ingredient[],
      imgUrl: this.recipeForm.value.imgUrl ?? undefined
    };

    this.recipeService.addRecipe(newRecipe)

    console.log(this.recipeForm.value);
    this.recipeForm.reset();

    this.router.navigate(['/recipes']);
  }
}

