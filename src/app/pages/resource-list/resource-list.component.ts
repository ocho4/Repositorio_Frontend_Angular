import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ResourceCardComponent} from '../../components/resource-card/resource-card.component';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-resource-list',
  imports: [
    NgIf,
    RouterLink,
    ResourceCardComponent,
    NgForOf,
    CommonModule,
  ],
  templateUrl: './resource-list.component.html',
  styleUrl: './resource-list.component.css'
})
export class ResourceListComponent implements OnInit {
  private authService = inject(AuthService);

  isProfessional: boolean = false;

  resources = [
    {title: 'TDAH en el aula', description: 'Guía práctica...', image: 'assets/brain.png'},
    {title: 'Tipos de personalidad', description: 'Informe completo...', image: 'assets/brain2.png'},
  ];

  readonly ID_ROL_PROFESIONAL = 2;

  ngOnInit() {
    this.verificarRol();
  }

  verificarRol() {
    // 1. Obtenemos el ID del rol actual
    const currentRole = this.authService.getUserRole();

    // 2. Comparamos si es igual al ID de profesional
    this.isProfessional = currentRole === this.ID_ROL_PROFESIONAL;

    // OPCIONAL: Para depurar, imprime en consola qué rol está detectando
    console.log('Rol detectado:', currentRole);
    console.log('¿Es profesional?:', this.isProfessional);
  }
}
