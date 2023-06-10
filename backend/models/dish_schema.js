const mongoose=require('../database/db');
const Schema = mongoose.Schema

var UserSchema=  new Schema({
    symbol: {
       type: String,
    },
    bidPrice: {
        type: String,
     },
     bidQty: {
         type: Number,
     },
     askPrice: {
        type: String,
    },
     askQty: {
         type: Number,
     },
    time: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true
    },    
}, {
    timestamps: true
});

const UserDetail=mongoose.model('userdetail', UserSchema);
module.exports= UserDetail;