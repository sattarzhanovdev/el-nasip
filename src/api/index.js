import axios from "axios";

export const API = {
  putValue: (val) => axios.put('/value.json', {value: val}),
  getValue: () => axios.get('/value.json/')
}