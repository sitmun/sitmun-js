import {CartographyPermission} from "./cartographypermission";

/**
 * Background.
 */
export type Background = {
    /**
     * Name.
     */
    name: string,
    /**
     * Representative image or icon.
     */
    image?: string,
    /**
     * Cartography group used as background.
     */
    cartographyGroup: CartographyPermission,
}