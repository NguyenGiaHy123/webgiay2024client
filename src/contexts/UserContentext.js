import { createContext, useState, useEffect } from "react";
import { getProfileUser } from "../featuresReducer/User/pathApi";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import io from 'socket.io-client'
const UserContext=createContext(null);
const tokenLocal=localStorage.getItem('tokenUser');
const UserContextProvider=({children})=>{

  const dispatch=useDispatch()
  const [user,setUser]=useState(null);
  const [idUser,setIdUser]=useState(null);
  const [pathCart,setPathCart]=useState(null);
  const [socket,setSocket]=useState(null);
  const [token,setToken]=useState(null);
  const [view,setView]=useState(null);
  const [countUserOline,setCountUserOnline]=useState(null);

  useEffect(()=>{
    if(socket){
      socket.emit("countUserOnline",8080)
    }
  },[socket])
  useEffect(() => {
    if (socket) {
      socket.on("severCountUserOnline", (msg) => {
        const { accountOnline, view } = msg;
        console.log(accountOnline)
       
        if (msg)
          setView(view);
          setCountUserOnline(accountOnline);
      });
      return () => socket.off("severCountUserOnline");
    }
  }, [socket]);

  /*
  */
  useEffect(()=>{
    async function connectSocket(){
      //bene nay minh sex truy cap den server ma dang chay tren localhost:8000
    const SocketIo=io('http://localhost:8000',{
    withCredentials: true,
    extraHeaders: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Header":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Methods": "PUT, POST, DELETE, GET",
    },
    })
    if(SocketIo){
      setSocket(SocketIo);
    }
   
    if(tokenLocal){
      try{
        const actionCurrentUser=await dispatch(getProfileUser());
        // dược sử dụng để giải nén giá trị trả về của một action createAsyncThunk
        const currentUser=unwrapResult(actionCurrentUser);
        if(currentUser){
          setIdUser(currentUser.user._id);
          setToken(tokenLocal);
          setUser(currentUser.user)
        }
      }
      catch(err){
        console.log(err);
        localStorage.removeItem("tokenUser");
        window.location.reload();
      }
     }
    
     return ()=>socket.close();
  }
  connectSocket();

   
    // return ()=>socket.close()
  },[]);

    const state={
    user:[user,setUser],
    idUser:[idUser,setIdUser],
    pathCart:[pathCart,setPathCart],
    token:[token,setToken],
    view:[view],
    countUserOline:[countUserOline],
    socket:socket
  }
  return (
    <UserContext.Provider value={{state}}>{children}</UserContext.Provider>
  )
}

export {UserContext,UserContextProvider}