import ApiService from './ApiService'

export async function apiGetSistemaOperatori(params) {
    console.log(params)
    return ApiService.fetchData({
        url: '/getOperatoriFilter',
        method: 'get',
        params,
    })
}

export async function apiDeleteSistemaOperatori(data) {
    return ApiService.fetchData({
        url: '/sistema/operatori/delete',
        method: 'delete',
        data,
    })
}

export async function apiGetSistemaOperatoriDetails(params) {
    return ApiService.fetchData({
        url: '/sales/orders-details',
        method: 'get',
        params,
    })
}





