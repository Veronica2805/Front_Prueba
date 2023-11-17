import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
    
  }

  getEmpleado(): Observable<any> {
    const url = `${this.apiUrl}/empleados/65564c9602e818bfb185bffe`; // id -> Javier Lopez
    return this.http.get<any>(url);
  }
  
  getLider(): Observable<any> {
    const url = `${this.apiUrl}/liders/65564c7702e818bfb185bffb`; // id -> Maria Rodriguez
    return this.http.get<any>(url);
  }
  
  getDepartamento(): Observable<any> {
    const url = `${this.apiUrl}/departamentos/65564843407e82796542fc7a`; // id -> Departamento B
    return this.http.get<any>(url);
  }

  postEmpleados(): Observable<any> {
    const url = `${this.apiUrl}/empleados`;
    return this.http.post<any>(url, { "nombre": "Gerardo Salazar", "rol": "Empleado Dep. B", "departamento": "65564843407e82796542fc7a" }); //id -> Departamento B
  }
  
  putEmpleados(): Observable<any> {
    const url = `${this.apiUrl}/empleados/65564cc102e818bfb185c004`; // id -> Carlos Perez
    return this.http.put<any>(url, { "departamento": "65564814407e82796542fc77" }); // id -> Departamento A
  }
  
  deleteEmpleados(): Observable<any> {
    const url = `${this.apiUrl}/empleados/'65564cae02e818bfb185c001'`; // id -> Laura Fernandez
    return this.http.delete<any>(url);
  }
  
  postLiders(): Observable<any> {
    const url = `${this.apiUrl}/liders`;
    return this.http.post<any>(url, { "nombre": "Josue Rojo", "rol": "Lider Dep. B", "departamento": "65564843407e82796542fc7a" }); // id -> Departamento B
  }
  
  putLiders(): Observable<any> {
    const url = `${this.apiUrl}/liders/65564c7702e818bfb185bffb`; // id -> Maria Rodriguez
    return this.http.put<any>(url, { "departamento": "65564814407e82796542fc77" }); // id -> Departamento A
  }
  
  deleteLiders(): Observable<any> {
    const url = `${this.apiUrl}/liders/65564c5002e818bfb185bff8`; // id -> Alejandro Gonzalez
    return this.http.delete<any>(url);
  }
}
