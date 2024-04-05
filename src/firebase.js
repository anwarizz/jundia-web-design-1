
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, getDownloadURL, uploadBytes, deleteObject} from "firebase/storage"
import { getFirestore, collection, doc, getDoc, updateDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXoN3azmGiLi12hY5-FzSjoQpVZjxnX1Y",
  authDomain: "jundia-personal-website.firebaseapp.com",
  projectId: "jundia-personal-website",
  storageBucket: "jundia-personal-website.appspot.com",
  messagingSenderId: "976301089306",
  appId: "1:976301089306:web:80ba8b8a4414ab2020a7a3",
  measurementId: "G-ET89FSHM6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// cloud storage
const storage = getStorage(app)
// get image blob ? url then
export const getImage = (url) => getDownloadURL(ref(storage, url))
// upload image to cloud storage
export const upload = (pathRef, file) => {
  const storageRef = ref(storage, pathRef)
  return uploadBytes(storageRef, file)
}
// remove file from cloud storage
export const deleteFile = (path) => deleteObject(ref(storage, path))


// fire store
const db = getFirestore(app)
// read data
export const docSnap = (collec) => getDoc(doc(db, collec,'PHzQ2ncSHCZqqISFdEdy'))
// add + update data
export const update = (collec, data) => updateDoc(doc(db, collec,'PHzQ2ncSHCZqqISFdEdy'), data)

