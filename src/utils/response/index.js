const helloSchema = require('./schema/hello.json');
const hobbiesSchema = require('./schema/hobbies.json');
const thanksSchema = require('./schema/thanks.json');

module.exports = {
  errorResponseMsg: (res, status, message, data) => res.status(status).json({
    status: 'error',
    message,
    data
  }),
  
  successResponseMsg: (res, status = 200, data) => res.status(status).json(data),
  helloSchema,
  hobbiesSchema,
  thanksSchema,
}
