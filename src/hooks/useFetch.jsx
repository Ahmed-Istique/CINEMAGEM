import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (endpoint) => {
    // storing data
    const [data, setData] = useState([])
    const [loading, setLoading] = useState()


    const fetchData = async () => {
        try {
            const response = await axios.get(endpoint)
            setLoading(true)
            setData(response.data.results)
            setLoading(false)
            // console.log("responseNow playing", response.data.results)
            // console.log("responseNow playing1", response.data)
            console.log("responseNow playing2", response)
        } catch (error) {
            console.error("error getting data")
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { data, loading }
}

export default useFetch;
