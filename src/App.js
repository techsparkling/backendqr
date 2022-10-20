import logo from './logo.svg';
import './App.css';
import { uid } from 'uid';
import {
  get, 
  getDatabase,
  ref,
  set,
  child,
  remove,
  update,
  push,
  DataSnapshot,
} from "firebase/database";
import {React,useEffect} from 'react';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCV5vLM-3FNFVBVkPMj-z9vVlLNjPVK7S4",
  authDomain: "qrcode-74132.firebaseapp.com",
  databaseURL: "https://qrcode-74132-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "qrcode-74132",
  storageBucket: "qrcode-74132.appspot.com",
  messagingSenderId: "288019960515",
  appId: "1:288019960515:web:c0b8ff0d837706910bc876",
  measurementId: "G-WGWW6E2VZG"
  };
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(getDatabase());
const db=getDatabase()
const main=document.getElementById("mainer")

function getval(){
  const main=document.getElementById("mainer")
  main.innerText=""
  get(child(dbRef, `products/`)).then((snapshot) => {
  if (snapshot.val()) {
    const dbref = ref(db);
    var length = Object.keys(snapshot.val()).length;
    for (let i = 0; i < length; i++) {
      var path = Object.keys(snapshot.val())[i];
      get(child(dbref, "products/" + path))
      .then((snapshot) => {
const card=document.createElement('div')
card.classList="max-w-sm bg-white ml-5 p-5 mt-5 rounded-lg border border-gray-200 shadow-md "
const name=document.createElement('p')
name.classList="mb-2 text-2xl font-bold tracking-tight text-gray-900 "
name.innerText=snapshot.val().name
const price=document.createElement('p')

price.classList="mb-3 font-normal text-gray-700"
price.innerText="rs:"+snapshot.val().price
const img=document.createElement('img')
img.classList="rounded-t-lg"
img.src=snapshot.val().img
card.appendChild(img)
card.appendChild(name)
card.appendChild(price)
main.appendChild(card)
    })
    }
  } 
  else {
  document.getElementById('main').innerText="No products added ";    
  }
  }).catch((error) => {
   
  console.error(error);
  });
}
function removed(){
  remove(
    ref(db, "products")
  ).then(() => {
    alert("All data removed")
    const main=document.getElementById("mainer")
    main.innerText=""
    getval()
  })
}
function App() {
  function onload(){
 

      
      let name_input=document.getElementById("name-input").value
  let img_input=document.getElementById("img-input").value
  let price_input=document.getElementById("price-input").value
 const db=getDatabase()
  const dbref = ref(db);


    const postListRef = ref(db, "posts");

    push((ref(db,  "products/")), {
      name:name_input,
    price:price_input,
    img:img_input,
    })
      .then(() => {
       alert("added")
       close_add()
       const main=document.getElementById("mainer")
       main.innerText=""
       getval()
      })
      .catch((error) => {
       alert(error);
      });
  }
  function close_add(){
    var add= document.getElementById('add')
  console.log(add)
     add.style.display="none"
    }    
    function open_add(){
    var add= document.getElementById('add')
    add.style.display="block"

    }

  useEffect(getval,[])
  return (
    <div className="App">
    <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="" className="flex items-center">
               
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Anand sir store</span>
            </a>
            <div className="flex items-center lg:order-2">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Admin Pannel</span>
                <a href="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 text-[20px] bg-blue-500 ml-5" 
                onClick={open_add}>Add</a>
                <a href="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 text-[20px] bg-red-500 ml-5" 
                onClick={removed}>Delete all</a>
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path></svg>
                </button> 
            </div>
           
        </div>
    </nav>
</header>
<div className="text-center items-center flex  flex-wrap justify-center content-center w-full h-full md:pt-[100px] align-middle" id='mainer'onLoad={getval}>
<p id="main" className="text-center  w-full text-[30px]"> </p>
</div>
<div className="absolute w-full h-full overflow-hidden backdrop-blur-xl  top-0 m-auto hidden" id='add' >
<div className=" w-[300px] h-[400px] mx-auto my-auto bg-white p-5 border rounded-xl absolute top-0 bottom-0 right-0 left-0">
    <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Name of the product</label>
        <input type="text" id="name-input" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 "></input>
    </div>

    <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Link of img </label>
        <input type="text" id="img-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "></input>
    </div>
    <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 ">price </label>
        <input type="text" id="price-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "></input>
    </div>
 <button className="px-5 py-2 rounded-sm bg-blue-500 text-white" id="add_data" onClick={onload}>Add</button>
 <button className="px-5 py-2 rounded-sm bg-red-500 text-white" onClick={close_add}>close</button>
</div>
</div>
    </div>
  );
}

export default App;
