import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TablaPaisComponent } from '../tabla-pais/tabla-pais.component';
import { CommonModule } from '@angular/common';
import { FireStoreService } from '../../services/fire-store.service';



@Component({
  selector: 'app-alta-repartidor',
  standalone: true,
  imports: [TablaPaisComponent,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './alta-repartidor.component.html',
  styleUrl: './alta-repartidor.component.css'
})
export  class AltaRepartidorComponent 
{
  repartidorForm: FormGroup;

  constructor(private fb: FormBuilder,private service : FireStoreService) {
    this.repartidorForm = this.fb.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(65)]],
      capacidad: ['', [Validators.required, Validators.min(1)]],
      pais: ['', Validators.required],
      unidadPropia: [false]
    });
  }

  


  onPaisSeleccionado(pais: any): void 
  {
    this.repartidorForm.patchValue({ pais: pais.nombre });
  }

  onSubmit() 
  {
    if (this.repartidorForm.valid) {
      const repartidor = this.repartidorForm.value;
      this.service.guardarRepartidor(repartidor).then(() => {
        console.log('repartidor guardado exitosamente');
      }).catch(error => {
        console.error('Error al guardar el repartidor:', error);
      });
    }
  }
}
