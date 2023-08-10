import React from 'react'
import authRoute from './authRoute'

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
        authority: [],
    }, 
    {
        key: 'tracking.update',
        path: '/tracking/aggiorna-spedizioni',
        component: React.lazy(() => import('views/tracking/AggiornaSpedizioni')),
        authority: [],
    },    
    {
        key: 'crm.dashboard',
        path: '/crm/dashboard/',
        component: React.lazy(() => import('views/crm/Dashboard')),
        authority: [],
    }, 
    {
        key: 'crm.calendario',
        path: '/crm/calendario/',
        component: React.lazy(() => import('views/crm/Calendario')),
        authority: [],
    },
    {
        key: 'crm.clienti',
        path: '/crm/clienti/',
        component: React.lazy(() => import('views/crm/Clienti')),
        authority: [],
    },    
    {
        key: 'crm.mailbox',
        path: '/crm/mailbox/',
        component: React.lazy(() => import('views/crm/Mailbox')),
        authority: [],
    },
    {
        key: 'crm.comunica',
        path: '/crm/comunica/',
        component: React.lazy(() => import('views/crm/Comunica')),
        authority: [],
    },             
    {
        key: 'logistica.corrieri',
        path: '/logistica/corrieri/',
        component: React.lazy(() => import('views/logistica/Corrieri')),
        authority: [],
    },
    {
        key: 'logistica.magazzino',
        path: '/logistica/magazzino/',
        component: React.lazy(() => import('views/logistica/Magazzino')),
        authority: [],
    },           
    {
        key: 'admin.documenti',
        path: '/amministrazione/documenti/',
        component: React.lazy(() => import('views/amministrazione/Documenti')),
        authority: [],
    },
    {
        key: 'admin.pagamenti',
        path: '/amministrazione/pagamenti/',
        component: React.lazy(() => import('views/amministrazione/Pagamenti')),
        authority: [],
    },
    {
        key: 'sistema.configurazione',
        path: '/sistema/configurazione/',
        component: React.lazy(() => import('views/sistema/Configurazione')),
        authority: [],
    },
    {
        key: 'sistema.account',
        path: '/sistema/account/',
        component: React.lazy(() => import('views/sistema/Account')),
        authority: [],
    }, 
    {
        key: 'sistema.operatori',
        path: '/sistema/operatori/',
        component: React.lazy(() => import('views/sistema/Operatori')),
        authority: [],
    },    
    {
        key: 'sistema.statistiche',
        path: '/sistema/statistiche/',
        component: React.lazy(() => import('views/sistema/Statistiche')),
        authority: [],
    }, 
    {
        key: 'sistema.tabelle',
        path: '/sistema/tabelle/',
        component: React.lazy(() => import('views/sistema/Tabelle')),
        authority: [],
    },                  
]
