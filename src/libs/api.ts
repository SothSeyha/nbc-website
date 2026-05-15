import api from './axios'

export async function fetchItems(endpoint: string) {
  const response = await api.get(endpoint)
  return response.data.data
}

export async function fetchItemById(id: string | number) {
  const response = await api.get(`/posts/${id}`)
  return response.data
}