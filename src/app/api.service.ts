import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 


    
  }

    // API: GET /todos
    public getAllMessages() {
      return this.http.get(API_URL + '/todos');
    }
  
    // API: POST /todos
    public createMessage(item) {
      // will use this.http.post()
      return this.http.post(API_URL + '/todos', item)
    }
  
    // API: GET /todos/:id
    public getTodoById(todoId: number) {
      // will use this.http.get()
    }
  
    // API: PUT /todos/:id
    public updateMessage(item) {
      // will use this.http.put()
      return this.http
      .put(API_URL + '/todos/' + item.id, item)
    }
  
    // DELETE /todos/:id
    public deleteTodoById(todoId: number) {
      // will use this.http.delete()
    }


    // fetch cors api   
    public fetchSencha (){
      return this.http.get('https://www.sencha.com/forum/topics-browse-remote.php');
    }



  }