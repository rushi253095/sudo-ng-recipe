import { RecipesComponent } from './recipes/recipes.component';
import { AuthGuard } from './../services/auth-guard.service';
import { RecipeListCellComponent } from './recipe-list-cell/recipe-list-cell.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'add-new-recipe', component: AddRecipeComponent, canActivate: [AuthGuard] },
  { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard],
    children: [ { path: ':id', component: RecipeListCellComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
