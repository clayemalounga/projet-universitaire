import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';


@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {

  @Output() toggleSlide = new EventEmitter<void>();

  onToggle(){
    this.toggleSlide.emit();
    console.log("event emit au bosse");
  }
}
