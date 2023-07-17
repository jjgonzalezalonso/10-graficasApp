import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {
  constructor(private graficasService: GraficasService) { }
  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe(resp => {
    //     console.log(resp);
    //     const mislabels = Object.keys(resp)
    //     const misdatos = Object.values(resp)
    //     this.doughnutChartData = {
    //       labels: mislabels,
    //       datasets: [{ data: misdatos }]
    //     }
    //   })
    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({ labels, values }) => {
        this.doughnutChartData={labels,datasets:[{data:values}] }
      })

  }

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [{ data: [] },]
  };

  public doughnutChartType: ChartType = 'doughnut';
}

