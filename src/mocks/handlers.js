import { http, HttpResponse, delay } from 'msw'

export const handlers = [
    http.get('/user', async () => {
        await delay(2000)
        return HttpResponse.json({ name: 'John Doe' })
    }),
    http.get('/permissions', async () => {
        await delay(2000)
        return HttpResponse.json({ permissions: ['read', 'write'] })
    })
]
