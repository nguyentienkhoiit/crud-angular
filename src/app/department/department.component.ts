import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { NgFor } from '@angular/common';
import { ShowDepComponent } from "./show-dep/show-dep.component";

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [NgFor, ShowDepComponent],
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']  // Corrected 'styleUrl' to 'styleUrls'
})
export class DepartmentComponent {  // Added 'implements OnInit'
  
}

