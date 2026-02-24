import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideSweetAlert2 } from '@sweetalert2/ngx-sweetalert2';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { LucideAngularModule, LogOut, BookOpen, X, SaveIcon,  Eye, History, Filter, AlertCircle, Search, SearchXIcon, Users,User, GraduationCap, Layers, Calendar, Settings, Edit, Menu, Home, Plus,List, FileText, ChevronLeft, ChevronRight, Wallet, Edit2, Trash2, ChevronDown, ChevronUp, IdCard, Grid, Clock10, SchoolIcon,  } from 'lucide-angular'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideSweetAlert2(),

    importProvidersFrom(
      LucideAngularModule.pick({
        Home, History, SchoolIcon, Clock10, Calendar, X, SaveIcon, Eye, BookOpen, SearchXIcon,Filter,  AlertCircle, Search, Grid, IdCard, Edit, GraduationCap, Layers, Menu,LogOut,Settings,Users,FileText,User,ChevronLeft,ChevronRight,Wallet,Edit2,Trash2, ChevronDown, ChevronUp, List,Plus
      })
    ),
    
  ],
};
