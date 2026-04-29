import { Injectable, signal } from '@angular/core';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root',
})
export class Recipe {

  private readonly _recipes = signal<RecipeModel[]>(MOCK_RECIPES);

  readonly recipes = this._recipes.asReadonly();


  getRecipeById(id?: string) : RecipeModel | undefined {
    if(id === undefined) {
      return undefined;
    }
    return this._recipes().find(r => r.id === id);
  }

  addRecipe(recipe: RecipeModel) : void {
    this._recipes.update(a => [...a, recipe]);
    console.log("updating recipes signal: " + this._recipes().length);
  }
}
