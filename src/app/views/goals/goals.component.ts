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
        img: '../../../assets/icons/goal1.svg',
        name: 'Viaje a Islas Canarias',
        progress: 1630000,
        goal: 8000000
      },
      {
        img: '../../../assets/icons/goal2.svg',
        name: 'Macbook Pro',
        progress: 0,
        goal: 7000000
      },
    ];
    this.goals.forEach(goal => goal.percent = (goal.progress * 100 / goal.goal).toFixed(0));
    console.log(this.goals);
  }
}
