import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  balance: number;
  investment: number;
  profit: number;
  type: string;

  constructor() { }

  ngOnInit(): void {
    this.getBalance();
    this.getType();
  }

  getBalance(){
    this.balance = 1570000;
    this.investment = 1600000;
    this.profit = -30000;
  }

  getType(){
    this.type = 'estratega';
  }

}
