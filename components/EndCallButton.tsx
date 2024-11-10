"use client";

import { CallingState, useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();
  const { useCallCallingState } = useCallStateHooks();

  const callingState = useCallCallingState();

  if(callingState !== CallingState.JOINED) return <Loader />

  const isMeetingOwner =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;

  return (
    <Button onClick={async () => {
        await call.endCall();
        router.push('/');
    }} className="bg-red-500" >
        End call for everyone
    </Button>
  );
};

export default EndCallButton;
