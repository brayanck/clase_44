const router = require("express").Router();

router.get("/",async(req,res)=>{
    try{
        req.logger.http("hola")
        req.logger.info("hola")
        req.logger.warn("hola")
        req.logger.fatal("hola")
        res.json("prueba")
    }catch(err){
        console.log(err);
    }
})

module.exports = router