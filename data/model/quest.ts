export default interface Quest {
    id: number,
    statement: string,
    options: string[],
    response: number
}