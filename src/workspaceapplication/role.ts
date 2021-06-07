import {Task} from "./task";
import {CartographyPermission} from "./cartographypermission";
import {Tree} from "./tree";

/**
 * Role.
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
     * Tasks that this role can use.
     */
    tasks: Task[]
    /**
     * Cartographies that this role can use.
     */
    permissions: CartographyPermission[]
    /**
     * Trees that this role can use.
     */
    trees: Tree[]
}