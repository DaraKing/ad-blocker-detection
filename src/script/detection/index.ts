class Detection {
    adBlockEnabled: boolean

    constructor() {
        this.adBlockEnabled = false;
    }

    async check(): Promise<void> {

        return new Promise<void>((resolve) => {
            const ad = document.createElement('div')
            ad.innerHTML = '&nbsp;'
            ad.className = 'adsbygoogle'
            document.body.appendChild(ad)
            window.setTimeout(() => {
                if (ad.offsetHeight === 0) {
                    this.adBlockEnabled = true
                }
                ad.remove()

                return resolve()
            }, 100)
        })
    }
}

export default Detection;
