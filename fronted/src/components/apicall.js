import { useEffect, useState } from 'react';
import '../App.css'
import axios from "axios"

const ShowPricePage =  async() => {

    const [apidata, setApidata] = useState([]);

  const getlistTable= async()=>{
    const response = await axios.get("/getuserList");
    let data=await response.json()
    console.log("ssssss", await response.json())
    setApidata(data)
  }

  useEffect(()=>{
    getlistTable()
  }, [])

    return (
        <>  
        {console.log("apidata", apidata)}
            <center><h1>Show Price Data</h1></center><br />
            <div className="">
        {
            apidata?apidata.map((rest => {
            {console.log("rest", rest)}
            return (
                <>
                <div className="row">
                    <h2 className="card-title">{rest.word}</h2>
                </div>
                </>
                )}
            ))
            : ""
        }                
    </div>
        </>
    );
};

export default ShowPricePage;