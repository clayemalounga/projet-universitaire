import { CommonModule, Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { DynamicProgress } from '../../../shared/components/dynamic-progress/dynamic-progress';
import { FilterComponent } from '../../../shared/components/filter-component/filter-component';
import { SearchComponent } from '../../../shared/components/search-component/search-component';

@Component({
  selector: 'app-list-component',
  imports: [CommonModule, RouterModule, LucideAngularModule, DynamicProgress, FilterComponent,SearchComponent],
  standalone: true,
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent implements OnInit {

  readonly location = inject(Location);
  listAnnees: any[] = [];
  searchType = "annee"

  progressBarItems=[
    {
      icon: 'layers',
      label: 'Modules',
      link: '/admin/accueil'
    },
    {
      icon: 'calendar',
      label: 'Années académiques',
      link: '/admin/academic-years/list'
    }
  ]

  page: number = 1; 
  pageSize: number = 10; 
  totalItems: number = this.listAnnees.length;
  showModal: boolean = false;
  
  ngOnInit(): void {
    this.listAnnees = [ 
      { nom: '2024-2025', dateDebut: '01/10/2024', dateFin: '30/06/2025' }, 
      { nom: '2023-2024', dateDebut: '01/10/2023', dateFin: '30/06/2024' }, 
      { nom: '2022-2023', dateDebut: '01/10/2022', dateFin: '30/06/2023' }, 
      { nom: '2021-2022', dateDebut: '01/10/2021', dateFin: '30/06/2022' } 
    ];
  }

  editAnnee(annee: any): void { 
    console.log('Modifier année académique', annee); 
  } 

  deleteAnnee(annee: any): void { 
    console.log('Supprimer année académique', annee); 
  }

  openModal(){
    this.showModal = !this.showModal;
  }

  closeModal(){
    this.showModal = false;
  }

  saveAnnee(){
    console.log("value send");
    this.closeModal();
  }

  // les routes avec les chevrons

  backNavigate(){
    if(window.history.length > 1){
      this.location.back();
    }
  }

  forwardNavigate(){
    this.location.forward();
  }


}
