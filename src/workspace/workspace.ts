import {TerritoryBrief} from "./territory";
import {ConfigurationParameter} from "../common/configuration";

/**
 * A user workspace.
 *
 * If the user is not logged is the public user.
 */
export type Workspace = {
    /**
     * Configuration parameters.
     */
    config: ConfigurationParameter[],
    /**
     * Territories that a user can access.
     */
    territories: TerritoryBrief[],
}
