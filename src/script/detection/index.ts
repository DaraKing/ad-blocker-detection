import { QS } from "../helpers/DOM";
import constants from "../constants/index";
import { Campaign } from "../interfaces/campaign";
import {campaignInit, storeUserVisit} from "../api/services";
import { DetectionOptions } from "../interfaces/detection";
import {UserVisitRequestBody} from "../interfaces/api";

class Detection {
    adBlockEnabled: boolean
    customerId: string
    campaign: Campaign

    constructor(options: DetectionOptions) {
        this.adBlockEnabled = options.adBlockEnabled ?? false;
        this.customerId = options.customerId ?? "";
        this.campaign = options.campaign ?? null;
    }

    async initialize(): Promise<void> {
        const scriptTag = document.currentScript || QS(`#${constants.script.id}`);
        this.customerId = scriptTag?.getAttribute(constants.script.customerIdAttribute);
        this.campaign = await campaignInit(this.customerId) ?? null;
    }

    async check(): Promise<void> {
        return new Promise<void>((resolve) => {
            // If customer ID is not provided, terminate further actions
            if (!this.customerId) {
                resolve();
            }

            let body: UserVisitRequestBody = {
                campaign_id: this.campaign.campaign_id,
                adblock_user: false,
            };

            // Create a new script element
            const script = document.createElement('script');
            script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

            // Set up an onerror event handler
            script.onerror = async () => {
                this.adBlockEnabled = true; // Set the flag to true if the script fails to load
                body.adblock_user = true;
                await storeUserVisit(body);
                resolve();
            };

            // Set up an onload event handler
            script.onload = async () => {
                this.adBlockEnabled = false; // Set the flag to false if the script loads successfully
                await storeUserVisit(body);
                resolve();
            };

            // Append the script to the document
            document.head.appendChild(script);
        });
    }

    async storeDataOnBackend() {
        /*api.get("/test")
            .then((response: any) => {
                console.log(response)
            })
            .error((error: any) => {
                console.error(error)
            })*/
    }

}

export default Detection;
