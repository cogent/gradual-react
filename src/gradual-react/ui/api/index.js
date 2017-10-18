
const api = {
  fetchComponents: () => {
    return fetch('http://localhost:8080')
    .then((response) => response.json())
  }
}

export default api