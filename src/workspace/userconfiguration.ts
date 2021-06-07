import {Role} from "./role";

/**
 * User role in a territory.
 *
 * The user is the current user.
 * The territory owns this entity.
 *
 * This type is redundant and should be removed form this part of the API.
 */
export type UserConfiguration = {
    /**
     * Identifier
     */
    id: number,
    /**
     * Role.
     */
    role: Role,
}
