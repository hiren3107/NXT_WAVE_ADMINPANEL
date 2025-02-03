
var initial = {
    isSuccess : false,
    isLoding :false,
    arr:[],
    isDeletSuccess : false,
    isDeletLoding:false
}

export var productReducer = (state=initial,{type,paylod})=>{

    switch(type){
        case "LOADING":
            return {...state,isLoding:true,isSuccess:false}
        case "SUCCESS":
            return {...state,isLoding:false,isSuccess:true,arr:paylod}
        case "DELET_LOADING":
            return {...state,isDeletLoding:true}
        case "DELET_SUCCESS":
            return {...state,isDeletLoding:false,isDeletSuccess:true}
        default:
            return state
    }
}