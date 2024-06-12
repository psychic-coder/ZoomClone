"use client";
import Image from "next/image";
import React, { useState } from "react";
import Homecard  from "./Homecard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";


const MeetingTypeList = () => {
  const router=useRouter()
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  const createMeeting=()=>{
      
  }

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-5 xl:grid-cols-4 ">
     <Homecard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        className="bg-orange-1"
        handleClick={() => setMeetingState('isInstantMeeting')}
      />
      <Homecard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        className="bg-blue-1"
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />
      <Homecard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        className="bg-purple-1"
        handleClick={() => setMeetingState('isScheduleMeeting')}
      />
      <Homecard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        className="bg-yellow-1"
        handleClick={() => router.push('/recordings')}
      />
        <MeetingModal 
         isOpen={meetingState==="isInstantMeeting"}  
         onClose={()=>setMeetingState(undefined)} 
         title="Start an instant meeting"
         className="text-center" 
         buttonText="Start Meeting"
         handleClick={createMeeting}
        />
    </section>
  );
};

export default MeetingTypeList;