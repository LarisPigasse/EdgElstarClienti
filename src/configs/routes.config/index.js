import React from 'react'
import authRoute from './authRoute'
import { CLIENTE} from '../../constants/roles.constant'

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
        path: '/tracking/spedizioni',
        component: React.lazy(() => import('views/tracking/spedizioni')),
        authority: [CLIENTE],
    },
    {
        key: 'tracking.archivio',
        path: '/tracking/archivio',
        component: React.lazy(() => import('views/tracking/archivio')),
        authority: [CLIENTE],
    },                      
]
