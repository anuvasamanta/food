import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { endUrl } from '../../api/api';
import axiosInstance from '../../api/axiosInstance'
function SingelItems() {
  let api = endUrl.category;
 let {id}=useParams();
 console.log("item id",id);
 
 let [item,setItem]=useState();
 let fetchAll=()=>{
  axiosInstance.get(`${api}/${id}`)
  .then(res=>{
    console.log("response",res);
    
  })
  .catch(err=>{
    console.log("error",err);
    
  })
 }
 useEffect(()=>{
  fetchAll();
 },[api,id])
  return (
    <div>SingelItems</div>
  )
}

export default SingelItems