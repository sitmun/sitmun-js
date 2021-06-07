import {Service} from "./service";

/**
 * Geographic information.
 */
export type Cartography = {
    /**
     * Identifier
     */
    id: number,
    /**
     * Name.
     */
    name: string,
    /**
     * Cartography description.
     */
    description?: string,
    /**
     * List of layer identifiers.
     */
    layers: string[],
    /**
     * Minimum scale visibility.
     */
    minimumScale?: number,
    /**
     * Maximum visibility.
     */
    maximumScale?: number,
    /**
     * Cartography order appearance.
     */
    order?: number,
    /**
     * 0 opaque, 100 translucid.
     */
    transparency?: number,
    /**
     * Portrayal service.
     */
    service: Service,
}