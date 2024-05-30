import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FireStoreService } from '../../services/fire-store.service';

@Component({
  selector: 'app-listado-repartidor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-repartidor.component.html',
  styleUrl: './listado-repartidor.component.css'
})
export class ListadoRepartidorComponent 
{
  repartidores: any[] = [];

  constructor(private services: FireStoreService) {}

  ngOnInit(): void {
    this.services.obtenerRepartidores().subscribe(repartidores => {
      this.repartidores = repartidores;
    });
  }
}
