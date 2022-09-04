import { useEffect, useState } from 'react'

export const useFetch= (url) => {
  
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => setError('error in the server'))
      .finally(() => setLoading(false))

  }, [url])

    return {data, error, loading}
}
