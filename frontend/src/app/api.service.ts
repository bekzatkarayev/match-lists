import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  postMatch(date: any) {
    this.http.post('', date).subscribe(res => {
      console.log(res)
    })
  }
}
