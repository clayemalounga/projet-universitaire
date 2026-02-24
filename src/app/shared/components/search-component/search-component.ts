import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-search-component',
  imports: [CommonModule, LucideAngularModule, FormsModule],
  standalone: true,
  templateUrl: './search-component.html',
  styleUrl: './search-component.css',
})
export class SearchComponent {

  @Input() type: string = '';
  showSearch: boolean = false;
  searchTerm: any =  '';

  toggleSearch(){
    this.showSearch = !this.showSearch;
  }

  @HostListener('document:click', ['$event'])
    clickOutside(event : Event){
    const target = event.target as HTMLElement;
    if(!target.closest('.search-close')){
      this.showSearch = false
    }
  }


}
