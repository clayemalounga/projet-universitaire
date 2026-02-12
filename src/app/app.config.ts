import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideSweetAlert2, SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { LucideAngularModule, LogOut, BookOpen, Users,User, GraduationCap, Layers, Calendar, Settings, Edit, Menu, Home, Plus,List, FileText, ChevronLeft, ChevronRight, Wallet, Edit2, Trash2, Trash2Icon, Edit2Icon, ChevronDown, ChevronUp, IdCard, Grid  } from 'lucide-angular'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideSweetAlert2(),

    importProvidersFrom(
      LucideAngularModule.pick({
        Home, Calendar, BookOpen, Grid, IdCard, Edit, GraduationCap, Layers, Menu,LogOut,Settings,Users,FileText,User,ChevronLeft,ChevronRight,Wallet,Edit2,Trash2, ChevronDown, ChevronUp, List,Plus
      })
    ),
    
  ],
};
