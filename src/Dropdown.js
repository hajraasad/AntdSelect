import React from 'react';
import { Select } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { makelist } from './Common';
import { getCities, getCountries, getCountryFlag } from './NetworkRequest';

const MAX_COUNT = 1;
const Dropdown = () => {
  const [countries,setCountries]=useState([])
  const [countryFlag,setCountryFlag]=useState([])
  const [cities,setCities]=useState([])
  const [searchValue,setSearchValue]=useState(makelist(countries)[0])
  const [open,setOpen]=useState(false)

  useEffect(() => {
    fetchData();
    fetchDataFlag();
  },[]);

  const fetchCityData = async (payload) => {
    const response = await getCities(payload).catch((error)=>{
      console.log(error)
    });
    if (response) {
      if (response) {
        console.log(response)
        setCities(response.data.data);
      } else {
        console.log("error")
      }
    }
    return {fetchData };
  };

  const fetchData = async () => {
    const response = await getCountries().catch((error)=>{
      console.log(error)
    });
    if (response) {
      if (response) {
        console.log("country",response.data.data)
        setCountries(response.data.data);
      } else {
        console.log("error")
      }
    }
    return {fetchData };
  };

  const fetchDataFlag = async ()=>{
    const response = await getCountryFlag().catch((error)=>{
      console.log(error)
    });
    if(response)
    {
      console.log("flag",response)
      setCountryFlag(response.data.data)
    }
    else{
      console.log("error")
    }
    return {fetchDataFlag}
  }

  const handleChange=(option)=>{
    console.log(option)
    let text = option.toString();
    fetchCityData({
      "country": text
  })
  }

  // const display=(flag)=>{
  //       return(
  //           <div>
  //               <img src={`${flag}`} alt="img"/>
  //           </div>
  //       )
  //   }

  return (
    <div>
    <Select
      mode="multiple"
      maxCount={MAX_COUNT}
      value={searchValue}
      style={{
        width: '20%',
      }}
      onChange={(option) => {
        handleChange(option)
      }}
      placeholder="Please select Country"
      open={!open}
      //options={countries ? makelist(countries,countryFlag) : []}
      // dropdownRender={(menu) => (
      //   <div>
    
      //     {menu}
      //   </div>
      // )}
    >
      {makelist(countries,countryFlag).map((item) => (
        <Select.Option key={item.value} value={item.value}>
          {item.label}
          <img src={item.flag} style={{height:20,width:20}}/>
        </Select.Option>
      ))}
      </Select>


    <Select
      mode="multiple"
      maxCount={MAX_COUNT}
      style={{
        width: '20%',
      }}
      placeholder="cities"
      options={cities ? makelist(cities) : []}
    />
    </div>
  );
}
export default Dropdown;