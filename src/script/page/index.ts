class Page {

    public renderHome(): string {
        return `
        <img src='./static/icons/ad-block.svg' class='icon' alt='AdBlock icon' />
        <h1 class="title">You're using an Adblocker.</h1>
        <p class="subtitle">Ads are necessary for the smooth operation of our site. If you want to help, register or turn off your Adblocker.</p>
        <div class="buttons">
            <button>Register</button>
            <button id="turn-off-adblocker">Turn off Adblocker</button>
        </div>
        `;
    }

    public renderTurnOffAdBlocker(): string {

        return `
            <div id="turn-off-adblocker">
                <section>
                    <img src='./static/icons/ad-block.svg' class='icon' alt='AdBlock icon' />
                    <h3>Disable Adblockers</h3>
                    <h5>HOW TO TURN OFF ADBLOCK PLUGIN ?</h5>
                    <p>Nobody likes ads but they are the necessary evil of almost every free service.
    Be fair and consider pausing your ad blocker to support the creators who work hard to create value.</p>
                </section>
                <section>
                    <h5>FIRST DETERMINE WHICH ADBLOCKER YOU ARE USING:</h5>
                    <p>In your browser toolbar look for one of the following icons to determine which adblocker you are running.</p>
                    <img class="whitelist-adblock" src="./static/images/whitelist-bh-adblock-options.jpeg" alt="Turn off adblocker" />
                </section>
                <section>
                    <h5>FOR ADBLOCK PLUS:</h5>
                    <img class="whitelist-adblock-gif" src="./static/images/whitelist-bh-adblockplus.gif" alt="Adblock plus" />
                    <p class="whitelist-adblock-text">Click the adblock plus icon <br/>
                    Click <span class="text-bolded">Enabled On this Site</span> to change it to <span class="text-bolded">Disabled on this site</span></p>
                </section>
                <section>
                    <h5>FOR ADBLOCK:</h5>
                    <img class="whitelist-adblock-gif" src="./static/images/whitelist-bh-adblock.gif" alt="Adblock" />
                    <p class="whitelist-adblock-text">Click the adblock plus icon <br/>
                    Click <span class="text-bolded">Don’t run on pages on this domain</span></p>
                </section>
                <button class="back-button" data-src="home">Back</button>
            </div>
        `
    }
}

export default Page;
