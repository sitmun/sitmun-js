import {Background} from "./background";

/**
 * Relationship between applications and backgrounds.
 */
export type ApplicationBackground = {
    /**
     * Background.
     */
    background: Background,
    /**
     * Order of preference.
     * It can be used for sorting the list of backgrounds in a view.
     */
    order?: number
}