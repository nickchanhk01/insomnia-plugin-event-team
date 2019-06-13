# insomnia-plugin-auth-jwt

## environment variable

add these fields into your environment config to enable the plugin

```json5
"EC_ADD_EVENT_TOKEN": {
  "once": 1,
  "clientId": "",
  "accountId": 123456,
  "secret": ""
}
```

## Custom build

This package is **not published** to npm yet, please build your own in OS corresponding folder

- MacOS: `~/Library/Application\ Support/Insomnia/plugins/`
- Windows: `%APPDATA%\Insomnia\plugins\`
- Linux: `$XDG_CONFIG_HOME/Insomnia/plugins/` or `~/.config/Insomnia/plugins/`

### How to build

1. `yarn`
