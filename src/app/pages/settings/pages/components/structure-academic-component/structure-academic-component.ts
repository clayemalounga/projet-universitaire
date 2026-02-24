import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

interface Filiere {
  id: number;
  nom: string;
}

interface Matiere {
  id: number;
  nom: string;
}

@Component({
  selector: 'app-structure-academic-component',
  imports: [CommonModule, LucideAngularModule],
  standalone: true,
  templateUrl: './structure-academic-component.html',
  styleUrl: './structure-academic-component.css',
})
export class StructureAcademicComponent {

  selectedFiliereId: number | null = null;

  filieres: Filiere[] = [
    { id: 1, nom: 'Informatique - Licence 1' },
    { id: 2, nom: 'Informatique - Licence 2' },
    { id: 3, nom: 'Réseaux & Télécom - Licence 1' },
    { id: 4, nom: 'Gestion - Licence 1' }
  ];

  matieres: Matiere[] = [
    { id: 1, nom: 'Mathématiques Générales' },
    { id: 2, nom: 'Algorithmique' },
    { id: 3, nom: 'Programmation Java' },
    { id: 4, nom: 'Base de Données' },
    { id: 5, nom: 'Architecture des Ordinateurs' },
    { id: 6, nom: 'Comptabilité Générale' },
    { id: 7, nom: 'Réseaux Informatiques' }
  ];

  // Configuration : filière -> matières
  configurations: { [key: number]: number[] } = {};

  selectFiliere(id: number) {
    this.selectedFiliereId = id;

    if (!this.configurations[id]) {
      this.configurations[id] = [];
    }
  }

  toggleMatiere(matiereId: number) {
    if (!this.selectedFiliereId) return;

    const list = this.configurations[this.selectedFiliereId];

    const index = list.indexOf(matiereId);

    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(matiereId);
    }
  }

  isConfigured(matiereId: number): boolean {
    if (!this.selectedFiliereId) return false;

    return this.configurations[this.selectedFiliereId]?.includes(matiereId);
  }

  get selectedCount(): number {
    if (!this.selectedFiliereId) return 0;
    return this.configurations[this.selectedFiliereId]?.length || 0;
  }

  saveConfiguration() {
    console.log('Configuration:', this.configurations);
  }

}
