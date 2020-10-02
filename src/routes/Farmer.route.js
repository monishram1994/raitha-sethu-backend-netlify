const express = require('express');
const router = express.Router();
const FarmerSchema = require('../models/Farmer.model');

//ADMIN route
router.get('/', async (req, res) => {
    try {
        const farmer = await FarmerSchema.find();
        res.status(200).json(farmer);
    } catch (err) {
        res.status(400).send('Error ' + err)
    }
})

// search for particular user
router.get('/:id', async (req, res) => {
    try {
        const data = await FarmerSchema.findById(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).send('Error ' + err)
    }
});


//  Add first time user
router.post('/add', async (req, res) => {
    const mobilenoexisits = await farmer.findOne({MobileNUmber: req.body.MobileNUmber})
    if (mobilenoexisits) return  res.status(400).send('Famrer already exists');

    let farmer = new FarmerSchema(req.body);
    await farmer.save()
        .then(user => {
            res.status(200).json({ 'user': 'user added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});

// update second time registration
router.post('/update/:id', async (req, res) => {
    try {
        const farmer = await FarmerSchema.findById(req.params.id);
        if (!farmer) {
            res.status(404).send('data is not found');
        } else {
            farmer.Name = req.body.Name;
            farmer.FatherName = req.body.FatherName;
            farmer.Address = req.body.Address;
            farmer.City = req.body.City;
            farmer.State = req.body.State;
            farmer.District = req.body.District;
            farmer.Taluk = req.body.Taluk;
            farmer.Phone1 = req.body.Phone1;
            farmer.phone2 = req.body.Phone2;
            farmer.pincode = req.body.Pincode;
            farmer.LandSurveyNo= req.body.LandSurveyNo;
            farmer.PlotArea = req.body.PlotArea;
            farmer.TypeofSoil = req.body.TypeofSoil;
            farmer.TypeofCrop = req.body.TypeofCrop;
            farmer.GeographicalLocation = req.body.GeographicalLocation;
            farmer.CropLandAddress = req.body.CropLandAddress;
            
            

            FarmersData.save()
                .then(user => {
                    res.status(200).json('Farmer updated');
                })
                .catch(err => {
                    res.status(400).send("Check Fields");
                });
        }
    } catch (err) {
        res.status(400).send('Error ' + err)
    }
});


module.exports = router