import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

interface Role {
  id: number;
  nom: string;
}

interface Module {
  id: number;
  nom: string;
  description: string;
}

@Component({
  selector: 'app-managment-access-component',
  imports: [CommonModule, LucideAngularModule],
  standalone: true,
  templateUrl: './managment-access-component.html',
  styleUrl: './managment-access-component.css',
})
export class ManagmentAccessComponent {

   selectedRoleId: number | null = null;

  roles: Role[] = [
    { id: 1, nom: 'Administrateur' },
    { id: 2, nom: 'Responsable Pédagogique' },
    { id: 3, nom: 'Enseignant' },
    { id: 4, nom: 'Secrétariat' }
  ];

  modules: Module[] = [
    { id: 1, nom: 'Gestion des Étudiants', description: 'Création et modification des dossiers étudiants' },
    { id: 2, nom: 'Configuration Académique', description: 'Paramétrage des filières et matières' },
    { id: 3, nom: 'Gestion des Notes', description: 'Saisie et validation des notes' },
    { id: 4, nom: 'Gestion Financière', description: 'Suivi des paiements et frais de scolarité' },
    { id: 5, nom: 'Statistiques', description: 'Rapports et tableaux de bord analytiques' }
  ];

  // role -> modules activés
  permissions: { [key: number]: number[] } = {};

  selectRole(id: number) {
    this.selectedRoleId = id;

    if (!this.permissions[id]) {
      this.permissions[id] = [];
    }
  }

   toggleModule(moduleId: number) {
    if (!this.selectedRoleId) return;

    const list = this.permissions[this.selectedRoleId];
    const index = list.indexOf(moduleId);

    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(moduleId);
    }
  }

   isEnabled(moduleId: number): boolean {
    if (!this.selectedRoleId) return false;

    return this.permissions[this.selectedRoleId]?.includes(moduleId);
  }

  get activeCount(): number {
    if (!this.selectedRoleId) return 0;
    return this.permissions[this.selectedRoleId]?.length || 0;
  }

  savePermissions() {
    console.log('Permissions:', this.permissions);
  }
}
