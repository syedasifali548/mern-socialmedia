import {AUTH} from '../constant/actionTypes'
import * as api from '../api/index'

export const signin =(formData,history)=>async(dispatch)=>{
 try {
     //log in user
     history.push('/')
 } catch (error) {
     console.log(error);
     
 }
}

export const signup =(formData,history)=>async(dispatch)=>{
    try {
        //signup user
     history.push('/')
    } catch (error) {
        console.log(error);
        
    }
   }