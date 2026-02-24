import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicProgressModel } from '../../dynamic.progress.models/dynamic.progress.model';
import { LucideAngularModule } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-progress',
  imports: [LucideAngularModule, RouterModule, CommonModule],
  standalone: true,
  templateUrl: './dynamic-progress.html',
  styleUrl: './dynamic-progress.css',
})
export class DynamicProgress {

  @Input() items: DynamicProgressModel[]= [];

  @Output() backLink = new EventEmitter<any>();
  @Output() forwardLink = new EventEmitter<any>();

  toggleBackNavigate(){
    this.backLink.emit();
    console.log("Je vais en arriere");
  }

  toggleForwardNavigate(){
    this.forwardLink.emit();
    console.log("Je vais en avant dans la nav");
  }

  
}
