# logrocket-expose-session

Place your logrocket session id on the window, so other applications can access it.

## Usage

```
LogRocket.init(config.LOGROCKET_API_KEY);
logrocketExposeSession(LogRocket);
```

You can access it with `window.logrocketSessionId`
