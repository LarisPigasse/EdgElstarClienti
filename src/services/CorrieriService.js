import ApiService from './ApiService'

export async function apiGetLogisticaCorrieri(params) {
    return ApiService.fetchData({
        url: '/corrieri/corrieri-filter',
        method: 'get',
        params,
    })
}

export async function apiInsertCorrieri(data) {
    return ApiService.fetchData({
        url: '/corrieri',
        method: 'post',
        data,
    })
}

export async function apiUpdateCorrieri(data, params) {
    return ApiService.fetchData({
        url: `/corrieri/${params}`,
        data,
        method: 'put'
    })
}

export async function apiDeleteCorrieri(id) {
    return ApiService.fetchData({
        url: `/corrieri/${id}`,
        method: 'delete'
    })
}

export async function apiGetLogisticaCorrieriDetails(params) {
    return ApiService.fetchData({
        url: '/corrieri/corrieri-details',
        method: 'get',
        params,
    })
}

