import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';
import { User } from '../user';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
users : User[];
loggedInUser: User;
  constructor(private service : FriendService) { }

  ngOnInit() {
    this.loggedInUser= JSON.parse(localStorage.getItem("user"));
    this.getUserFriends();
  }
  private getUserFriends(){
    this.service.getUserByFriendByOrderStatusById(this.loggedInUser.id).subscribe((resp) => {
      // this.users = resp.filter(user => user.id !==this.loggedInUser.id);
      this.users=resp;
      console.log(this.users);
    },
    (err) => {
      console.log(err);
    }
    );
}



}
