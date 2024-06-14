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
    getAdsList() {
        return request({
            url: '/V1/admin/ads/list',
            method: 'get',
            data: {},
            mock: true
        })
    },
    changeAdsStatus(params) {
        return request({
            url: '/V1/admin/ads/status/change',
            method: 'post',
            data: params,
            mock: false
        })
    },
}
