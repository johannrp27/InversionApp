import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {
  @Input() type: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
