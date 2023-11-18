export enum UserAction {
    Click = "click",
    Hover = "hover",
    Submit = "submit",
    Scroll = "scroll",
    Close = "close",
    Input = "input",
    View = "view",
    Download = "download",
    Share = "share",
    Expand = "expand",
    Collapse = "collapse",
    Play = "play",
    Pause = "pause",
    Navigation = "navigation"
}

export interface UserVisitRequestBody {
    adblock_user: boolean;
    campaign_id: number;
}

export interface UserInteractionRequestBody {
    session?: string;
    timestamp?: Date;
    interaction_type: UserAction;
    object_id: string;
    additional_data: string;
    campaign_id: number;
}
