import {Cartography} from "./cartography";
import {Service} from "./service";
import {TaskGroup} from "./taskgroup";
import {TaskType} from "./tasktype";
import {TaskUI} from "./taskui";

/**
 * Task.
 */
export type Task = {
    /**
     * Identifier.
     */
    id: number,
    /**
     * Name.
     */
    name: string,
    /**
     * Order of preference.
     * It can be used for sorting the list of backgrounds in a view.
     */
    order: number,
    /**
     * Task properties.
     */
    properties: Map<string, any>,
    /**
     * Associated cartography.
     */
    cartography?: Cartography,
    /**
     * Associated service.
     */
    service?: Service,
    /**
     * Task group.
     */
    group: TaskGroup,
    /**
     * Task type.
     */
    type: TaskType,
    /**
     * Task UI.
     */
    ui: TaskUI
}
