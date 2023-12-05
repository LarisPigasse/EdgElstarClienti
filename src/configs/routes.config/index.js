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
        key: 'tracking',
        path: '/tracking/',
        component: React.lazy(() => import('views/tracking/Spedizioni')),
        authority: [CLIENTE],
    },                
]
