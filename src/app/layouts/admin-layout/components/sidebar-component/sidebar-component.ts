import { Component, Input } from '@angular/core';
import { MENU_ITEMS } from '../../../../core/menu/menu.config';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar-component',
  imports: [RouterModule, CommonModule, LucideAngularModule, FormsModule],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css',
})
export class SidebarComponent {

  @Input() open: boolean = true;
  menuItems = MENU_ITEMS;
  showSearch: boolean = false;
  searchTerm = '';

  toggleIcon(){
    this.showSearch = !this.showSearch;
  }
  
}
