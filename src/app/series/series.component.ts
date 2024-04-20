import { Component, Inject, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];
  promedio: number =0;
  constructor(@Inject(SeriesService) private serieService: SeriesService) { }

  ngOnInit() {
    this.promedio = this.serieService.darPromedio(this.series);
  }

}
