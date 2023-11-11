class Detection {
    adBlockEnabled: boolean

    constructor() {
        this.adBlockEnabled = false;
    }

    async check(): Promise<void> {
        return new Promise<void>((resolve) => {
            // Create a new script element
            const script = document.createElement('script');
            script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

            // Set up an onerror event handler
            script.onerror = () => {
                this.adBlockEnabled = true; // Set the flag to true if the script fails to load
                console.log('Adblocker detected');
                resolve();
            };

            // Set up an onload event handler
            script.onload = () => {
                this.adBlockEnabled = false; // Set the flag to false if the script loads successfully
                console.log('No adblocker detected');
                resolve();
            };

            // Append the script to the document
            document.head.appendChild(script);
        });
    }

}

export default Detection;
