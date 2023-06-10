const express= require('express')
const router=express()
const userController= require('../controller/index')

//routes for Dish crude
router.post('/createuserdetails', userController.createUserDetails)
router.get('/getuserList', userController.getUserList)
router.get('/getUserDetails/:id', userController.getUserDetails)
router.put('/editUserDetails/:id', userController.editUserDetails)


module.exports = router;