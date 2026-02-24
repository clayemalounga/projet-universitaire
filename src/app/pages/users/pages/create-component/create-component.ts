import { Component, inject, OnInit } from '@angular/core';
import { DynamicProgress } from '../../../../shared/components/dynamic-progress/dynamic-progress';
import { Location } from '@angular/common';


@Component({
  selector: 'app-create-component',
  standalone: true,
  imports: [DynamicProgress],
  templateUrl: './create-component.html',
  styleUrl: './create-component.css',
})
export class CreateComponent implements OnInit {
  
  readonly location = inject(Location);
  progressBarItems = [
    {
      icon: 'layers',
      label: 'Modules',
      link: '/admin/accueil'
    },
    {
      icon: 'users',
      label: 'Utilisateurs',
      link: '/admin/users/list'
    },
    {
      icon: 'users',
      label: 'Ajouter',
    }
  ];
  ngOnInit(): void {
    
  }

  forwardNavigate(){
    this.location.forward();
  }

  backNavigate(){
    if(window.history.length > 1){
      this.location.back();
    }
  }



}
