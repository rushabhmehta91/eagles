import { Component, OnInit } from '@angular/core';
interface Job {
  id: number;
  name: string;
  category: string;
  team: string;
  percentage: number;
  class: string;
  image: string;
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor() { }

 
  
  private jobs: Job[] = [];

  ngOnInit() {
    this.jobs.push({id:1, name: "Matching engine", category: "Giving Back", team: "BPM", percentage: 100, class: "progress-bar bg-success", image: "../assets/img/theme/sketch.jpg"});
    this.jobs.push({id:2, name: "OCR", category: "Research", team: "BPM", percentage: 70, class: "progress-bar bg-primary", image: "../assets/img/theme/react.jpg"});
    this.jobs.push({id:3, name: "Cloud Computing", category: "Giving Back", team: "BPM", percentage: 50, class: "progress-bar bg-warning", image: "../assets/img/theme/sketch.jpg"});
  }

  assetsTrackBy(index: number, job: Job) {
    return job.id;
  }

}
