export interface FetchInputProps<T>{
    serviceFun : () =>Promise<T[]>
}