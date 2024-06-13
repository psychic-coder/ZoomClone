"use client";


import { useUser } from '@clerk/nextjs';
import {
    StreamVideo,
    StreamVideoClient,
  } from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';
import { tokenProvider } from '../actions/stream.actions';
import Loader from '@/components/ui/Loader';


  
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
 
  
///this is the video provider with which we have to wrap
  
  const StreamVideoProvider = ({children}:{children:ReactNode}) => {
     const [videoClient,setVideoClient]=useState<StreamVideoClient>();

    //WE CAN get the info of the currently logged in user , clerk makes it easy to get the details of the currently logged in user
    const {user,isLoaded}=useUser()
    useEffect(()=>{
        if(!user || !isLoaded){
            return;
        }
        if(!apiKey) throw new Error('Stream API key missing');

        const client =new StreamVideoClient({
           apiKey,
           user:{
            id:user?.id,
            name:user?.username||user?.id,
            image:user?.imageUrl,        
           },
        tokenProvider, 
        })
        setVideoClient(client)
    },[user,isLoaded])

    if(!videoClient) return <Loader/>
    return (
      <StreamVideo client={videoClient}>
        {children}
      </StreamVideo>
    );
  };

  export default StreamVideoProvider;