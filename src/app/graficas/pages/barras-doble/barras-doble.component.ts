import { Component } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.css']
})
export class BarrasDobleComponent {
  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];

  productosOpciones: ChartConfiguration['options'] ={
    responsive: true,
    indexAxis: 'y'
  }

  proveedoresData: ChartData<'bar'> ={
    labels: this.proveedoresLabels,
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
    ]
  }
  
  productosData: ChartData<'bar'> = {
    labels: this.proveedoresLabels,
    datasets: [
      { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
    ]
  }
}
