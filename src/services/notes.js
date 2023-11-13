import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const noteService = {
  async getAll() {
    const response = await axios.get(baseUrl)
    return response.data
  },
  async createNew(content) {
    const object = { content, important: false }
    const response = await axios.post(baseUrl, object)
    return response.data
  }
}

export default noteService