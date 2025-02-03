
var initial = {
    isDone:false,
    isLoding:false,
    user:[],
    isDeletSuccess : false,
    isDeletLoding:false
} 

export var loginReducer = (state=initial,{type,paylod})=>{

    switch(type){
        case "LOADING1":
            return {...state,isLoding:true}
        case "SUCCESS1":
            return {...state,isDone:true,isLoding:false,user:paylod}
        case "LOGOUT":
            return {...state,isLogin:false,isLoding:false,isLogout:true}
        case "DELET_LOADING1":
            return {...state,isDeletLoding:true}
        case "DELET_SUCCESS1":
            return {...state,isDeletSuccess:true,isDeletLoding:false}
        default:
            return state
    }
}