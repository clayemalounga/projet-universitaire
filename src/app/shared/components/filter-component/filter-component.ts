import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-filter-component',
  imports: [CommonModule, LucideAngularModule],
  standalone: true,
  templateUrl: './filter-component.html',
  styleUrl: './filter-component.css',
})
export class FilterComponent {

  showFilter: boolean = false;

  toggleFilter(){
    this.showFilter = !this.showFilter;
  }

  recentFilter(){

  }

  oldFilter(){

  }

  // listner global pour fermer le dropdown
  @HostListener('document:click', ['$event'])
  clickOutside(event : Event){
    const target = event.target as HTMLElement;
    if(!target.closest('.filter-dropdown')){
      this.showFilter = false
    }
  }

}
