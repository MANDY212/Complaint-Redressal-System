import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Complaint-System-UI';
  brand = 'complaint redressal system'
  user:string|null = "";
  userid:number = Number(sessionStorage.getItem("userid"));

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.userid != null && this.userid > 0){
      this.user = sessionStorage.getItem("username");
    }
  }

  logout()
  {
    if(confirm("Do you Really want to Logout?")==true)
    {
      this.router.navigate(['logout'])
    }
  }
}
