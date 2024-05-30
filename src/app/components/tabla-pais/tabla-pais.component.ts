import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-pais',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tabla-pais.component.html',
  styleUrl: './tabla-pais.component.css'
})
export class TablaPaisComponent
{
  paises: any[] = [];
  @Output() paisSeleccionado = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void
  {
    this.http.get<any[]>('https://restcountries.com/v3.1/all').subscribe(paises => 
      {
      const paisesEuropeos = paises.filter(pais => pais.region === 'Europe').slice(0, 2);
      const paisesAfricanos = paises.filter(pais => pais.region === 'Africa').slice(0, 2);

      this.paises = [...paisesEuropeos, ...paisesAfricanos].map(pais => (
      {
        nombre: pais.name.common,
        banderaUrl: pais.flags.png
      }));

    });
  }

  seleccionarPais(pais: any): void 
  {
    this.paisSeleccionado.emit(pais);
  }
}
