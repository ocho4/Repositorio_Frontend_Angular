import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  // URL base de tu UsuarioController en Spring Boot
  private apiUrl = 'http://localhost:8080/usuarios'; 

  listar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listar`);
  }

  // GET /usuarios/{id} (El endpoint eficiente que agregamos)
  obtenerPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // PUT /usuarios/actualizar/{id}
  actualizar(id: number, usuarioDto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/actualizar/${id}`, usuarioDto);
  }

  // DELETE /usuarios/eliminar/{id}
  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }

  crear(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registrar`, usuario);
  }
}