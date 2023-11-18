import api from "./index";
import constants from "../constants/index";
import { UserInteractionRequestBody, UserVisitRequestBody } from "../interfaces/api";

const campaignInit = async (customerId: string) => {
    try {
        const response = await api.get(`${constants.apiEndpoints.campaignInit}${customerId}`);
        return response.data;
    } catch (err) {
        console.error(err)
    }
}

const storeUserVisit = async (body: UserVisitRequestBody) => {
    try {
        await api.post(`${constants.apiEndpoints.userVisit}`, body);
    } catch (err) {
        console.error(err);
    }
}

export const storeUserInteraction = async (body: UserInteractionRequestBody) => {
    try {
        await api.post(`${constants.apiEndpoints.userInteraction}`, body);
    } catch (err) {
        console.error(err)
    }
}

export {
    campaignInit,
    storeUserVisit,
}
