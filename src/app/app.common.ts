/**
 * Páginas
 */
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { VaultComponent } from './pages/vault/vault.component';
import { BackendComponent } from './pages/backend/backend.component';

export const PAGES: any[] = [
	LoginComponent,
	HomeComponent,
	VaultComponent,
	BackendComponent
];

/**
 * Componentes parciales
 */
export const COMPONENTS: any[] = [];

/**
 * Pipes
 */
export const PIPES: any[] = [];

/**
 * Servicios
 */
import { MailsService } from './services/mails.service';

export const SERVICES: any[] = [
	MailsService
];

/**
 * Componentes Angular Material
 */
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

export const  MATERIAL: any[] = [
	MatCardModule,
	MatFormFieldModule,
	MatButtonModule,
	MatInputModule,
	MatToolbarModule,
	MatIconModule,
	MatSidenavModule,
	MatListModule
];