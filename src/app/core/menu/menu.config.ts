import { Settings } from "lucide-angular";
import { MenuItem } from "./menu.model";
import { listenerCount } from "process";

export const MENU_ITEMS: MenuItem[] = [

    // definition des elements 
    {
        label: 'Modules',
        icon: 'grid',
        route: '/admin/accueil'
    },
    {
        label: 'Utilisateurs',
        icon: 'users',
        open: false,
        children: [
            {
                label: 'list des users',
                route: '/admin/users/list',
                icon: 'list'
            },
            {
                label: 'create un user',
                route: '/admin/users/create',
                icon: 'plus'
            },
        ]
    },
    // les modules de bases.
    {
        label: 'Etudiants',
        icon: 'graduation-cap',
        route: '/admin/etudiants',
        open: false
    },
    {
        label: 'Classes',
        icon: 'users',
        route: '/admin/classes',
        open: false
    },
    {
        label: 'Filiere',
        icon: 'layers',
        route: '/admin/Filiers',
        open: false,
    },
    {
        label: 'Annee Academique',
        icon: 'calendar',
        route: '/admin/annee-academique',
        open: false
    },
    {
        label: 'Cours',
        icon: 'book-open',
        route: '/admin/cours'
    },
    {
        label: 'Insriptions',
        icon: 'edit',
        route: '/admin/inscription',
        open: false,
        children: [
            { 
                label: 'list',
                route: '/admin/settings/list',
                icon: 'list'
            }
        ]
    },
    {
        label: 'Comptabilite',
        icon: 'wallet',
        route: '/admin/comptabilite'
    },

    {
        label: 'Cates etudiants',
        icon: 'id-card',
        route: 'admin/cartes'
    },

    {
        label: 'Settings',
        icon: 'settings',
        open: false,
        route: '',
        children: [
            { 
                label: 'Roles',
                route: 'admin/settings/roles',
                icon: 'list'
            },
             { 
                label: 'Permissions',
                route: 'admin/settings/permissions',
                icon: 'list'
            }
        ]
    }

]