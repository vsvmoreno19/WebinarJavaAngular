import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTestComponent } from './user-test/user-test.component';

const routes: Routes = [{ 
  path: '', redirectTo: 'User', pathMatch: 'full'},
{ path: 'User', component: UserTestComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
