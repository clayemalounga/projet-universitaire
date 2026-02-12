import { Component, OnInit } from '@angular/core';
import { DynamicProgress } from '../../../../shared/components/dynamic-progress/dynamic-progress';


@Component({
  selector: 'app-create-component',
  standalone: true,
  imports: [DynamicProgress],
  templateUrl: './create-component.html',
  styleUrl: './create-component.css',
})
export class CreateComponent implements OnInit {
  
  progressBarItems = [
    {
      icon: 'home',
      label: 'Accueil',
      link: '/'
    }
  ];
  ngOnInit(): void {
    
  }

}
