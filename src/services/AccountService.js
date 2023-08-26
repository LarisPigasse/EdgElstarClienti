import ApiService from './ApiService'

export async function apiGetSistemaAccount(params) {
    return ApiService.fetchData({
        url: '/account/account-filter',
        method: 'get',
        params,
    })
}

export async function apiGetAccount() {
    return ApiService.fetchData({
        url: '/account',
        method: 'get'
    })
}

export async function apiInsertAccount(data) {
    return ApiService.fetchData({
        url: '/account',
        method: 'post',
        data,
    })
}

export async function apiUpdateAccount(data, params) {
    return ApiService.fetchData({
        url: `/account/${params}`,
        data,
        method: 'put'
    })
}

export async function apiDeleteAccount(id) {
    return ApiService.fetchData({
        url: `/account/${id}`,
        method: 'delete'
    })
}
