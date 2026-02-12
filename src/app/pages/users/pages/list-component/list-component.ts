import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { DynamicProgress } from '../../../../shared/components/dynamic-progress/dynamic-progress';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-component',
  standalone: true,
  imports: [LucideAngularModule, CommonModule, RouterModule, DynamicProgress],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent implements OnInit{

  listUsers: any[] = [];
  // les donnees de pagination
  page = 1;
  pageSize = 10;
  totalItems = this.listUsers.length;

  progressBarItems = [
    {
      icon: 'home',
      label: 'Accueil',
      link: '/'
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

}
