import Detection from "./detection/index";
import Popup from "./popup/index";
import '../style/main.scss';
import { campaignInit } from "./api/services";

let detection = new Detection();
detection.check()
    .then(async () => {
        if (detection.adBlockEnabled) {
            let popup = new Popup(true);
            popup.customerId = detection.customerId;
            popup.campaign = await campaignInit(popup.customerId);
            popup.init();
        }
    })
