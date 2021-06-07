import {Envelope} from "./envelope";
import {TerritoryType} from "./territorytype";
import {TerritoryGroupType} from "./territorygrouptype";

/**
 * Territorial Entity,
 */
export type Territory = {
    /**
     * Identifier.
     */
    id: number,
    /**
     * Name.
     */
    name: string,
    /**
     * Territorial authority name.
     */
    territorialAuthorityName?: string,
    /**
     * Territorial authority address.
     */
    territorialAuthorityAddress?: string,
    /**
     * Territorial authority email.
     */
    territorialAuthorityEmail?: string,
    /**
     * Link to the territorial authority logo.
     */
    territorialAuthorityLogo?: string,
    /**
     * Territory scope.
     */
    scope?: string,
    /**
     * Bounding box of the territory.
     */
    extent?: Envelope,
    /**
     * Territory typology.
     */
    type?: TerritoryType,
    /**
     * Territory group typology.
     */
    groupType?: TerritoryGroupType
}
