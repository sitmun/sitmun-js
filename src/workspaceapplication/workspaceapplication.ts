import {ConfigurationParameter} from "../common/configuration";
import {Territory} from "./territory";
import {Application} from "./application";
import {Role} from "./role";

/**
 * A user workspace in an application in a territory.
 *
 * If the user is not logged is the public user.
 */
export type WorkspaceApplication = {
    config: ConfigurationParameter[],
    territory: Territory,
    application: Application,
    roles: Role[]
}
