import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent  implements OnInit{

  public userId!:number;
  userDetails!:User;

  constructor(
    private activedRoute:ActivatedRoute,
    private api:ApiService
  ){}

  ngOnInit(): void {
    this.activedRoute.params.subscribe(data=>{
      this.userId = data['id'];
      this.fetchUserDetails(this.userId);
    })
  }

  fetchUserDetails(userId:number){
    this.api.getRegisteredUserWithId(userId).subscribe(
      res=>{
        this.userDetails = res;
        console.log(this.userDetails);
        
      }
    )
  }

}
