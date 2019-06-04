import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import {ApiService  } from '../app/api.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  data:any;
  message:any;
  reply:boolean;
  child:boolean;
  postComment:any;
  senchaData:any
  

  // we can now access environment.apiUrl
  API_URL = environment.apiUrl;

  constructor(private apiService:ApiService){

  }
  ngOnInit(): void {
    this.abc();
    this.fetchSenchaData();
    
  };
  abc(){
    this.apiService.getAllMessages()
    .subscribe(res => {
      console.log(res);
      this.data = res;
      this.postComment = this.data
   });
  }

  postComments(message){
    this.reply = !this.reply
    this.child = !this.child;
    console.log(message);
    if(this.reply != true){
    //message.id  = this.data.length+1;
    //message.replies.push(message)
    this.apiService.updateMessage(message)
    .subscribe(res => {
      console.log(res);
   });
    }
  }


  fetchSenchaData(){
    this.apiService.fetchSencha()
    .subscribe(res => {
      console.log(res);
      this.senchaData = res;
   });
  }

}
