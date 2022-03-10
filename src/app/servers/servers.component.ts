import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  serverCreateStatus = 'No server was created!';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreateStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event){
    // foi usado o .value porque foi usado o F12 lá na tela e o valor está nesse .value
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
