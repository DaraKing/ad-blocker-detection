import api from "./index";

const campaignInit = async (customerId: string) => {
    try {
        const response = await api.get(`/api/campaign/init/${customerId}`);
        return response.data;
    } catch (err) {
        console.error(err)
    }
}

export {
    campaignInit,
}
