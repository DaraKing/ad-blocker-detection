import {createElementWithClasses, createElementWithId, QS} from "../helpers/DOM";
import contants from "../constants/index";
import Page from "../page/index";

class Popup {
    popup: Element
    content: Element
    hasCloseButton: boolean
    currentPage: string

    constructor(hasCloseButton: boolean, currentPage?: string) {
       this.hasCloseButton = hasCloseButton;
       this.currentPage = currentPage ?? 'home';
    }

    public init(): void {
        this.popup = createElementWithId("div", contants.popup.id);
        this.content = createElementWithClasses("div", contants.popup.contentClasses);
        this.content.appendChild(createElementWithClasses("div", ["page"]));

        this.pageRender();
    }

    protected pageRender(): void {
        let page = new Page();
        console.log(this.content)

        switch (this.currentPage) {
            case contants.pages.home:
                this.content.innerHTML = page.renderHome();
                break;
            case contants.pages.turnOffAdBlocker:
                this.content.innerHTML = page.renderTurnOffAdBlocker();
                break;
            default:
                console.error("[404] Page not found!")
        }

        if (this.hasCloseButton) {
            this.content.appendChild(this.generateCloseButton())
        }

        this.popup.appendChild(this.content);
        document.body.appendChild(this.popup);
        this.dispatchEvents();
    }

    protected generateCloseButton(): Element {
        let closeBtn = createElementWithClasses("div", [contants.popup.closeButtonClass]);
        closeBtn.innerHTML = "&times";

        return closeBtn;
    }

    protected dispatchEvents(): void {
        QS(`.${contants.popup.closeButtonClass}`) ? QS(`.${contants.popup.closeButtonClass}`).addEventListener("click", () => this.closeModal(), true) : null;
        QS(`#${contants.pages.turnOffAdBlocker}`) ? QS(`#${contants.pages.turnOffAdBlocker}`).addEventListener("click", () => this.changePage(contants.pages.turnOffAdBlocker), true) : null;
        QS(`.${contants.popup.backButtonClass}`) ? QS(`.${contants.popup.backButtonClass}`).addEventListener("click", (evt) => this.returnBack(evt), true) : null;
    }

    protected detachEvents(): void {
        QS(`.${contants.popup.closeButtonClass}`) ? QS(`.${contants.popup.closeButtonClass}`).removeEventListener("click", () => this.closeModal(), true) : null;
        QS(`#${contants.pages.turnOffAdBlocker}`) ? QS(`#${contants.pages.turnOffAdBlocker}`).removeEventListener("click", () => this.changePage(contants.pages.turnOffAdBlocker), true) : null;
        QS(`.${contants.popup.backButtonClass}`) ? QS(`.${contants.popup.backButtonClass}`).removeEventListener("click", (evt) => this.returnBack(evt), true) : null;
    }

    protected changePage(page: string): void {
        this.currentPage = page;
        this.detachEvents();
        this.pageRender();
    }

    protected returnBack(e?: Event): void {
        e.preventDefault();

        if (!(e.target instanceof HTMLButtonElement)) {
            return;
        }

        if (!e.target.dataset.src) {
            return;
        }

        this.changePage(e.target.dataset.src.toString())
    }

    protected closeModal(e?: Event): void {
        this.content = null;

        this.detachEvents();
        QS(`#${contants.popup.id}`).remove();
    }
}

export default Popup;
