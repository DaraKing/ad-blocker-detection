import {createElementWithClasses, createElementWithId, QS} from "../helpers/DOM";
import constants from "../constants/index";
import Page from "../page/index";
import Component from "../component/index";

class Popup {
    popup: Element
    header: Element
    body: Element
    footer: Element
    content: Element
    hasCloseButton: boolean
    currentPage: string

    constructor(hasCloseButton: boolean, currentPage?: string) {
       this.hasCloseButton = hasCloseButton;
       this.currentPage = currentPage ?? 'home';
    }

    public init(): void {
        this.popup = createElementWithId("div", constants.popup.id);
        this.content = createElementWithClasses("div", constants.popup.contentClasses);
        this.header = createElementWithClasses("div", [constants.popup.headerClass]);
        this.body = createElementWithClasses("div", [constants.popup.bodyClass]);
        this.footer = createElementWithClasses("div", [constants.popup.footerClass]);

        this.prepareContentStructure()
    }

    protected prepareContentStructure(): void {
        let component = new Component();
        this.header.innerHTML = component.renderHeader();
        this.footer.innerHTML = component.renderFooter();

        this.content.appendChild(this.header);
        this.content.appendChild(this.body);
        this.content.appendChild(this.footer);

        this.popup.appendChild(this.content);

        this.pageRender();
    }

    protected pageRender(): void {
        let page = new Page();

        switch (this.currentPage) {
            case constants.pages.home:
                this.body.innerHTML = page.renderHome();
                break;
            case constants.pages.turnOffAdBlocker:
                this.body.innerHTML = page.renderTurnOffAdBlocker();
                break;
            default:
                console.error("[404] Page not found!")
        }

        if (this.hasCloseButton) {
            this.content.appendChild(this.generateCloseButton())
        }

        document.body.appendChild(this.popup);

        this.dispatchEvents();
    }

    protected generateCloseButton(): Element {
        let closeBtn = createElementWithClasses("div", [constants.popup.closeButtonClass]);
        closeBtn.innerHTML = "&times";

        return closeBtn;
    }

    protected dispatchEvents(): void {
        QS(`.${constants.popup.closeButtonClass}`) ? QS(`.${constants.popup.closeButtonClass}`).addEventListener("click", () => this.closeModal(), true) : null;
        QS(`#${constants.pages.turnOffAdBlocker}`) ? QS(`#${constants.pages.turnOffAdBlocker}`).addEventListener("click", () => this.changePage(constants.pages.turnOffAdBlocker), true) : null;
        QS(`.${constants.popup.backButtonClass}`) ? QS(`.${constants.popup.backButtonClass}`).addEventListener("click", (evt) => this.returnBack(evt), true) : null;
    }

    protected detachEvents(): void {
        QS(`.${constants.popup.closeButtonClass}`) ? QS(`.${constants.popup.closeButtonClass}`).removeEventListener("click", () => this.closeModal(), true) : null;
        QS(`#${constants.pages.turnOffAdBlocker}`) ? QS(`#${constants.pages.turnOffAdBlocker}`).removeEventListener("click", () => this.changePage(constants.pages.turnOffAdBlocker), true) : null;
        QS(`.${constants.popup.backButtonClass}`) ? QS(`.${constants.popup.backButtonClass}`).removeEventListener("click", (evt) => this.returnBack(evt), true) : null;
    }

    protected changePage(page: string): void {
        console.log(page)
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
        QS(`#${constants.popup.id}`).remove();
    }
}

export default Popup;
