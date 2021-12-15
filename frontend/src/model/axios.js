import React, {useState , useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import  axios from 'axios';

const baseUsl = "http://203.170.190.226:8080"
// // const baseUsl = "https://pokeapi.co/api/v2/pokemon"/

// var data = JSON.stringify({
//   "type_work_id" : 2
// });

// var config = {
//   method: 'post',
//   url: `${baseUsl}/getallwork`,
//   data : data 
// }


// const getUsersAndProducts = async () => {
//   try {
//     const reqUsers = axios(config)
//     // const reqProucts = axios.post(`${baseUsl}/getallwork`, { type_work_id: 2})

//     const getAllResponse = await Promise.all([reqUsers])
//     setID(getAllResponse);
//     console.log('response: ', getAllResponse);
//     // do something about response
//   } catch (error) {
//     console.error(error)
//   }
// }




export default function App() {  
  const [post, setPost] = useState(null);
  var [typeworkid , setID] = useState(null);
  // getUsersAndProducts()
  // var type_work_id = 3

  useEffect(() => {
    axios.get(`${baseUsl}/ping`)
    .then((response) => {
      setPost(response.data);
      // console.log(response.date);  
    });

    // axios.post(`${baseUsl}/createuser`,{ firstname : "สุพระ", lastname : "อะสระ" , email : "่jop@gmail.com" , password : "asds", phone : ""})
    // .then((response) => {
    //   setID(response.data);
    //   console.log(response.date);  
    // });


  },[]);

  if (!post) return <p>sdfsdfsdfdasdasfdsfasfsdfasdfsdfsdfsdf</p>;
  return (
    <div className="App">
      <p>sdfsdfsdf</p>
      <p>{typeworkid.typeworkid}</p>
      <p>{post.message}</p>
      <p>{post.message}</p>
    </div>
  );
}
