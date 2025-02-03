import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../Firebase/fire";
// import { useDispatch } from "react-redux";


export async function getData(dispatch){

    dispatch({type:"LOADING"})

    let ProductCollection = collection(db, "Product");

    var ProductData = await getDocs(ProductCollection)
    var ans = ProductData.docs.map((el) => {
        return {id: el.id,...el.data()}
    })

    dispatch({type:"SUCCESS",paylod:ans})

}

export function deleteData(id){
    return async function(dispatch){
        dispatch({type:"DELET_LOADING"})
        var del = doc(db,"Product",id)
        await deleteDoc(del);
        dispatch(getData)
        dispatch({type:"DELET_SUCCESS"})
        Swal.fire({
            title: "Delete Success !",
            icon: "success",
            draggable: true
          });

    }
}


export var updateData =(dispatch)=>async(id,obj)=>{

    var edited = doc(db,"Product",id)
    await updateDoc(edited,obj)
    dispatch(getData)
    
}

// export const updateData = (dispatch) =>async(id,obj)=>{
//     dispatch({type : "LOADING"})
//     let d = doc(db,"products",id);
//     await updateDoc(d,obj);
//     dispatch({type : "SUCCESS"})
//     getData(dispatch)
// }