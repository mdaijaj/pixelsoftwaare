import Errorpage from './error';
import {Route, Routes} from 'react-router-dom';
import HomePage from './home'
import TableData from './task2';
import { useEffect, useState } from 'react';
import axios from "axios"
import ShowPricePage from './apicall';

const Routing=()=>{
  const [sortdata, setSortdata] = useState([])

    const getlistTable= async()=>{
      const baseurl= "https://randomuser.me/api?results=30"
      const response = await axios.get(`${baseurl}`);
      let responseData= await response.data.results
      console.log("responseData", responseData)
      let mainarr=[];

      await responseData.map((item)=>{
        let obj={
          first: item.name.first,
          last: item.name.last,
          email: item.email,
          gender: item.gender,
          city: item.location.city,
          state: item.location.state,
          country: item.location.country,
          postcode: item.location.postcode,
          phone: item.phone,
          latitude: item.location.coordinates.latitude,
          longitude: item.location.coordinates.longitude,
          profile_photo: item.picture.medium
        }
        mainarr.push(obj)
      })
      setSortdata(mainarr)
  }

  useEffect(()=>{
    getlistTable()
  }, [])

  return(
    <>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />  
          <Route exact path="/bid_price" element={<ShowPricePage/>} />  
          <Route path="/error" element={<Errorpage/>} />
          <Route path="/table_data" element={<TableData products= {sortdata} />} />
        </Routes>
    </>
    )
}


export default Routing;