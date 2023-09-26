import { getDoc, deleteDoc ,updateDoc, getDocs, collection, setDoc, doc, addDoc,  query, where, orderBy, limit,  Timestamp}  from "firebase/firestore";
import {  ref , uploadBytes, uploadBytesResumable, getDownloadURL , deleteObject} from "firebase/storage";

import  Config  from './config.js';

export default class Order extends Config {
    constructor() {
        super();
        this.orderRef = collection(this.db, "orders");
        this.orderDetailRef = collection(this.db, "order_details");
    }
    
    async insertOrderAndGetLastID(dataUser, dataCart){
    
        return await addDoc(this.orderRef, { 
            address : dataUser.fullAddress,
            createdAt : Timestamp.fromDate(new Date()),
            email : dataUser.email,
            name : dataUser.name,
            phone_number : dataUser.phoneNumber,
            status : 6
        }) 
        .then((result) => {
           
            let promises = dataCart.map(data => addDoc(this.orderDetailRef, {
                order_id : result.id,
                price : data.price,
                product_id : data.id,
                quantity : data.quantity
            }));
           return  Promise.all(promises)
            .then((docRefs) => {
                return {
                    status : 'success',
                }
            })
            .catch((error) => {
              console.error("Error adding documents: ", error);
            });
        })
        .catch((error) => {
            console.error("Error adding documents: ", error);
        })
    }
    
}

/**
 import { collection, getDocs, doc, getDoc } from "firebase/firestore";

async function getProducts() {
    const products = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    for (const doc of querySnapshot.docs) {
        const product = doc.data();
        const categorySnapshot = await getDoc(doc(db, "categories", product.categoryId));
        if (categorySnapshot.exists()) {
            product.category = categorySnapshot.data();
        } else {
            product.category = null;
        }
        products.push(product);
    }
    console.log(products);
}

getProducts();
 */