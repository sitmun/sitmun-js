import {UserConfiguration} from "./userconfiguration";

/**
 * Short description of a territorial entity.
 */
export type TerritoryBrief = {
    /**
     * Identifier.
     */
    id: number,
    /**
     * Name.
     */
    name: string,
    /**
     * User with a role that can access to this territory.
     */
    userConfigurations: UserConfiguration[],
}
