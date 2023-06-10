const UserDetail= require('../models/dish_schema')
const axios = require('axios');
const token = 'ab4086ecd47c568d5ba5739d4078988f'; // Replace with your actual token
const apiUrl = 'https://dev.pixelsoftwares.com/api.php'; // Replace with the API URL

exports.createUserDetails= async (req, res)=>{
    const {
        symbol,
        bidPrice,
        bidQty,
        askPrice,
        askQty,
        time
    }= req.body;

    

    const thirdPartyapi=()=>{
      // Request payload
      const requestData = {
        symbol: symbol
      };

      // Set the authorization header with the token
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      axios.post(apiUrl, requestData, config)
        .then(response => {
          // Handle the response data
          console.log('Response:', response.data);
        })
        .catch(error => {
          // Handle the error
          console.error('Error:', error);
        });
    }
    let response=thirdPartyapi()

    // const UserdetailData= await Userdetail.create({
    //   symbol: response.symbol,
    //   bidPrice: response.bidPrice,
    //   bidQty: response.bidQty,
    //   askPrice: response.askPrice,
    //   askQty: response.askQty,
    //   time: response.time
    // })
    
    try{
      const UserdetailData= await UserDetail.create({
        symbol,
        bidPrice,
        bidQty,
        askPrice,
        askQty,
        time
      })
      return res.status(200).send({
        message: "create successfully!", data: UserdetailData
      })
    }
    catch(err){
      res.status(500).send({
        message: err.message || "Some error occurred while creating the UserdetailData."
      });
    }
}



exports.getUserList= async (req,res)=>{
    try{
      const UserdetailData= await UserDetail.find()
      console.log("UserdetailData", UserdetailData)
      if(UserdetailData){
        res.status(200).send({message: "get all UserdetailData list", data: UserdetailData})
      }
    }catch(err){
      console.log(err.message)
      res.status(400).send({message: "error", error: err.message})
    }
  }


exports.getUserDetails= async (req, res)=>{
    try{
        console.log(req.params.id)
        const restData= await UserDetail.findById({
            _id: req.params.id
        })
        console.log("restData", restData)
        if (!restData || restData==undefined){ 
            return  res.send("not found restaurant")
        }
        return res.status(200).send({
            message:"user resitered save data", 
            data: restData
        })
    }
    catch(err){
        console.log(err.message)
    }   
}

exports.editUserDetails= async (req, res)=>{
    try{
        
        const product= await UserDetail.find({_id: req.params.id});
        await product.save({validateBeforeSave: false});
        const updateData= await UserDetail.findByIdAndUpdate({_id: req.params.id}, {
            $set: req.body
        })
        console.log("updateData", updateData)
        return res.send({status: "update data successfully! ", "result": updateData})
    }
    catch(err){
        console.log(err.message)
    }
}