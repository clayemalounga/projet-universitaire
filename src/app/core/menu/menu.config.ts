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
                label: 'create a user',
                route: '/admin/users/create',
                icon: 'plus'
            },
        ]
    },
    // les modules de bases.
    {
        label: 'Etudiants',
        icon: 'graduation-cap',
        open: false,
        children: [
            {
                label: 'list student',
                route: '/admin/students/list',
                icon: 'list'
            }
        ]
    },
    {
        label: 'Classes',
        icon: 'school-icon',
        route: '/admin/classes/list',
    },
    {
        label: 'Filiere',
        icon: 'layers',
        route:'/admin/filieres/list'
        
    },
    {
        label: 'Annee Academique',
        icon: 'calendar',
        route:'/admin/academic-years/list'
    },
    {
        label: 'Matieres',
        icon: 'book-open',
        children: [
            {
                label: 'list des matieres',
                icon :'plus',
                route: '/admin/cours/list'
            }
        ]
    },
    {
        label: 'Insriptions',
        icon: 'edit',
        route: '/admin/inscription',
        // open: false,
        // children: [
        //     { 
        //         label: 'list',
        //         route: '/admin/settings/list',
        //         icon: 'list'
        //     }
        // ]
    },
    {
        label: 'Comptabilite',
        icon: 'wallet',
        open: false
    },

    {
        label: 'Cates etudiants',
        icon: 'id-card',
        open: false
    },

    {
        label: 'Settings',
        icon: 'settings',
        open: false,
        children: [
            { 
                label: 'Configurations',
                route: '/admin/configuration/associations',
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