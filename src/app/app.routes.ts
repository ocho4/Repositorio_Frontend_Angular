import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { PerfilComponent } from './pages/perfil/perfil.component'; // <--- Importar
import { UsuariosComponent } from './pages/usuarios/usuarios.component'; // <--- Importar
import { RolesComponent } from './pages/roles/roles.component';
import {ResourceListComponent} from './pages/resource-list/resource-list.component';
import {ResourceCreateComponent} from './pages/resource-create/resource-create.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Landing
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'app',
    canActivate: [authGuard], // Protege todo lo que esté aquí adentro
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'perfil', component: PerfilComponent }, // <--- Nueva Ruta: /app/perfil
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'roles', component: RolesComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'resources', component: ResourceListComponent },
      {path: 'create-resource', component: ResourceCreateComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];
