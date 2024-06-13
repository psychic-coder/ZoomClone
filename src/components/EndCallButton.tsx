"use client";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const EndCallButton = () => {
  //getting access of the call
  const call = useCall();
  const router=useRouter()

  //getting hold of the local participant
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;

  return (
    <Button
      onClick={async () => {
        await call.endCall();
        router.push("/")
      }}
      className="bg-red-500"
    >
        End call for Everyone
    </Button>
  );
};

export default EndCallButton;
