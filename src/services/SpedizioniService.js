import ApiService from './ApiService'


export async function apiGetTrackingSpedizione(id) {
    return ApiService.fetchData({
        url: `/spedizioni/tracking/${id}`,
        method: 'get',
    })
}

export async function apiGetSpedizioni(params) {
    return ApiService.fetchData({
        url: '/spedizioni/spedizioni-filter',
        method: 'get',
        params,
    })
}

export async function apiGetSpedizione(id) {
    return ApiService.fetchData({
        url: `/spedizioni/spedizione/${id}`,
        method: 'get',
    })
}

export async function apiGetSpedizioniClienti(params) {
    return ApiService.fetchData({
        url: '/spedizioni/spedizioni-filter-clienti',
        method: 'get',
        params,
    })
}

export async function apiGetSpedizioniClientiArchiviate(params) {
    return ApiService.fetchData({
        url: '/spedizioni/spedizioni-filter-clienti-archiviate',
        method: 'get',
        params,
    })
}

export async function apiInsertSpedizioni(data) {
    return ApiService.fetchData({
        url: '/spedizioni',
        method: 'post',
        data,
    })
}

export async function apiUpdateSpedizioni(data, params) {
    return ApiService.fetchData({
        url: `/spedizioni/${params}`,
        data,
        method: 'put'
    })
}

export async function apiDeleteSpedizioni(id) {
    return ApiService.fetchData({
        url: `/spedizioni/${id}`,
        method: 'delete'
    })
}

export async function apiGetTrackingSpedizioniDetails(params) {
    return ApiService.fetchData({
        url: '/spedizioni/spedizioni-details',
        method: 'get',
        params,
    })
}

export async function apiDeleteSpedizioniTracking(id) {
    return ApiService.fetchData({
        url: `/spedizioni/tracking/${id}`,
        method: 'delete'
    })
}

export async function apiInsertSpedizioniTracking(data) {
    return ApiService.fetchData({
        url: '/spedizioni/tracking',
        method: 'post',
        data,
    })
}