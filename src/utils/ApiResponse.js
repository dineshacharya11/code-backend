class ApiResponse{
    constructor (statusCode,data,message = "Success"){
        this.statusCode = statusCode 
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}



export { ApiResponse }
/*  server status code (HTTP response status code)
1.Informational response (100-199)
2.Successful response (200-299)
3.Redirection messages (300-399)
4.Client error response (400-499)
5.Server error response (500-599)
*/