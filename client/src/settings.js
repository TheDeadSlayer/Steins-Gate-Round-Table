import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId= "689649188d9444029ad5edd60b3c817b"
const token ="007eJxTYMg5/OSlY6nkP7PZu3smxKcKsqsZfX3C0CC0V+rSjb1ilrUKDGYWlmYmloYWFimWJiYmBkaWiSmmqSkpZgZJxskWhuZJh2L2JTcEMjK84/FmYmSAQBCflSEoPz/XkIEBADUJHqI="


export const config={mode:"rtc", codec:"vp8", appId:appId, token:token};
export const useClient=createClient(config);
export const useMicrophoneAndCameraTracks=createMicrophoneAndCameraTracks(config);
export const channelName="Room1";