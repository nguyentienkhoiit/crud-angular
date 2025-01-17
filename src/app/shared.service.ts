import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://127.0.0.1:8000';
  readonly PhotoUrl = 'http://127.0.0.1:8000/media/'

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/department/')
  }

  getEmpList():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/employee/')
  }

  addDepartment(val:any) {
    return this.http.post(this.APIUrl + '/department/',val)
  }

  addEmployee(val:any) {
    return this.http.post(this.APIUrl + '/employee/',val)
  }

  updateDepartment(val:any) {
    return this.http.put(this.APIUrl + '/department/'+val.DepartmentId+'/', val)
  }

  updateEmployee(val:any) {
    return this.http.put(this.APIUrl + '/employee/',val)
  }

  deleteDepartment(val:any) {
    return this.http.delete(this.APIUrl + '/department/'+val)
  }

  deleteEmployee(val:any) {
    return this.http.delete(this.APIUrl + '/employee/',val)
  }

  updateProfilePicture(val:any) {
    return this.http.post(this.APIUrl+'/upload', val)
  }

  getAllDepartmentName():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl+'/department/')
  }
}
