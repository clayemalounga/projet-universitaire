import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [RouterModule,],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent implements OnInit{

  router = inject(Router);
  ngOnInit(): void {
    
  }

  login(){
    this.router.navigateByUrl("/admin/dashboard");
  }

}
