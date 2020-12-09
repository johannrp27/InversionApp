import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {
  @Input() type: string;

  company: any;


  constructor() { }

  ngOnInit(): void {
    this.getPortfolio();
  }

  getPortfolio(){
    this.company = {
      name: 'FIC Old Mutual Efectivo',
      icon: '../../../assets/icons/partner.svg',
      balance: 240000,
      percent: 15,
      model: [
        'Renta Fija',
        'Depósito a la fija'
      ]
    };
  }

}
