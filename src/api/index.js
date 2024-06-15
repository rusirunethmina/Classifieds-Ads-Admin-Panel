// /* eslint-disable prettier/prettier */
// import request from '@/utils/request'

// export default (method, path, data) => {
//   return request({
//     url: `/api/${path}`,
//     method,
//     data,
//   })
// }

import request from '../utils/request';
export default {
    login(params) {
        return request({
            url: '/V1/login',
            method: 'post',
            data: params,
            mock: false
        })
    },
    logout() {
        return request({
            url: '/V1/logout',
            method: 'post',
            data: params,
            mock: false
        })
    },
    getAdsList() {
        return request({
            url: '/V1/admin/ads/list',
            method: 'get',
            data: {},
            mock: true
        })
    },
    getAdsMoreDetails(params) {
        return request({
            url: '/V1/admin/ads/show',
            method: 'post',
            data: params,
            mock: true
        })
    },
    changeAdsStatus(params) {
        return request({
            url: '/V1/admin/ads/changeStatus',
            method: 'post',
            data: params,
            mock: false
        })
    },
}
