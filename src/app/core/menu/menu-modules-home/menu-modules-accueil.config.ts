import { MenuModuleHome } from "./menu-moduls-accueil.model";

export const MenuModulesAccueil: MenuModuleHome[] = [
    {
        title: 'Etudiants',
        description: 'Gestion des fiches étudiants',
        link: '/admin/students/list',
        icon: 'graduation-cap',
        color: 'text-blue-600 bg-blue-50'
    },
    {
        title: 'Classes',
        description: 'Organisation des classes',
        icon: 'list',
        link: '/admin/classes/list',
        color: 'text-green-600 bg-green-50'
    },
    {
        title: 'Filières',
        description: 'Gestion des filières académiques',
        icon: 'layers',
        link: '/admin/filieres/list',
        color: 'text-yellow-600 bg-yellow-50'
    },
    {
        title: 'Cours',
        description: 'Gestion des matières',
        icon: 'book-open',
        link: '/admin/cours/list',
        color: 'text-indigo-600 bg-indigo-50'
    },
    {
        title: 'Inscriptions',
        description: 'Suivi des inscriptions académiques',
        icon: 'edit',
        link: '/admin/inscriptions/list',
        color: 'text-pink-600 bg-pink-50'
    },
    {
        title: 'Comptabilité',
        description: 'Gestion des paiements et finances',
        icon: 'wallet',
        link: '/admin/comptabilite',
        color: 'text-purple-600 bg-purple-50'
    },
    {
        title: 'Cartes étudiants',
        description: 'Gestion et impression des cartes d’étudiants',
        icon: 'id-card',
        link: '/admin/cartes-etudiants',
        color: 'text-teal-600 bg-teal-50'
    }
];
