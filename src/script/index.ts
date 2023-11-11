import Detection from "./detection/index";
import Popup from "./popup/index";
import '../style/main.scss';

let detection = new Detection();
detection.check()
    .then(() => {
        if (detection.adBlockEnabled) {
            console.log(detection.customerId);
            let popup = new Popup(true);
            popup.init();
        }
    })
