export interface IUpdateBookRequestDTO{
    id?:string
    title?:string
    authors?:string[] | string
    publisher?:string
    cover_url?:string
}