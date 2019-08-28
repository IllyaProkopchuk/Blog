import { Component } from '@angular/core';
import { GuardsCheckStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW3';
  userName: string = 'Guest';
  topic: string;
  textMessage: string;
  array: Array<any> = [];
  time: any;
  index: number;
  changeText: string;
  changeTopic: string;
  check: boolean = false;
  loginization: boolean = false;
  login: string;
  pass: string;
  public post(): void {
    if (this.topic == '' || this.topic == ' ' || this.topic == null || this.textMessage == '' || this.textMessage == ' ' || this.textMessage == null) {
      alert('Invalid value');
    }
    else {
      this.time = new Date();
      let newPost = new Post(this.userName, this.topic, this.textMessage, this.time);
      this.array.unshift(newPost);
      this.textMessage = '';
      this.topic = '';
    }
  }

  public remove(i: number): void {
    if (this.loginization == false && this.array[i].userName == 'Admin') {
      alert('U can`t remove admin`s post!');
    }
    else {
      this.array.splice(i, 1);
    }
  }
  public change(i: number): void {
    if (this.loginization == false && this.array[i].userName == 'Admin') {
      alert('U can`t edit admin`s post!');
    }
    else {
      this.index = i;
      this.changeTopic = this.array[i].topic;
      this.changeText = this.array[i].textMessage;
      $('#myModal').modal('toggle');
    }
  }
  public changeIt(): void {
    this.array[this.index].topic = this.changeTopic;
    this.array[this.index].textMessage = this.changeText;
    $('#myModal').modal('hide');
  }
  public singInModal(): void {
    $('#myNewModal').modal('toggle');
    this.check = false;
  }
  public signIn(): void {
    if (this.login === 'admin' && this.pass === 'admin') {
      this.userName = 'Admin';
      this.check = false;
      this.loginization = true;
      this.login = '';
      this.pass = '';
      $('#myNewModal').modal('hide');
    }
    else {
      this.check = true;
      this.login = '';
      this.pass = '';
    }
  }
  public signOut(): void {
    this.userName = 'Guest';
    this.loginization = false;
  }
}

function Post(userName, topic, textMessage, time) {
  this.userName = userName;
  this.topic = topic;
  this.textMessage = textMessage;
  this.time = time;
}