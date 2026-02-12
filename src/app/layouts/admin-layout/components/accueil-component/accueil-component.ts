import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';  
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-accueil-component',
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './accueil-component.html',
  styleUrl: './accueil-component.css',
})
export class AccueilComponent {

  progressBarItems = [
    {
      icon: 'home',
      label: 'Accueil',
      link: '/admin/accueil'
    }
  ];

}
