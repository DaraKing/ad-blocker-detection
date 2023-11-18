import Detection from "./detection/index";
import Popup from "./popup/index";
import '../style/main.scss';

const main = async (): Promise<void> => {
    let detection = new Detection({campaign: null});
    await detection.initialize();
    detection.check()
        .then(async () => {
            if (detection.adBlockEnabled) {
                let popup = new Popup({
                    hasCloseButton: true,
                    campaign: detection.campaign,
                    customerId: detection.customerId
                });
                popup.init();
            }
        });
};

main();
