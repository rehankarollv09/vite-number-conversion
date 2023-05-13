export type LoginPayload ={
    username:string,
    password:string
}

export type LoginResponse={
    message:string,
    error?:string,
    status:number,
    data?:any
}