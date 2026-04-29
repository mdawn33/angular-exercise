import { Component, computed, inject, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../recipe';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-recipe-list',
  imports: [FontAwesomeModule, FormsModule, RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected readonly faStar = faStar;
  private readonly recipeService = inject(Recipe);
  protected readonly title = signal('My Recipe Box');
  protected readonly searchTerm = signal<string>('');

  private readonly recipes = this.recipeService.recipes;
  
  protected readonly selectedRecipe = signal<RecipeModel>(this.recipes()[0]);

  protected selectRecipe(recipe: RecipeModel): void {
    this.selectedRecipe.set(recipe);
  }

  protected readonly filteredRecipes = computed(() => {
    console.log("signal update registered: " + this.recipes().length);
    // if(this.searchTerm().length === 0) return this.recipes();
     
    return this.recipes().filter(r => r.name.toLowerCase().includes(this.searchTerm().toLowerCase()));
  });
}
