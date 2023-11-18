import { Campaign } from "./campaign";

export interface IDetection {
    adBlockEnabled?: boolean
    customerId?: string
    campaign?: Campaign
}
