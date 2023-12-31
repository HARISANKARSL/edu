import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http:HttpClient) { }
  getAllImges(){
    return this.http.get<any>('assets/imges.json')
  }
}
