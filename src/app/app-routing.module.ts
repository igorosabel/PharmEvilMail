import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { VaultComponent } from './pages/vault/vault.component';
import { BackendComponent } from './pages/backend/backend.component';

const routes: Routes = [
	{ path: '',         component: LoginComponent },
	{ path: 'home',     component: HomeComponent },
	{ path: 'mail/:id', component: DetailComponent },
	{ path: 'vault',    component: VaultComponent },
	{ path: 'backend',  component: BackendComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
