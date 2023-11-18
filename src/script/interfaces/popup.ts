import { IDetection } from "./detection";

export interface IPopup extends IDetection {
    hasCloseButton?: boolean
    currentPage?: string
}
