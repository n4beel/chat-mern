const response = {
  onSuccess: (res, msg, result) => {
    res.status(201).send({
      responseCode: 201,
      responseMessage: msg,
      result: result,
    });
  },
  onFail: (res, msg, result = "") => {
    res.status(500).send({
      responseCode: 500,
      responseMessage: msg,
      result: result,
    });
  },
};

module.exports = response;
