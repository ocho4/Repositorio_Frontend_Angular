import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-admin-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.css']
})
export class AdminDialogComponent {
  // Referencia para poder cerrar el diálogo
  private dialogRef = inject(MatDialogRef<AdminDialogComponent>);

  // Datos del nuevo administrador
  adminData = {
    nombre: '',
    username: '',
    email: '',
    contrasena: '',
    rolId: 3 // 3 = ADMINISTRADOR (Fijo)
  };

  guardar() {
    // Validamos que los campos no estén vacíos
    if (this.adminData.nombre && this.adminData.username && 
        this.adminData.email && this.adminData.contrasena) {
      
      // Cerramos el diálogo y enviamos los datos al componente padre (UsuariosComponent)
      this.dialogRef.close(this.adminData);
    }
  }

  cancelar() {
    this.dialogRef.close(null); // Cerramos sin enviar nada
  }
}