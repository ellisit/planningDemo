import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RdvserviceService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000';
// recupere les rendez vous 
  getRdv(){
    return this.http.get(`${this.url}/`)
  }
// ajoute un rendez vous 
  addRdv(data){
    this.http.post(`${this.url}/ajout`, data)
      .subscribe(
        res => {
          console.log('Votre rdv a été créer avec succès.', res);
        },
        err => {
          console.log('Error occured:' , err);
          
        }
      );
  }
 // delete un rendez vous avec un id
  deleteRdv(id) {
    this.http.delete(`${this.url}/delete/${id}`).subscribe(
      res => {
        console.log('votre rdv à bien été supprimer.', res);
      },
      err => {
        console.log("error occured", err);
        
      }
    );
  }
// modifie un rendez vous avec un id
  modifyRdv(data, id){
    this.http.put(`${this.url}/modifier/${id}`, data).subscribe( res => {
      console.log('votre rdv a bien ete modifier', res);
    }, 
    err => {
      console.log("error occured", err);
      
    })
  }
}
