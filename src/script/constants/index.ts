const constants = {
    script: {
        id: "adb-detection",
        customerIdAttribute: "data-customer-id"
    },
    popup: {
        id: "adblock-modal",
        headerClass: "header",
        bodyClass: "body",
        footerClass: "footer",
        contentClasses: ["content"],
        closeButtonClass: "close-button",
        backButtonClass: "back-button",
        proceedWithoutTurning: "proceed-without-turning"
    },
    pages: {
        home: "home",
        turnOffAdBlocker: "turn-off-adblocker"
    },
    apiEndpoints: {
        campaignInit: "/api/campaign/init/",
        userVisit: "/api/user/visit",
    }
};

Object.freeze(constants);

export default constants;
