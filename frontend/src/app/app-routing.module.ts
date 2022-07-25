import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BotaoaddComponent } from './components/views/botaoadd/botaoadd.component';
import { FormCreateComponent } from './components/views/form-create/form-create.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FormUpdateComponent } from './components/views/form-update/form-update.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HeaderComponent},
  { path: 'botaoadd', component: BotaoaddComponent},
  { path: 'form-read', component: FormCreateComponent},
  { path: 'form-update/:id', component: FormUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }