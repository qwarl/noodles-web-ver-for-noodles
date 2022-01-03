import { firebase } from './firebase'
import { getDoc, doc, updateDoc } from 'firebase/firestore/lite';


interface returnTypeFromDB {
    FullName: string,
    Birthday: string,
    Department: string,
    Gender: string,
    Noodles1: string,
    Noodles2: string,
    Noodles3: string,
    Id: string
}
// type dispatchType = (value:{type:string, payload?:{}}) => void;
type getStateType = () => returnTypeFromDB;

export const fetchAPI = async (getState: getStateType) => {
    const payload = getState();
    try {
        const docRef = doc(firebase, 'users', payload.Id)
        const noodleSnapshot = await getDoc(docRef);
        console.log('docref',noodleSnapshot);
        
        // dispatch({
        //     type: 'noodle/saveData',
        //     payload:noodleSnapshot.data(),
        // })
    } catch (err) {
        console.log(err)
    }
}

// export const updateNoodle = async (getState:getStateType) => {
//     const payload = getState();
//     if(payload.noodleAvailable){
//         const docRef = doc(firebase, 'users', payload.Id)
//         await updateDoc(docRef, {
//             noodleAvailable:  payload.noodleAvailable
//           });
//     }
// }