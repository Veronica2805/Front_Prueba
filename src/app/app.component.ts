import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(private apiService: ApiService) {
    
  }
  
  title = 'Organigrama';

  ngOnInit() {
    
  }
  
  handleClick(action: string) {
    if (action === 'Obtener i') {
      this.apiService.getEmpleado().subscribe(
        (data) => console.log(data),
        (error) => console.error('Error al obtener datos:', error)
      );
    } else if (action === 'Obtener ii') {
      this.apiService.getLider().subscribe(
        (data) => console.log(data),
        (error) => console.error('Error al obtener datos:', error)
      );
    } else if (action === 'Obtener iii') {
      this.apiService.getDepartamento().subscribe(
        (data) => console.log(data),
        (error) => console.error('Error al obtener datos:', error)
      );
    } else if (action === 'Crear empleado') {
      this.apiService.postEmpleados().subscribe(
        (data) => console.log(data),
        (error) => console.error('Error al obtener datos:', error)
      );
    } else if (action === 'Mover empleado de departamento') {
      this.apiService.putEmpleados().subscribe(
        (data) => console.log(data),
        (error) => console.error('Error al obtener datos:', error)
      );
    } else if (action === 'Eliminar empleado') {
      this.apiService.deleteEmpleados().subscribe(
        (data) => console.log(data),
        (error) => console.error('Error al obtener datos:', error)
      );
    } else if (action === 'Crear lider') {
      this.apiService.postLiders().subscribe(
        (data) => console.log(data),
        (error) => console.error('Error al obtener datos:', error)
      );
    } else if (action === 'Mover lider de departamento') {
      this.apiService.putLiders().subscribe(
        (data) => console.log(data),
        (error) => console.error('Error al obtener datos:', error)
      );
    } else if (action === 'Eliminar lider') {
      this.apiService.deleteLiders().subscribe(
        (data) => console.log(data),
        (error) => console.error('Error al obtener datos:', error)
      );
    }
  }
}
