import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sample-project';
  // router: any;
   ngOnInit() {
   //   this.router.navigate(["/home"]);
   }
}