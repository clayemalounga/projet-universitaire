import { CommonModule } from '@angular/common';
import { Component, Host, HostListener, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { DynamicProgress } from '../../../../shared/components/dynamic-progress/dynamic-progress';
import Swal from 'sweetalert2';
import { FilterComponent } from '../../../../shared/components/filter-component/filter-component';
import { Location } from '@angular/common';
import { PaginationBarComponent } from '../../../../shared/components/pagination-bar-component/pagination-bar-component';

@Component({
  selector: 'app-list-component',
  standalone: true,
  imports: [LucideAngularModule, CommonModule, RouterModule, DynamicProgress, FilterComponent, PaginationBarComponent],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent implements OnInit{

  listUsers: any[] = [];
  showFilter: boolean = false;
  location = inject(Location);
  // les donnees de pagination
  page = 1;
  pageSize = 10;
  totalItems = this.listUsers.length;

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
      label: 'Listes',
    }
  ];

  ngOnInit(): void {

    this.listUsers = [
       { prenom: "Claye", nom: "Malounga", email: "claye.malounga@example.com", role: "Admin" }, 
       { prenom: "Sophie", nom: "Durand", email: "sophie.durand@example.com", role: "User" }, 
       { prenom: "Karim", nom: "Benali", email: "karim.benali@example.com", role: "Manager" }, { prenom: "Awa", nom: "Diop", email: "awa.diop@example.com", role: "User" }, 
      { prenom: "Lucas", nom: "Martin", email: "lucas.martin@example.com", role: "Guest" } ];
  }

  onPageChange(page: number){
    this.page = page;
  }

  toggleFilter(){
    this.showFilter = !this.showFilter;
  }

  recentFilter(){
    this.showFilter = !this.showFilter;
  }

  oldFilter(){
    this.showFilter = !this.showFilter;
  }

  editeUser(){
    Swal.fire({
      title: "Etes-vous sur ?",
      text: "Cette action est ireversible.",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: '#d33', 
      confirmButtonText: 'Oui, supprimer'
    }).then((result) =>{
      if(result.isConfirmed){
        Swal.fire({
          title: "supprimer",
          text: 'Valider',
          icon: "success"
        })
      }
    })
  }

  // Navigation des chevrons left comme right
  backNavigate(){
    if(window.history.length > 1){
      console.log("Mon historique contient bien les valeurs")
      this.location.back();
    }
  }

  forwardNavigate(){
    this.location.forward();
  }



}
