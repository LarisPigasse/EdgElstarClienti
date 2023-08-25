import React from 'react'
import authRoute from './authRoute'
import { ADMIN, ROOT, CLIENTE, OPERATORE } from '../../constants/roles.constant'

export const publicRoutes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: React.lazy(() => import('views/Home')),
        authority: [],
    },
    {
        key: 'tracking.spedizioni',
        path: '/tracking/spedizioni/',
        component: React.lazy(() => import('views/tracking/Spedizioni')),
        authority: [ADMIN,OPERATORE],
    },
    {
        key: 'tracking.spedizioni.clienti',
        path: '/tracking/spedizioni-clienti',
        component: React.lazy(() => import('views/tracking/SpedizioniClienti')),
        authority: [],
    },
    {
        key: 'tracking.update',
        path: '/tracking/aggiorna-spedizioni',
        component: React.lazy(() => import('views/tracking/AggiornaSpedizioni')),
        authority: [ADMIN,OPERATORE],
    },
    {
        key: 'crm.dashboard',
        path: '/crm/dashboard/',
        component: React.lazy(() => import('views/crm/Dashboard')),
        authority: [ADMIN,OPERATORE],
    }, 
    {
        key: 'crm.calendario',
        path: '/crm/calendario/',
        component: React.lazy(() => import('views/crm/Calendario')),
        authority: [ADMIN,OPERATORE],
    },
    {
        key: 'crm.clienti',
        path: '/crm/clienti/',
        component: React.lazy(() => import('views/crm/Clienti')),
        authority: [ADMIN,OPERATORE],
    },    
    {
        key: 'crm.mailbox',
        path: '/crm/mailbox/',
        component: React.lazy(() => import('views/crm/Mailbox')),
        authority: [ADMIN,OPERATORE],
    },
    {
        key: 'crm.comunica',
        path: '/crm/comunica/',
        component: React.lazy(() => import('views/crm/Comunica')),
        authority: [ADMIN,OPERATORE],
    },             
    {
        key: 'logistica.corrieri',
        path: '/logistica/corrieri/',
        component: React.lazy(() => import('views/logistica/Corrieri')),
        authority: [ADMIN,OPERATORE],
    },
    {
        key: 'logistica.magazzino',
        path: '/logistica/magazzino/',
        component: React.lazy(() => import('views/logistica/Magazzino')),
        authority: [ADMIN,OPERATORE],
    },           
    {
        key: 'admin.documenti',
        path: '/amministrazione/documenti/',
        component: React.lazy(() => import('views/amministrazione/Documenti')),
        authority: [ADMIN,OPERATORE],
    },
    {
        key: 'admin.pagamenti',
        path: '/amministrazione/pagamenti/',
        component: React.lazy(() => import('views/amministrazione/Pagamenti')),
        authority: [ADMIN,OPERATORE],
    },
    {
        key: 'sistema.configurazione',
        path: '/sistema/configurazione/',
        component: React.lazy(() => import('views/sistema/Configurazione')),
        authority: [ADMIN,OPERATORE],
    },
    {
        key: 'sistema.account',
        path: '/sistema/account/',
        component: React.lazy(() => import('views/sistema/Account')),
        authority: [ADMIN,OPERATORE],
    }, 
    {
        key: 'sistema.operatori',
        path: '/sistema/operatori/',
        component: React.lazy(() => import('views/sistema/Operatori')),
        authority: [ADMIN,OPERATORE],
    },    
    {
        key: 'sistema.statistiche',
        path: '/sistema/statistiche/',
        component: React.lazy(() => import('views/sistema/Statistiche')),
        authority: [ADMIN,OPERATORE],
    }, 
    {
        key: 'sistema.tabelle',
        path: '/sistema/tabelle/',
        component: React.lazy(() => import('views/sistema/Tabelle')),
        authority: [ADMIN,OPERATORE],
    },                  
]
