'use strict'

const { createResponse } = require("../repositories/response-repo");
const { errorResponseMsg, successResponseMsg, helloSchema, hobbiesSchema, thanksSchema } = require("../utils/response")

module.exports = {
    sayHello: async (req, res) =>{
        try{
            const hello = helloSchema;
            return successResponseMsg(res, 200, hello);
        } catch (err) {
            console.log(err);
            return errorResponseMsg(res, 500, 'Internal server error');
        }
    },

    message: async (req, res) => {
        try {
           const body = JSON.parse(req.body.payload);
           const { actions, user, type } = body;

           let values = [];
           actions[0].selected_options.forEach(selected => {
              values.push(selected.value);
           });

            let response;
            let userResponse = {
                response: values,
                name: user.name,
                question:'',
            };
           if(type == "interactive_message") {
                userResponse.question = 'Welcome. How are you doing?';
                response = hobbiesSchema;
           } else {
                userResponse.question = 'What are your favorite hobbies?';
                response = thanksSchema;
           }

            await createResponse(userResponse);
            return successResponseMsg(res, 200, response);
        } catch (err) {
            console.log(err);
            return errorResponseMsg(res, 500, 'Internal Server Error');
        }
    },

    notFound: (req, res) => {
        return errorResponseMsg(res, 404, 'Not Found');
    }
}