import { Component, HostListener } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';  
import { RouterModule } from '@angular/router';
import { MenuModulesAccueil } from '../../../../core/menu/menu-modules-home/menu-modules-accueil.config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { timeStamp } from 'console';


@Component({
  selector: 'app-accueil-component',
  imports: [LucideAngularModule, RouterModule, CommonModule, FormsModule],
  standalone: true,
  templateUrl: './accueil-component.html',
  styleUrl: './accueil-component.css',
})
export class AccueilComponent {

  searchTerm: string ='';
  showSearch: boolean = false

  progressBarItems = [
    {
      icon: 'home',
      label: 'Accueil',
      link: '/admin/accueil'
    }
  ];

  menuModulesAccueil = MenuModulesAccueil;
  modulesResultatSearch = MenuModulesAccueil;

  toggleSearch() {
     this.showSearch = !this.showSearch; 
  }

  get filteredModules(){
    this.modulesResultatSearch = this.menuModulesAccueil.filter(m =>
      m.title.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase().trim()) ||
      m.description.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase().trim())
    )
    return this.modulesResultatSearch;
  }

  // un ecouteur pour pouvoir fermer automatiquement le champs input apres saisi
  @HostListener('document:click',['$event'])
  clickOutside(event: Event){
    const target = event.target as HTMLElement;
    if(!target.closest('.search-close')){
      this.showSearch = false;
    }
  }

}
