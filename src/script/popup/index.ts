import { createElementWithClasses, createElementWithId, QS } from "../helpers/DOM";
import constants from "../constants/index";
import Page from "../page/index";
import Component from "../component/index";
import Detection from "../detection";
import { PopupOptions } from "../interfaces/popup";
import { UserAction, UserInteractionRequestBody } from "../interfaces/api";
import { storeUserInteraction } from "../api/services";

class Popup extends Detection {
    popup: HTMLElement
    header: HTMLElement
    body: HTMLElement
    footer: HTMLElement
    content: HTMLElement
    hasCloseButton: boolean
    currentPage: string

    constructor(options: PopupOptions) {
       super(options);
       this.hasCloseButton = options.hasCloseButton;
       this.currentPage = options.currentPage ?? 'home';
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
        if (this.hasCloseButton) {
            this.content.appendChild(this.generateCloseButton())
        }

        this.popup.appendChild(this.content);

        this.pageRender();
    }

    protected pageRender(): void {
        let page = new Page();

        switch (this.currentPage) {
            case constants.pages.home:
                this.body.innerHTML = page.renderHome(this.campaign);
                break;
            case constants.pages.turnOffAdBlocker:
                this.body.innerHTML = page.renderTurnOffAdBlocker(this.campaign);
                break;
            default:
                console.error("[404] Page not found!")
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
        QS(`.${constants.popup.closeButtonClass}`) ? QS(`.${constants.popup.closeButtonClass}`).addEventListener("click", (evt) => this.closeModal(evt), true) : null;
        QS(`#${constants.popup.proceedWithoutTurning}`) ? QS(`#${constants.popup.proceedWithoutTurning}`).addEventListener("click", (evt) => this.closeModal(evt), true) : null;
        QS(`#${constants.pages.turnOffAdBlocker}`) ? QS(`#${constants.pages.turnOffAdBlocker}`).addEventListener("click", (evt) => this.changePage(constants.pages.turnOffAdBlocker, evt), true) : null;
        QS(`.${constants.popup.backButtonClass}`) ? QS(`.${constants.popup.backButtonClass}`).addEventListener("click", (evt) => this.returnBack(evt), true) : null;
    }

    protected detachEvents(): void {
        QS(`.${constants.popup.closeButtonClass}`) ? QS(`.${constants.popup.closeButtonClass}`).removeEventListener("click", (evt) => this.closeModal(evt), true) : null;
        QS(`#${constants.popup.proceedWithoutTurning}`) ? QS(`#${constants.popup.proceedWithoutTurning}`).removeEventListener("click", (evt) => this.closeModal(evt), true) : null;
        QS(`#${constants.pages.turnOffAdBlocker}`) ? QS(`#${constants.pages.turnOffAdBlocker}`).removeEventListener("click", (evt) => this.changePage(constants.pages.turnOffAdBlocker, evt), true) : null;
        QS(`.${constants.popup.backButtonClass}`) ? QS(`.${constants.popup.backButtonClass}`).removeEventListener("click", (evt) => this.returnBack(evt), true) : null;
    }

    protected storeInteraction(event: Event, action: UserAction): void {
        if (!event) return;

        const clickedElement = event.target as HTMLElement;
        const id = clickedElement?.id;

        let requestBody: UserInteractionRequestBody = {
            interaction_type: action,
            object_id: id,
            additional_data: "",
            campaign_id: this.campaign.campaign_id
        };

        storeUserInteraction(requestBody);
    }

    protected changePage(page: string, e?: Event): void {
        this.storeInteraction(e, UserAction.Click);
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

        this.changePage(e.target.dataset.src.toString(), e)
    }

    protected closeModal(e?: Event): void {
        this.storeInteraction(e, UserAction.Click);
        this.content = null;

        this.detachEvents();
        QS(`#${constants.popup.id}`).remove();
    }
}

export default Popup;
