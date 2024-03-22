import  { useEffect, useState } from 'react';
import QrReader from 'react-web-qr-reader';

const Example = () => {
    const [result, setResult] = useState({});
    const delay = 10;

    const previewStyle = {
      height: 250,
      width: 250,
    };
    const handleScan = (resultData) => {
        if (resultData) {
          setResult(resultData);
          console.log(resultData.data);
        }
      };
    
      const handleError = (error) => {
        console.log(error);
      };

  useEffect(()=>{
  


 
  },[]) 
  const {data}=result
  return (
    <>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{data}</p>
    </>
  );
};

export default Example;