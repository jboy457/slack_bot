const Response = require("../models/response-model")

module.exports = {
     createResponse: async (newResponse) => {
        const response = await Response.create(newResponse);
        return response;
    }
}