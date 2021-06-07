/**
 * Service.
 */
import {ServiceParameter} from "./serviceparameter";

export type Service = {
    /**
     * Identifier.
     */
    id: number,
    /**
     * Name.
     */
    name: string,
    /**
     * Service endpoint.
     */
    serviceURl: string,
    /**
     * Supported SRS.
     */
    supportedSRS: string[],
    /**
     * Link to the legend.
     */
    legendURL?: string,
    /**
     * Link to the get information endpoint.
     */
    getInformationURL?: string,
    /**
     * Service protocol.
     */
    protocol: string,
    /**
     * Service parameters.
     */
    parameters: ServiceParameter[],
}