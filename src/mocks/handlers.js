import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('/user', () => {
        return HttpResponse(200, { username: 'admin' })
    }),
    http.get('/permissions', () => {
        return HttpResponse(200, { permissions: ['read', 'write'] })
    })
]
