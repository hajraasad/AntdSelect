import axios from 'axios'

export const getCountries=()=> {
    return new Promise((resolve,reject)=>{
    axios.get('https://countriesnow.space/api/v0.1/countries/currency')
    .then((res) => {
      resolve(res)
    })
    .catch((error) =>{
      reject(error)
    })
  })
  }


export const getCities=(payload)=> {
    return new Promise((resolve,reject)=>{
    axios.post('https://countriesnow.space/api/v0.1/countries/cities',payload)
    .then((res) => {
      resolve(res)
    })
    .catch((error) =>{
      reject(error)
    })
  })
  }

  export const getCountryFlag=()=> {
    return new Promise((resolve,reject)=>{
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
    .then((res) => {
      resolve(res)
    })
    .catch((error) =>{
      reject(error)
    })
  })
  }


