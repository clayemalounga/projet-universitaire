import { Component, Input } from '@angular/core';
import { SidebarComponent } from '../components/sidebar-component/sidebar-component';
import { HeaderComponent } from '../components/header-component/header-component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer-component/footer-component';

@Component({
  selector: 'app-admin-layout-component',
  standalone:true,
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],
  templateUrl: './admin-layout-component.html',
  styleUrl: './admin-layout-component.css',
})
export class AdminLayoutComponent {

  
  isSideBrOpen = false;

  toggleSideBar(){
    this.isSideBrOpen = !this.isSideBrOpen
  }
}
