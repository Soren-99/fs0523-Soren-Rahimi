import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { CreateComponent } from './pages/create/create.component';
import { Page404Component } from './pages/page404/page404.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
{
  path:'',
  component: CreateComponent
},
{
  path:'completed',
  component: TodoComponent,

},
{
  path: '/completed/edit/:id',
  component: EditComponent
},
{
  path:'**',
  component: Page404Component
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
