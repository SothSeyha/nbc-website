import api from './axios'

export async function fetchItems() {
  const response = await api.get('/posts')
  return response.data
}

export async function fetchItemById(id: string | number) {
  const response = await api.get(`/posts/${id}`)
  return response.data
}