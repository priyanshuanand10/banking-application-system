import { myAxios } from "./api";

export const loginDetails=(user)=>{

    return myAxios.post('/login',user).then((response)=>response.data)
}

export const adduser=(user)=>{

    return myAxios.post('/addOneUserAPI',user).then((response)=>response.data)
}

export const deleteUserDetails=(accnumber)=>{

    return myAxios.delete(`/delete/${accnumber}`).then((response)=>response.data)
}

export const updateUserDetails=(accnumber,user)=>{

    return myAxios.put(`/update/${accnumber}`,user).then((response)=>response.data)
}

export const getAllUserDetailsById=(accnumber)=>{

    return myAxios.get(`/getUserAllDetail/${accnumber}`).then((response)=>response.data)
}

export const addtechnicalissue=(issue)=>{

    return myAxios.post('/addTechnicalIssue',issue).then((response)=>response.data)
}

export const adduserloginpass=(details)=>{

    return myAxios.post('/userloginpass',details).then((response)=>response.data)
}


