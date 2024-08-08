import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { NgFor, NgIf } from '@angular/common';
import { AddEditDepComponent } from "../add-edit-dep/add-edit-dep.component";

@Component({
  selector: 'app-show-dep',
  standalone: true,
  imports: [NgFor, AddEditDepComponent, NgIf],
  templateUrl: './show-dep.component.html',
  styleUrl: './show-dep.component.css'
})
export class ShowDepComponent implements OnInit {
  constructor(private service: SharedService) {}

  DepartmentList: any = [];

  ModalTitle:string | undefined;

  ActivateAddEditDepCom:boolean | undefined;

  dep:any;

  addClick() {
    this.dep  = {
      DepartmentId: 0,
      DepartmentName: ""
    }
    this.ModalTitle = "Add department"
    this.ActivateAddEditDepCom=true
  }

  closeClick() {
    this.ActivateAddEditDepCom=false
    this.refreshDepList()
  }

  editClick(item: any) {
    this.dep=item
    this.ModalTitle = "Edit department"
    this.ActivateAddEditDepCom = true
    console.log('click update button');
    
  }

  deleteClick(item: any) {
    if(confirm('Are you ok?')) {
      this.service.deleteDepartment(item.DepartmentId).subscribe(data => {
        alert(data.toString())
        this.refreshDepList()
      })
    }
  }

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList() {
    this.service.getDepList().subscribe(data => {
      this.DepartmentList = data;
      console.log(this.DepartmentList);
    });
  }
}
