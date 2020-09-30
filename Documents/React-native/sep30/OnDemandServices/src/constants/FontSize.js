import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Platform } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export function fontScale(size) {
    return RFValue(size)
}
export function fontScaleStandard(size) {
    return RFPercentage(size)
}
export function useNetInfo() {
    return NetInfo.fetch().then(state => {
      console.log("==========iscoonected net====>"+state.isConnected)
        return state.isConnected
    });
}