/**
 * Tree.
 */
import {TreeNode} from "./treenode";

export type Tree = {
    /**
     * Identifier.
     */
    id: number,
    /**
     * Name.
     */
    name: string,
    /**
     * Representative image or icon.
     */
    image?: string,
    /**
     * Description.
     */
    description?: string,
    /**
     * Tree nodes.
     */
    allNodes: TreeNode[]
}