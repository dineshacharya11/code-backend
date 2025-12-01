// import res from "express/lib/response";
import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async(req,res) => {
    res.status(200).json({
        message : "Code and Run"
    })
})

export {registerUser}