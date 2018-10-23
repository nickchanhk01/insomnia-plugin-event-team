# insomnia-plugin-auth-jwt

Attach an auth header generated per request

## environment variable

add these fields into your environment config to enable the plugin

```json
"FRESH_AUTH_JWT": {
  "CLIENT_ID": "<your client id>",
  "SECRET": "<your SECRET>",
  "ISSUER": "<optional>"
}
```

## Custom build

This package is **not published** to npm yet, please build your own in OS corresponding folder

- MacOS: `~/Library/Application\ Support/Insomnia/plugins/`
- Windows: `%APPDATA%\Insomnia\plugins\`
- Linux: `$XDG_CONFIG_HOME/Insomnia/plugins/` or `~/.config/Insomnia/plugins/`

### How to build

1. `yarn`
