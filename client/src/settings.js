import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId= "5f132e257825430ebbac4f868cf8cdc1"
const token ="007eJxTYBDKO8nuu0zqkky02S6+H/1Hlsw8K6z05mbqT8cu9T9KsyYoMJimGRobpRqZmlsYmZoYG6QmJSUmm6RZmFkkp1kkpyQbzl24O7khkJEh5HwPMyMDBIL4rAxB+fm5hgwMAGSNIEg="


export const config={mode:"rtc", codec:"vp8", appId:appId, token:token};
export const useClient=createClient(config);
export const useMicrophoneAndCameraTracks=createMicrophoneAndCameraTracks(config);
export const channelName="Room1";