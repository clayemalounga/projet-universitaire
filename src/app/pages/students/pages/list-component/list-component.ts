import { Component, inject } from '@angular/core';
import { DynamicProgress } from '../../../../shared/components/dynamic-progress/dynamic-progress';
import { CommonModule, Location } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { FilterComponent } from '../../../../shared/components/filter-component/filter-component';


@Component({
  selector: 'app-list-component',
  imports: [ DynamicProgress, CommonModule, LucideAngularModule, RouterModule, FilterComponent],
  standalone: true,
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent {

  readonly location = inject(Location);
  listStudents: any[] = [];
  // les donnees de pagination
  page = 1;
  pageSize = 10;
  totalItems = this.listStudents.length;

  progressBarItems = [
    {
      icon: 'layers',
      label: 'Modules',
      link: '/admin/accueil'
    },
    {
      icon: 'users',
      label: 'Etudiants',
      link: '/admin/students/list'
    },
    {
      icon: 'users',
      label: 'Listes',
    }
  ];

  ngOnInit(): void {

    this.listStudents  = [ 
      { prenom: 'Awa', nom: 'Diop', matricule: 'STU001', classe: 'Terminale A' },
      { prenom: 'Karim', nom: 'Benali', matricule: 'STU002', classe: 'Première S' }, 
      { prenom: 'Sophie', nom: 'Durand', matricule: 'STU003', classe: 'Seconde C' }, 
      { prenom: 'Lucas', nom: 'Martin', matricule: 'STU004', classe: 'Terminale D' }, 
      { prenom: 'Claye', nom: 'Malounga', matricule: 'STU005', classe: 'Première L' } 
    ];
  }

  onPageChange(page: number){
    this.page = page;
  }

  editStudent(student: any): void { 
    console.log('Modifier étudiant', student); 
    // logique pour ouvrir un formulaire d’édition 
  } 
  deleteStudent(student: any): void { 
    console.log('Supprimer étudiant', student); 
    // logique pour supprimer l’étudiant
  }

  // La navigation des chevrons 
  backNavigate(){
    if(window.history.length > 1){
      this.location.back();
    }
  }

  forwardNavigate(){
    this.location.forward();
  }
}
