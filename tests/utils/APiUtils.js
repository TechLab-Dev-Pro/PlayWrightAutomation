class APIUtils
{

    constructor(apiContext)
    {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }

    async getToken()
    {
            const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayLoad
            } )//200,201,2
            const loginResponseJson = await loginResponse.json();
            token = loginResponseJson.token;
            console.log(token);
            return token;
    }


    async createOrder()
    {
            let response = {};
            response.token = await this.getToken();
            const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order");
    {
        data : orderPayLoad,
        headers: {
                    'Authorization' : response.token,
                    'Content-Type' : 'application/json'
        };

    }
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    const orderId = orderResponseJson.orders[0];
    response.orderId = orderId;
    return response;


    }
}
module.exports = {APIUtils};

