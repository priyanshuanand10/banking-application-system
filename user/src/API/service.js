import { myAxios } from "./api";

// export const loginDetails=(user)=>{

//     return myAxios.post('/login',user).then((response)=>response.data)
// }

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


//user apis after complting user please delete above apis


export const loginDetails=(user)=>{

    return myAxios.post('/userlogin',user).then((response)=>response.data)
}

export const getuserinfo=(accnumber)=>{

    return myAxios.get(`/getAllDetails/${accnumber}`).then((response)=>response.data)
}


export const withdraw=(accnumber,amount)=>{

    return myAxios.get(`/withdraw/${accnumber}/${amount}`).then((response)=>response.data)
}


export const deposite=(accnumber,amount)=>{

    return myAxios.get(`/deposite/${accnumber}/${amount}`).then((response)=>response.data)
}


export const getUserDetailsById=(accnumber)=>{

    return myAxios.get(`/getAllDetails/${accnumber}`).then((response)=>response.data)
}


export const transfer=(sender,resever,amt)=>{

    return myAxios.get(`/transfer/${sender}/${resever}/${amt}`).then((response)=>response.data)
}


export const gethistory=(acc)=>{

    return myAxios.get(`/history/${acc}`).then((response)=>response.data)
}
