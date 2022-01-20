const { createResponse, getAllResponse } = require('../repositories/response-repo');
const {
  errorResponseMsg, slackSuccessResponse, helloSchema,
  thanksSchema, succcesResponseMsg, hobbiesSchema
} = require('../utils/response');

module.exports = {
  sayHello: async (req, res) => {
    try {
      const hello = helloSchema;
      return slackSuccessResponse(res, 200, hello);
    } catch (err) {
      console.log(err);
      return errorResponseMsg(res, 500, 'Internal server error');
    }
  },

  message: async (req, res) => {
    try {
      const body = JSON.parse(req.body.payload);
      const { actions, user, type } = body;

      const values = [];
      actions[0].selected_options.forEach((selected) => {
        values.push(selected.value);
      });

      let response;
      const userResponse = {
        response: values,
        name: user.name,
        question: ''
      };
      if (type === 'interactive_message') {
        userResponse.question = 'Welcome. How are you doing?';
        response = hobbiesSchema;
      } else {
        userResponse.question = 'What are your favorite hobbies?';
        response = thanksSchema;
      }

      await createResponse(userResponse);
      return slackSuccessResponse(res, 200, response);
    } catch (err) {
      console.log(err);
      return errorResponseMsg(res, 500, 'Internal Server Error');
    }
  },

  getUserResponse: async (req, res) => {
    try {
      const responses = await getAllResponse();
      return succcesResponseMsg(res, 200, 'Successfully fetched responses', responses);
    } catch (err) {
      return errorResponseMsg(res, 500, 'Internal Server Error');
    }
  },

  notFound: (req, res) => errorResponseMsg(res, 404, 'Not Found')
};
