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
        backButtonClass: "back-button"
    },
    pages: {
        home: 'home',
        turnOffAdBlocker: 'turn-off-adblocker'
    }
};

Object.freeze(constants);

export default constants;
