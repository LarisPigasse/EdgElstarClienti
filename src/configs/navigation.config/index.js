import {
    NAV_ITEM_TYPE_ITEM,
} from 'constants/navigation.constant'

import {CLIENTE} from '../../constants/roles.constant'

const navigationConfig = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [CLIENTE],
        subMenu: [],
        colore: ''
    },

    {
        key: 'tracking',
        path: '/tracking',
        title: 'Spedizioni',
        translateKey: 'nav.tracking',
        icon: 'monitor',
        colore: 'text-sky-500',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [CLIENTE],
        subMenu: [],
    },       

]

export default navigationConfig
