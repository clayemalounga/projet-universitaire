import { Component, Input } from '@angular/core';
import { MENU_ITEMS } from '../../../../core/menu/menu.config';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-sidebar-component',
  imports: [RouterModule, CommonModule, LucideAngularModule],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css',
})
export class SidebarComponent {

  @Input() open: boolean = true
  menuItems = MENU_ITEMS;
  
}
