import {useState} from "react";
import axios from "axios";
import uuid from "uuid";


function useAxios(){
  const [state, setState] = useState([])

  const addAxiosCall = async (url) => {
    const response = await axios.get(url);
    setState(state => [...state, {...response.data, id: uuid()}])
  }

  return [state, addAxiosCall];
}

export function useFlip(initialValue=true) {
  const [state, setState] = useState(initialValue)
  const toggler = () => {
    setState(state => !state)
  }
  return [state, toggler];
}

export default useAxios;

