import { useEffect, useState } from "react"

function useFetch(url) {

    const [data,setData] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    
    useEffect(() => {
        const controller = new AbortController()

        const fetchProducts = async () => {
            setLoading(true)
            try{
                const response = await fetch (url, {signal: controller.signal});
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const result = await response.json();
                setLoading(false)
                setData(result)
            }catch (error){
                setLoading(false)
                setError(error.message)
            }
            
        }
        fetchProducts()

        return () => controller.abort()
    }, [url]);

    return { data, loading, error }
  }
  
  export default useFetch