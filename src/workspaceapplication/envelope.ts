/**
 * Defines a rectangular region of the 2D coordinate plane.
 *
 * It is often used to represent the bounding box of a Geometry,
 * e.g. the minimum and maximum x and y values of the Coordinates.
 */
export type Envelope = {
    minX: number,
    minY: number,
    maxX: number,
    maxY: number,
}
