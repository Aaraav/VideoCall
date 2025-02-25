import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
    const { roomId } = useParams();
    const containerRef = useRef(null);

    useEffect(() => {
        const myMeeting = async () => {
            const appId = 1952631639; // Ensure this is a number
            const serverSecret = "5bfbaf0fee3ba6528554899332ce475f";

            // Generate the kit token
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appId,
                serverSecret,
                roomId,
                Date.now().toString(),
                "aaraav"
            );

            // Create ZegoUIKitPrebuilt instance
            const zc = ZegoUIKitPrebuilt.create(kitToken);

            // Join the room
            zc.joinRoom({
                container: containerRef.current,
                sharedLinks:[
                    {
                        name:"Copy Link",
                        url:`https://auccall.vercel.app/room/${roomId}`
                    }
                ],

                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall, // 1-on-1 calls
                },
            });
        };

        myMeeting();
    }, [roomId]);

    return (
        <div
            ref={containerRef}
            style={{ width: "100vw", height: "100vh" }} // Ensure proper styling for the container
        />
    );
};

export default RoomPage;
