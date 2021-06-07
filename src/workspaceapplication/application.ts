import {ApplicationBackground} from "./applicationbackground";

/**
 * Description of a SITMUN application
 */
export type Application = {
    /**
     * Application unique identifier
     */
    id: number,
    /**
     * Application name.
     */
    name: string,
    /**
     * Application type (external or internal)
     */
    type: string,
    /**
     * Title to be shown in the browser and in the application when it is internal.
     */
    title?: string,
    /**
     * Scales to be used in this application when it is internal.
     */
    scales?: string[],
    /**
     * Projection to be used in this application when it is internal.
     */
    srs?: string,
    /**
     * Background maps
     */
    background: ApplicationBackground[],
}
