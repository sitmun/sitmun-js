import {Cartography} from "./cartography";

/**
 * Geographic Information Permissions.
 */
export type CartographyPermission = {
    /**
     * Identifier.
     */
    id: number,
    /**
     * Permissions name.
     */
    name: string,
    /**
     * The geographic information member of this permission.
     */
    members: Cartography[]
}