import {Application} from "./application";

/**
 * Role in application.
 *
 * Can be shared between applications.
 */
export type Role = {
    /**
     * Identifier.
     */
    id: number,
    /**
     * Name.
     */
    name: string,
    /**
     * Related applications.
     */
    applications: Application[],
}
