import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name='';
  fogot=true;
  currentStyle={color: 'red', fontSize: '30px'};
  constructor() { }

  ngOnInit() {
  }

  showEvent(event){
    this.name = event.target.value;
    console.log(event);
  }

  changeValueFogot(){
    this.fogot= !this.fogot;
    console.log(this.fogot);
  }


}
