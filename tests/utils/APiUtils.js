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
            const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order");
    {
        data : orderPayLoad,
        headers: {
                    'Authorization' : token,
                    'Content-Type' : 'application/json'
        };

    }
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    orerId = orderResponseJson.orders[0];
    return orderId;


    }
}
module.exports = {APIUtils};

