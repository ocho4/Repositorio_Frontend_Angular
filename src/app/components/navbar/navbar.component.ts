import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { Observable, map } from 'rxjs';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    MatToolbarModule, 
    MatButtonModule, 
    MatMenuModule, 
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Hacemos público el servicio para poder usar 'authService.currentUser$' en el HTML si es necesario
  public authService = inject(AuthService);
  private router = inject(Router);

  // Observable transformado para mostrar el nombre con el prefijo correcto
  userDisplayName$: Observable<string | null> = this.authService.currentUser$.pipe(
    map(user => {
      if (!user) return null;
      
      let prefijo = '';

      // Asignamos el prefijo según el ID del rol
      switch (user.rolId) {
        case 1:
          prefijo = 'Fam.';
          break;
        case 2:
          prefijo = 'Prof.';
          break;
        case 3:
          prefijo = 'Admin.';
          break;
        default:
          prefijo = 'User'; // Por si acaso hubiera otro rol
      }
      
      // Retorna formato: "Admin. goku123"
      return `${prefijo} ${user.username}`;
    })
  );

  logout() {
    this.authService.logout();
  }
}