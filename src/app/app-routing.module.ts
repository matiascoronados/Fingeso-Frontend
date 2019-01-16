import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeasListComponent } from './ideas-list/ideas-list.component';
import { IdeasEditComponent } from './ideas-edit/ideas-edit.component';
import { IdeaShowComponent } from './idea-show/idea-show.component';

const routes: Routes = [
	{ path: '', redirectTo: '/ideas-list', pathMatch: 'full'},
	{
		path: 'ideas-list',
		component: IdeasListComponent
	},
	{
		path: 'ideas-add',
		component: IdeasEditComponent
	},
	{
		path: 'ideas-edit/:id',
		component: IdeasEditComponent
	},
	{
		path: 'idea-show/:id',
		component: IdeaShowComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
