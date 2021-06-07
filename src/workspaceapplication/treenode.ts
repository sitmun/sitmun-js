/**
 * Tree Node
 */
export type TreeNode = {
    /**
     * Identifier
     */
    id: number,
    /**
     * Name of the node.
     */
    name: string,
    /**
     * Id of the tree node that is the parent of this node
     */
    parentId?: number,
    /**
     * Id of the cartography linked to this node
     */
    cartographyId?: number,
}