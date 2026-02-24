import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-pagination-bar-component',
  imports: [CommonModule, LucideAngularModule],
  standalone: true,
  templateUrl: './pagination-bar-component.html',
  styleUrl: './pagination-bar-component.css',
})
export class PaginationBarComponent {


  page: number = 1;
  pageSize: number = 10;
  totalResults: number = 20

  pages: any[]= [] ;
  totalPages = 10
  goNext(){};

  goPrevious(){};

  goToPage(p : any){};
}
