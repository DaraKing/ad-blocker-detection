import { DetectionOptions } from "./detection";

export interface PopupOptions extends DetectionOptions {
    hasCloseButton?: boolean
    currentPage?: string
}
