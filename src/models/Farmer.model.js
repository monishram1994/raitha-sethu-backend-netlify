const mongoose= require('mongoose');
const Schema = mongoose.Schema;

let Farmer = new Schema({
    Name:{
        type:String
    },
    FatherName:{
        type:String
    },
    Address: {
        type:String
    },
    State:{
        type:String
    },
    District:{
        type:String
    },
    Taluk:{
        type:String
    },
    City: {
        type:String
    },
    Pincode: {
        type:Number
    },
    MobileNo: {
        type:Number
    },
    AlternateNo: {
        type:Number
    },
     PasswordPIN: {
        type:String
    },
    LandSurveyNO: {
        type:String
    },
    PlotArea: {
        type:String
    },
    TypeofSoil: {
        type:String
    },
    TypeofCrop: {
        type:String
    },
    GeographicalLocation: {
        type:String
    },
    CropLandAddress: {
        type:String
    }
});


module.exports = mongoose.model('Farmer',Farmer);