import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  goals = [];

  constructor() { }

  ngOnInit(): void {
    this.getGoals();
  }

  getGoals(){
    this.goals = [
      {
        img: '../../../assets/img/goal1.png',
        name: 'Viaje a Islas Canarias',
        progress: '1630000',
        goal: '8000000'
      },
      {
        img: '../../../assets/img/goal2.png',
        name: 'Macbook Pro',
        progress: '0',
        goal: '7000000'
      },
    ];
  }
}
