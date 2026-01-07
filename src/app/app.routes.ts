import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: ()=>
      import('./features/recipe/pages/recipe-index.component/recipe-index.component')
        .then(m => m.RecipeIndexComponent)
  },
  {
    path: 'create',
    loadComponent: ()=>
      import('./features/recipe/pages/recipe-create.component/recipe-create.component')
        .then(m => m.RecipeCreateComponent)
  },
];
