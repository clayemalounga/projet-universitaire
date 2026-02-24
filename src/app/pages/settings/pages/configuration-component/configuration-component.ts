import { CommonModule, Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { DynamicProgress } from '../../../../shared/components/dynamic-progress/dynamic-progress';
import { StructureAcademicComponent } from '../components/structure-academic-component/structure-academic-component';
import { ManagmentAccessComponent } from '../components/managment-access-component/managment-access-component';

@Component({
  selector: 'app-configuration-component',
  imports: [CommonModule, LucideAngularModule, FormsModule, DynamicProgress, StructureAcademicComponent, ManagmentAccessComponent],
  standalone: true,
  templateUrl: './configuration-component.html',
  styleUrl: './configuration-component.css',
})
export class ConfigurationComponent implements OnInit{
  
  readonly location = inject(Location)
  progressBarItems = [
    {
      
      icon: 'settings',
      label: 'Configurations',
      link: '/',
      isActive: false
    },
    {
      label : 'Configuration avances',
       link: '/',
      isActive: true

    }
  ]

  menu: string = '';

  ngOnInit(): void {
    this.menu = "Structure-académique"
  }

  selectMenu(menuItem: string){
    this.menu = menuItem;
  }

  // La navigation a partir des chevrons
  backNavigate(){
    if(window.history.length > 1){
      this.location.back();
    }
  }

  forwardNavigate(){
    this.location.forward();
  }
  
  
}
