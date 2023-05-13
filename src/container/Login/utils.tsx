import axios, {  AxiosResponse } from "axios";
import { LoginPayload, LoginResponse } from "./type";

export const signIn = async(payload:LoginPayload):Promise<LoginResponse>=>{
    try{
      const response:AxiosResponse = await axios.post('https://dummyjson.com/auth/login',{
        username:payload.username,
        password:payload.password
        
      })
      return{
        message:'Login Success',
        status:response?.status??200,
        data:response?.data
        
      }
    }catch(err:any){
        return {
            status:err?.response?.status,
            message:err?.response?.data?.message??'Error in login',
            error:err?.response?.data?.message??'Error in login'
        }
    }
}