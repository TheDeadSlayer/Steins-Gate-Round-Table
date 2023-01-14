import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId= "689649188d9444029ad5edd60b3c817b"
const token ="007eJxTYFBJupvS9Wjq9DXte86/ZA6TbS6zDtPx+fpJTe/t83lHt3QrMJhZWJqZWBpaWKRYmpiYGBhZJqaYpqakmBkkGSdbGJonvbU8lNwQyMhw4UYyMyMDBIL4rAxB+fm5hgwMAN//IYo="


export const config={mode:"rtc", codec:"vp8", appId:appId, token:token};
export const useClient=createClient(config);
export const useMicrophoneAndCameraTracks=createMicrophoneAndCameraTracks(config);
export const channelName="Room1";