const express = require("express")
const SymptomModel = require("../models/SymptomModel")
const router = express.Router();

// router.post("/postSymptom", async (req, res) => {
//     const  toPost  = req.body;
//     console.log(toPost);

//     try {
//         if (!toPost) {
//             return res.status(400).json({ statusCode: 400, message: "Missing required fields in the request body" })
//         }

//         const newSymptom = await SymptomModel.post({
//             ID: toPost.ID,
//             Name: toPost.Name
//         });

//         res.json({ statusCode: 200, data: newSymptom });
//     }
//     catch (error) {
//         console.error("Error creating symptom:", error);
//         res.status(400).json({ statusCode: 400, message: "Error creating symptom", error });
//     }
// });


router.get("/getallSymptoms", async (req, res) => {
    try {
        const allSymptoms = await SymptomModel.find();
        res.json({ statusCode: 200, data: allSymptoms });
    } catch (error) {
        console.error("Error fetching symptoms:", error);
        res.status(500).json({ statusCode: 500, message: "Error fetching symptoms", error });
    }
});


module.exports = router;