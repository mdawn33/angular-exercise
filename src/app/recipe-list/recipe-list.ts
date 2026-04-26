import { Component, computed, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail, FontAwesomeModule, FormsModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected readonly faStar = faStar;
  protected readonly title = signal('My Recipe Box');
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly searchTerm = signal<string>('');  
  

  protected selectRecipe(recipe: RecipeModel): void {
    this.recipe.set(recipe);
  }

  protected readonly filteredRecipes = computed(() => MOCK_RECIPES.filter(r => r.name.toLowerCase().includes(this.searchTerm().toLowerCase())));
}
