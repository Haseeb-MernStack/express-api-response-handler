

export const errorResponse = (
    res,
    message="Something went wrong",
    errors=[],
    statusCode=500
)=>{
    return res.status(statusCode).json({
        success:false,
        message,
        data:null,
        errors
    });
};