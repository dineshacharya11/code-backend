import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile : {
            type : String,  //cloudinary service used
            required : true,
        },
        thumbnail : {
            type : String,  //cloudinary service used
            required : true,
        },
        duration : {
            type : Number,  //cloudinary service used
            required : true
        },
        title : {
            type : String,  
            required : true
        },
        description : {
            type : String,
            required : true   
        } ,
        views : 
        {
                type : Number,
                default : 0
        },
        isPublished : {
            type : Boolean,
            default : true
        },
        owner : {
            type : Schema.Types.ObjectId,
            ref : "User"
        }
    },
    {
        timestamps : true
    }
)


videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.Model("Video",videoSchema)

// Mongoose mainly used for aggregation queries in production.
// npm install mongoose-aggregate-paginate-v2 (package name)