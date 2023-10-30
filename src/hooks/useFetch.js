import { useState } from "react"
import axios from "axios"

const useFetch = (baseUrl) => {

  const [infoApi, setInfoApi] = useState()

  // READ
  const getApi = (path) => {
    const url = `${baseUrl}${path}/`
    axios.get(url)
     .then (res => setInfoApi(res.data))
     .catch(err => console.log(err))

  }
  // CREATE
  const postApi = (path, data) => {
    const url = `${baseUrl}${path}/`
    axios.post(url, data)
     .then(res => {
        setInfoApi([...infoApi, res.data])
     })
     .catch(err => console.log(err))
  }
  // DELETE
  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`
    axios.delete(url, id)
     .then(res => {
        setInfoApi(infoApi.filter(e => e.id !== id))
     })
     .catch(err => console.log(err))
  }
  // UPDATE
  const updateApi = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`
    axios.put(url, data)
     .then(res => {
        setInfoApi(infoApi.map(e => e.id === id ? res.data : e))
     })
     .catch(err => console.log(err) )
  }

  return [ infoApi, getApi, postApi, deleteApi, updateApi ]
}

export default useFetch