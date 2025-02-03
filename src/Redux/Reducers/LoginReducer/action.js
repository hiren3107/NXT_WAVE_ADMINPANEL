import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../Firebase/fire";

export async function getDataUser(dispatch) {

    dispatch({ type: "LOADING1" })

    let userCollection = collection(db, "user");

    var usertData = await getDocs(userCollection)
    var ans1 = usertData.docs.map((el) => {
        return { id: el.id, ...el.data() }
    })

    dispatch({ type: "SUCCESS1", paylod: ans1 })

}

export function deleteDataUser(id) {
    return async function (dispatch) {
        dispatch({ type: "DELET_LOADING1" })
        var del = doc(db, "user", id)
        console.log(id);
        await deleteDoc(del);
        dispatch(getDataUser)
        dispatch({ type: "DELET_SUCCESS1" })
        Swal.fire({
            title: "Delete Success !",
            icon: "success",
            draggable: true
        });

    }
}

export var updateDataUser = (dispatch) => async (id, obj) => {

    var edited = doc(db, "user", id)
    await updateDoc(edited, obj)
    dispatch(getDataUser)

}
