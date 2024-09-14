const express = require("express");
const router = express.Router();

//get

router.get("/userpost",(req, res) => {
    res.send([
       {
           id: 1,
           name: "john doe",
           email: "john.doe@example.com",
       },
       {
           id: 2,
           name: "jane doe",
           email: "jane.doe@example.com",
       },
    ]);
   });
   
   module.exports = router;