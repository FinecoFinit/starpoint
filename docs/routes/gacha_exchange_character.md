# /latest/api/index.php/gacha/exchange_character
                       
## Request
### Headers
```
Host: na.wdfp.kakaogames.com
Accept-Encoding: deflate, gzip
Accept: text/xml, application/xml, application/xhtml+xml, text/html;q=0.9, text/plain;q=0.8, text/css, image/png, image/jpeg, image/gif;q=0.8, application/x-shockwave-flash, video/mp4;q=0.9, flv-application/octet-stream;q=0.8, video/x-flv;q=0.7, audio/mp4, application/futuresplash, */*;q=0.5
User-Agent: Mozilla/5.0 (Android; U; en-US) AppleWebKit/533.19.4 (KHTML, like Gecko) AdobeAIR/51.0
x-flash-version: 51,0,1,1
Connection: Keep-Alive
Referer: app:/worldflipper_android_release.swf
Content-Type: application/x-www-form-urlencoded
PARAM: 3a1a2ec624fd50bb8999bcf0b71d407571514ee6
GAME-APP-ID: 297417490
SHORT_UDID: 461173975
UDID: FD191144-2525-4EA6-09AA-667DDBC584BA111A
RES_VER: 2.1.122
COUNTRY_CODE: us
APP_ID: 561429
KAKAO_PID: 984521158255
DEVICE_LANG: en
DEVICE_NAME: SM-S916U 14
APP_VER: 0.0.81
DEVICE: 2
Content-Length: 76
```

### Body
```
{
  "character_id": 151153,
  "api_count": 116,
  "gacha_id": 157,
  "viewer_id": 297417490
}
```

## Response
### Headers
```
Date: Sat, 29 Jun 2024 19:54:25 GMT
Content-Type: application/x-msgpack
Transfer-Encoding: chunked
Connection: keep-alive
Server: nginx
x-php-processing-time: 0.1793
x-result-code: 1
param: 166433f431ded0ecdcb9b9b4f3dea1f9a3afe33f
```

### Body
```
{
  "data_headers": {
    "force_update": false,
    "asset_update": false,
    "short_udid": 461173975,
    "viewer_id": "<redacted>",
    "servertime": 1719690865,
    "result_code": 1
  },
  "data": {
    "gacha_info_list": [
      {
        "gacha_id": 157,
        "is_daily_first": true,
        "is_account_first": false,
        "gacha_exchange_point": 0
      }
    ],
    "character_list": [
      {
        "viewer_id": "<redacted>",
        "character_id": 151153,
        "entry_count": 1,
        "exp": 0,
        "exp_total": 0,
        "bond_token_list": [
          {
            "mana_board_index": 1,
            "status": 0
          },
          {
            "mana_board_index": 2,
            "status": 0
          }
        ],
        "mana_board_index": 1,
        "create_time": "2024-06-11 07:33:19",
        "update_time": "2024-06-30 04:54:25",
        "join_time": "2024-06-30 04:54:25"
      }
    ],
    "encyclopedia_info": {
      "115115301": {
        "read": false
      }
    },
    "mail_arrived": false
  }
}
```
