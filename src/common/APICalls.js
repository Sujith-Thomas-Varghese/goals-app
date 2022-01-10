import axios from "axios";

import {AppConfig} from './config';

axios.defaults.baseURL = AppConfig.baseURL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Accept"] = "application/json";


const ReviewListURL = AppConfig.baseURL + '/reviews';

const APICalls = {
    ReviewListAPI (){
        return axios.get(ReviewListURL)
       .then((response)=>{
           return response
       }).catch((error)=>{
           console.log(error)
       })
   },
   AddReview(payload){
    return axios.post(ReviewListURL,payload)
    .then((resonse)=>{
       return resonse;
   })
   .catch((error)=>{
       let errorObject = {
           status:'',
           body: {}
       }
    if(error.request)
    {
        errorObject.status = error.request.status;
        errorObject.body = JSON.parse(error.request.response);
        return errorObject
    }
       console.log("error",error)
   })
},

}

export default APICalls