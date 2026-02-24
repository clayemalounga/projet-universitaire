import { CommonModule, Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { DynamicProgress } from '../../../../shared/components/dynamic-progress/dynamic-progress';
import { FilterComponent } from '../../../../shared/components/filter-component/filter-component';
import { SearchComponent } from '../../../../shared/components/search-component/search-component';

@Component({
  selector: 'app-list-component',
  imports: [CommonModule, RouterModule, LucideAngularModule, DynamicProgress, FilterComponent, SearchComponent],
  standalone: true,
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent implements OnInit{


  readonly location = inject(Location);
  listClasses: any[] = [];
  searchType = 'classe'

  page: number = 1; 
  pageSize: number = 10; 
  totalItems: number = this.listClasses.length;
  showModal: boolean = false;

  progressBarItems = [

    {
      icon: 'layers',
      label: 'Modules',
      link: '/admin/accueil'
    },
    {
      icon: 'school-icon',
      label: 'Salles de classes',
    }
  ]

  ngOnInit(): void {
      this.listClasses  = [ 
        { nom: 'Terminale A', code: 'T-A', capacite: 40 }, 
        { nom: 'Première S', code: 'P-S', capacite: 35 }, 
        { nom: 'Seconde C', code: 'S-C', capacite: 45 }, 
        { nom: 'Terminale D', code: 'T-D', capacite: 38 }, 
        { nom: 'Première L', code: 'P-L', capacite: 30 } 
      ]; 
  }

  editClasse(classe: any): void { 
    console.log('Modifier classe', classe); 
  } 
  
  deleteClasse(classe: any): void { 
    console.log('Supprimer classe', classe);
  }

  openModal(){
    this.showModal = !this.showModal;
  }

  closeModal(){
    this.showModal = false;
  }

  saveClasse(){
    console.log("Value send");
    this.closeModal();
  }

  // les routes avec les chevrons
  backNavigate(){
    if(window.history.length >  1){
      this.location.back()
    }
  }

  forwardNavigate(){
    this.location.forward();
  }
}
