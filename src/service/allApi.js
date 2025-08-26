import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

//api for add images
export const addImageAPI = async(reqbody)=>{
    return await commonAPI(`POST`, `${serverURL}/images`,reqbody)
}

//api for get images
export const getImageAPI = async()=>{
    return await commonAPI(`GET`, `${serverURL}/images`,"")
}