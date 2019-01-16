import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeasListComponent } from './ideas-list/ideas-list.component';
import { IdeasEditComponent } from './ideas-edit/ideas-edit.component';
import { RetosListComponent } from './retos-list/retos-list.component';
import { IdeaShowComponent } from './idea-show/idea-show.component';
import { IdearetosListComponent } from './idearetos-list/idearetos-list.component';
import { IdearetosAddComponent } from './idearetos-add/idearetos-add.component';
import {RetosAddComponent} from './retos-add/retos-add.component';

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
		path: 'retos-add',
		component: RetosAddComponent
	},	
	{
		path: 'ideas-edit/:id',
		component: IdeasEditComponent
	},
	{
		path: 'retos-list',
		component: RetosListComponent
	},
	{
		path: 'idearetos-list/:id',
		component: IdearetosListComponent
	},
	{
		path: 'idearetos-add/:id',
		component: IdearetosAddComponent
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
