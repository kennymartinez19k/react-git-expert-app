import { useEffect, useState } from "react"
import { GetGif } from "../Functions/GetGifs"

export const useFecthGif = (category) => {
  const [state, setState] = useState({
      data: [],
      loading: true
  })

  useEffect(() => {
      GetGif(category).then(x => {
        setState({
            data: x,
            loading: false
        })
      })
  }, [category]) 

  return state
}
