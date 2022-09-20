class HttpException extends Error {
    public status: number
    public message: string

    constructor(status: number, message: string){
        super(message) //這邊的super 就是幫我們使用父類別(Error)的建構函式
        this.status = status
        this.message = message
    }
}

export default HttpException