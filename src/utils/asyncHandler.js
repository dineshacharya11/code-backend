const asyncHandler =(reqestHandler) =>{
    (req,res,next) => {
        Promise.resolve(reqestHandler(req,res,next)).catch((err) => next(err))
    }
}


export {asyncHandler}
/*  asyncHandler higher order function, all are same.
const asyncHandler = () ={}
const asyncHandler = (func) => () =>{}
const asyncHandler = (func) => async() => {}
*/

/*  try,catch method for async request,respose
const asyncHandler = (fn) => async(req,res,next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(error.code || 500).json({
            success : false,
            message : err.message
        })
    }
}
*/
