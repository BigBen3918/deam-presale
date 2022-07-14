
declare interface ServerResponse {
    result?: any
    error?: number
}

declare interface ResultType {
    err: string,
    result: string
}

interface WalletTypes extends NewtxsResponseType {
    updated: number
    loading?: boolean
    userid: number
    currentPage: string
}
interface useStoreTypes extends WalletTypes {
    update(payload: { [key: string]: string | number | boolean | PendingTypes | TxTypes | CoinTypes })
    call(url: string, params?: any): Promise<ServerResponse | null>
}
