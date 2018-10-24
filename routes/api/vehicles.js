const isMake = require("../../validations/is-make");
const express = require("express");
const passport = require("passport");
const router = express.Router();
const validateVehicle = require('../../validations/vehicles');
const Vehicle = require("../../models/Vehicle");


router.post(
  "/addoffline",
  (req, res) => {
    const { errors, isValid } = validateVehicle(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    } else {
      const newVehicle = new Vehicle({
        name: req.body.name,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        hwyMpg: req.body.hwyMpg,
        cityMpg: req.body.cityMpg,
        tankSize: req.body.tankSize
      });
      newVehicle.maxRouteLength =
        ((newVehicle.hwyMpg + newVehicle.cityMpg) / 2) * newVehicle.tankSize;
    
      if(req.user){
           newVehicle.owner = req.user.id
      }
        newVehicle.save().then(vehicle => res.json(vehicle));
    }
  }
);

router.post(
  "/addonline",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateVehicle(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    } else {
      const newVehicle = new Vehicle({
        name: req.body.name,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        hwyMpg: req.body.hwyMpg,
        cityMpg: req.body.cityMpg,
        tankSize: req.body.tankSize
      });
      newVehicle.maxRouteLength =
        ((newVehicle.hwyMpg + newVehicle.cityMpg) / 2) * newVehicle.tankSize;

      if (req.user) {

        newVehicle.owner = req.user.id;
        debugger;
        // console.log(newVehicle.owner);
        
         let idx = req.user.vehicles.length;
         req.user.vehicles[idx] = newVehicle;
        // console.log(`req.user is: ${req.user}`);
        //User.findOneAndUpdate({username: req.username}, req.user, {new: true});

        let owner = await User.findOne({_id: req.user._id});
        console.log(owner);
        owner.vehicles.push(newVehicle);
          debugger;
        owner = await owner.save();
        console.log(owner.vehicles.length);
        
        

             debugger;
        //   console.log(req.user.vehicles);
        //   console.log(`username: ${req.user.username}`)
        //   User.findOne({ _id: req.user._id })
        // //   .populate("vehicles")
        //   .exec( (err, user) => {
        //       debugger;
        //       console.log(err);
        //       user.vehicles.push(newVehicle)
       
        
        //   });
         
     
        // console.log(`new user: ${newUser}`);
          newVehicle
              .save()
              .then(vehicle => res.json(vehicle));
       
      }
      
    }
  }
);

//get one vehicle, may need to nest under a user?
//Team assemble!
router.get('/:id', (req, res) => {
    Vehicle.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(404).json({carnotfound: "No such vehicle"}));
    //err is just res like in the old thunktions
});


module.exports = router;