import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService{
    ingredientsChange = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

    getIngredients()   {
        return this.ingredients.slice();
    }

    getIngredient(index: number)   {
      return this.ingredients[index];
    }

    addIgreadient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChange.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // for (let ingredient of ingredients) {
        //     this.addIgreadient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChange.next(this.ingredients.slice());
    }

    updateIgreadient(index: number, newIngredient: Ingredient) {
      this.ingredients[index] = newIngredient;
      this.ingredientsChange.next(this.ingredients.slice());
    }

    deleteIgreadient(index: number) {
      this.ingredients.splice(index,1);
      this.ingredientsChange.next(this.ingredients.slice());
    }
}
