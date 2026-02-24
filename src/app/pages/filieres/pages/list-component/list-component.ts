import { Component, inject, OnInit } from '@angular/core';
import { DynamicProgress } from '../../../../shared/components/dynamic-progress/dynamic-progress';
import { CommonModule, Location } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { FilterComponent } from '../../../../shared/components/filter-component/filter-component';
import { SearchComponent } from '../../../../shared/components/search-component/search-component';


@Component({
  selector: 'app-list-component',
  imports: [DynamicProgress, CommonModule, LucideAngularModule, RouterModule, FilterComponent,SearchComponent],
  standalone: true,
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent implements OnInit{

  readonly location = inject(Location);
  listFilieres: any[] = [];

  page: number = 1; 
  pageSize: number = 10; 
  totalItems: number = this.listFilieres.length;

  searchType = "filiere";
  showModal: boolean = false;

  progressBarItems = [
    {
      
      icon: 'layers',
      label: 'Modules',
      link: '/admin/accueil'
    },
    {
      icon: 'graduation-cap',
      label: 'Filières'
    }
  ]
  
  ngOnInit(): void {

    this.listFilieres = [ 
    { nom: 'Sciences Mathématiques', code: 'SM', description: 'Filière orientée vers les mathématiques et la physique.' }, { nom: 'Sciences Biologiques', code: 'SB', description: 'Filière centrée sur la biologie et les sciences naturelles.' }, 
    { nom: 'Lettres Modernes', code: 'LM', description: 'Filière littéraire avec focus sur les langues et la littérature.' }, 
    { nom: 'Économie et Gestion', code: 'EG', description: 'Filière orientée vers l’économie, la comptabilité et la gestion.' }, { nom: 'Informatique', code: 'INFO', description: 'Filière spécialisée dans les technologies de l’information.' } 
  ];
  }

  editFiliere(filiere: any): void { 
    console.log('Modifier filière', filiere);
  } 

  deleteFiliere(filiere: any): void { 
    console.log('Supprimer filière', filiere); 
  }
  
  openModal(){
    this.showModal = !this.showModal;
  }

  closeModal(){
    this.showModal = false;
  }

  saveFiliere(){
    console.log("value saisie");
    this.closeModal();
  }

  // les routes pour la navigation des chevrons
  backNavigate(){
    if(window.history.length > 1){
      this.location.back();
    }
  }

  forwardNavigate(){
    this.location.forward();
  }

}
