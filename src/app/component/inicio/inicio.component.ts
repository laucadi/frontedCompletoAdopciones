import { Component, OnInit } from '@angular/core';
import {carouselData} from '../../../data/carousel';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent  {
  images = [];

  constructor() {
    this.images = this.chunk(carouselData,3);
  }

  ngOnInit(): void {
    
  }

  chunk = (arr: any[], size: number) =>
    arr.reduce(
      (acc, e, i) => (
        i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc
      ),
      []
    );

}
