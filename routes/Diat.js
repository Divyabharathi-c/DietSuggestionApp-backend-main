import express from "express";
import {
  WeightLoss,
  WeightGain,
  TamilWeightGain,
  TamilWeightLoss,
} from "../db-utils/module.js";
const DiatRouter = express.Router();

DiatRouter.post("/weightloss", async function (req, res) {
  try {
    const{day,
      mealTime,
      food,
      calories,
      protein,
      carbs,
      fat} = req.body
    const appUser = new WeightLoss({day,
      mealTime,
      food,
      calories,
      protein,
      carbs,
      fat} );
      await appUser.save();
      res.status(201).send({msg: "document added"});
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error occuerred while fetching users" });
  }
});

DiatRouter.get("/weightloss", async function (req, res) {
  try {
    const appUser = await WeightLoss.find();
    if (appUser) {
      res.send(appUser);
    } else {
      res.send("error data");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error occuerred while fetching users" });
  }
});

DiatRouter.post("/weightgain", async function (req, res) {
  try {
    const{day,
      mealTime,
      food,
      calories,
      protein,
      carbs,
      fat} = req.body
    const appUser = await WeightGain({
      day,
      mealTime,
      food,
      calories,
      protein,
      carbs,
      fat
    });
await appUser.save();
res.status(201).send({msg:"data added"});
   
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error occuerred while fetching users" });
  }
});

DiatRouter.get("/weightgain", async function (req, res) {
  try {
    const appUser = await WeightGain.find();

    if (appUser) {
      res.send(appUser);
    } else {
      res.send("error data");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error occuerred while fetching users" });
  }
});

DiatRouter.post("/tamilweightloss", async function (req, res) {
  try {
    const{day,
      mealTime,
      food,
      calories,
      protein,
      carbs,
      fat} = req.body
    const appUser = new WeightLoss({day,
      mealTime,
      food,
      calories,
      protein,
      carbs,
      fat} );
      await appUser.save();
      res.status(201).send({msg: "document added"});
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error occuerred while fetching users" });
  }
});

DiatRouter.get("/tamilweightloss", async function (req, res) {
  try {
    const appUser = await TamilWeightLoss.find();
    if (appUser) {
      res.send(appUser);
    } else {
      res.send("error data");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error occuerred while fetching users" });
  }
});

DiatRouter.post("/weightgain", async function (req, res) {
  try {
    const{day,
      mealTime,
      food,
      calories,
      protein,
      carbs,
      fat} = req.body
    const appUser = await WeightGain({
      day,
      mealTime,
      food,
      calories,
      protein,
      carbs,
      fat
    });
await appUser.save();
res.status(201).send({msg:"data added"});
   
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error occuerred while fetching users" });
  }
});

DiatRouter.get("/tamilweightgain", async function (req, res) {
  try {
    const appUser = await TamilWeightGain.find();

    if (appUser) {
      res.send(appUser);
    } else {
      res.send("error data");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error occuerred while fetching users" });
  }
});

export const diet = DiatRouter;
