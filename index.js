exports.logrocketExposeSession = function (LogRocket) {
  LogRocket.getSessionURL((sessionURL) => {
    let regex = /\/s\/(.*)(\?)/;
    const matches = regex.exec(sessionURL);
    window.logrocketSessionId = matches[1];
    window.postMessage(
      { type: "logrocket-expose-session", text: matches[1] },
      "*"
    );
  });
};
