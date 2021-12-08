import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { GetComponent } from './get/get.component';

const routes: Routes = [
{
  path: 'create',
  component: CreateComponent,
},{
  path: "edit/:id",
  component: EditComponent,
},{
  path: 'get',
  component: GetComponent,
},{
  path: '',
  redirectTo: 'get'
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncomiendasRoutingModule { }
