import ApiService from './ApiService'

export async function apiGetSistemaOperatori(params) {
    return ApiService.fetchData({
        url: '/operatori/getOperatoriFilter',
        method: 'get',
        params,
    })
}

export async function apiInsertOperatori(data) {
    return ApiService.fetchData({
        url: '/operatori',
        method: 'post',
        data,
    })
}

export async function apiUpdateOperatori(data, params) {
    return ApiService.fetchData({
        url: `/operatori/${params}`,
        data,
        method: 'put'
    })
}

export async function apiDeleteOperatori(id) {
    return ApiService.fetchData({
        url: `/operatori/${id}`,
        method: 'delete'
    })
}

export async function apiGetSistemaOperatoriDetails(params) {
    return ApiService.fetchData({
        url: '/sales/orders-details',
        method: 'get',
        params,
    })
}

