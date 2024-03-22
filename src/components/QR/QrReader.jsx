import {Html5QrcodeScanner} from 'html5-qrcode';
import { useEffect, useState } from 'react';

export const QrReader = () => {
    const [data,setData]=useState(null)
    useEffect(()=>{
        const scanner=new Html5QrcodeScanner('reader', { fps: 10, qrbox: 250 }, true)
        scanner.render(success,error)
        function success(data){
            scanner.clear()
            setData(data)
        }
        function error(error){
            console.warn(error)
        }
    },[])
   
  return (
    <>
    <div>QrReader</div>
    {data?<div>Success :<a href={`http://${data}`}>{data}</a></div>:null}
    <div id="reader"></div>
    </>
  )
}
