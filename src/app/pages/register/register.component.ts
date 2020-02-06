import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  step: number = 1;
  skills: string[] = [
    "java",
    "dotnet",
    "DB2",
    "Angular",
    "Javascript",
    "Javascript1",
    "Javascript2",
    "Javascript3"
  ]

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }

  onNext() {
    this.step++;
  }

  onPrevious() {
    this.step--;
  }

  onSave() {
    this.router.navigate(['/dashboard']);
  }

}
