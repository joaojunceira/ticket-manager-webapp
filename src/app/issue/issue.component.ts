import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})

export class IssueComponent implements OnInit {
  constructor() { }

  model = new Issue();
  title = 'New Issue';

  ngOnInit() {
  }

}

export class Issue {
  public name: string;
  public description: string;
  public category: string;
  public priority: number;
  public customer: number;
  public assignedTo: number;
  constructor() { }
}
