exports.logrocketExposeSession = function (LogRocket) {
  LogRocket.getSessionURL((sessionURL) => {
    window.logrocketSessionURL = sessionURL;
  });
};
