import {Envelope} from "./envelope";
import {TerritoryType} from "./territorytype";
import {TerritoryGroupType} from "./territorygrouptype";
import {Point} from "./point";

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
     * Center of the territory.
     */
    center?: Point,
    /**
     * Default zoom level.
     */
    defaultZoomLevel?: number,
    /**
     * Territory typology.
     */
    type?: TerritoryType,
    /**
     * Territory group typology.
     */
    groupType?: TerritoryGroupType
}
