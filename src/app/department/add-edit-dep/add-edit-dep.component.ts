import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-edit-dep',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './add-edit-dep.component.html',
  styleUrl: './add-edit-dep.component.css'
})
export class AddEditDepComponent implements OnInit {
  @Input() dep:any;

  DepartmentId:string | undefined;
  DepartmentName:string | undefined

  constructor(private service:SharedService) {}

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId
    this.DepartmentName = this.dep.DepartmentName
  }

  addDepartment() {
    var val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    }

    this.service.addDepartment(val).subscribe(res => {
      alert(res.toString())
    })
  }

  updateDepartment() {
    var val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    }

    this.service.updateDepartment(val).subscribe(res => {
      alert(res.toString())
    })
  }
}
