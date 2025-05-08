import TimeZone from "./Components/TimeZone"
import useFetch from "../Hooks/useFetch"

function Time({value}) {

    const url = `https://timeapi.io/api/time/current/zone?timeZone=${value}`
    const {data, loading, fetch} = useFetch(url)

    console.log(data)
  return (
    <>
    </>
  )
}

export default Time
