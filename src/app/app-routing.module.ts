import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtimelineComponent } from './addtimeline/addtimeline.component';
import { AdminaccountComponent } from './adminaccount/adminaccount.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FriendsComponent } from './friends/friends.component';
import { HomeComponent } from './home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MytimelineComponent } from './mytimeline/mytimeline.component';
import { NetworkComponent } from './network/network.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersComponent } from './users/users.component';
import { ViewtimelineComponent } from './viewtimeline/viewtimeline.component';


const routes: Routes = [
  {
    path:"",
    pathMatch: "full",
    redirectTo:"landingpage",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "password",
    component: PasswordComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  // {
  //   path: "profile",
  //   component: ProfileComponent
  // },
  {
    path: "useraccount",
    component: UseraccountComponent
  },
  {
    path: "adminaccount",
    component: AdminaccountComponent
  },
  {
    path: "adminlogin",
    component: AdminloginComponent
  },
  {
    path: "userlogin",
    component: UserloginComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path:"updateuser",
    component:UpdateuserComponent
  },
  {
    path:"network",
    component:NetworkComponent
  },
  {
    path:"friends",
    component:FriendsComponent
  }
  ,
  {
    path:"addtimeline",
    component:AddtimelineComponent
  },
  {
    path:"mytimeline",
    component:MytimelineComponent
  },
  {
    path:"viewtimeline",
    component:ViewtimelineComponent
  },
  {
    path: "landingpage",
    component: LandingpageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
