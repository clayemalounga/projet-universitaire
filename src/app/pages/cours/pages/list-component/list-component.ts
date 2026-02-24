import { CommonModule, Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { DynamicProgress } from '../../../../shared/components/dynamic-progress/dynamic-progress';
import { FilterComponent } from '../../../../shared/components/filter-component/filter-component';
import { SearchComponent } from '../../../../shared/components/search-component/search-component';

@Component({
  selector: 'app-list-component',
  imports: [RouterModule, CommonModule, LucideAngularModule, DynamicProgress, FilterComponent, SearchComponent],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent implements OnInit {

  readonly location = inject(Location)
  listCours: any[] = [];

  page: number = 1; 
  pageSize: number = 10; 
  totalItems: number = this.listCours.length;
  showModal: boolean = false;

  searchType = "cours";

   progressBarItems = [
    {
      icon: 'layers',
      label: 'Modules',
      link: '/admin/accueil'
    },
    {
      icon: 'book-open',
      label: 'Matieres'
    }
  ];

  ngOnInit(): void {
    this.listCours = [ 
      { intitule: 'Mathématiques', code: 'MATH101', filiere: 'Sciences Mathématiques' },
      { intitule: 'Biologie Générale', code: 'BIO201', filiere: 'Sciences Biologiques' }, 
      { intitule: 'Littérature Française', code: 'LIT301', filiere: 'Lettres Modernes' }, 
      { intitule: 'Comptabilité', code: 'COM401', filiere: 'Économie et Gestion' }, 
      { intitule: 'Programmation Java', code: 'INFO501', filiere: 'Informatique' } 
    ];
  }

  editCours(cours: any): void { 
    console.log('Modifier cours', cours); 
  }   
  
  deleteCours(cours: any): void { 
    console.log('Supprimer cours', cours);
  }

  openModal(){
    this.showModal = !this.showModal;
  }

  closeModal(){
    this.showModal = false;
  }

  saveCours(){
    console.log("Value send");
    this.closeModal();
  }

  // les routes pour la navigation par les chevrons
  backNavigate(){
    if(window.history.length > 1){
      this.location.back();
    }
  }

  forwardNavigate(){
    this.location.forward();
  }
  

}
