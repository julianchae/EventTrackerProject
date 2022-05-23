import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dog } from '../model/dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private url = environment.baseUrl+ 'api/dogs'
  private indexUrl = environment.baseUrl+ 'api/index'
  private keywordUrl = environment.baseUrl+ ' api/dogs/search'
  constructor(
private http: HttpClient

  ) { }

  index(){
    return this.http.get<Dog[]>(this.indexUrl )
    .pipe(
      catchError((err: any)=> {
        console.log(err);
        return throwError('Boom')
      })
    );
  }


  addDog(addedDog: Dog){

    return this.http.post<Dog>(this.url, addedDog).pipe(
      catchError(
        (err:any)=>{
          console.log(err)
          return throwError("broken")

        }
      )
    )
  }
  update(updatedDog: Dog){

  return this.http.put<Dog>(this.url +'/'+ updatedDog.id, updatedDog,)


  }


  delete(id: number){
    return this.http.delete<void>(this.url +'/'+ id)
  }

  findByKeyword(keyword: string){

  return this.http.get<Dog[]>(this.keywordUrl + '/'+keyword)

  }




  show(id:number){
    return this.http.get<Dog>(this.url + '/'+ id)
    .pipe(
      catchError(
        (err: any)=>{
          console.log(err)
          return throwError("broken")
        }
      )
    )
  }
}
