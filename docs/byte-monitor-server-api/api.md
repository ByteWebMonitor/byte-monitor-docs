---
title: byte-monitor-jssdk v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

# byte-monitor-jssdk

> v1.0.0

## error

### POST x分钟内错误数

POST /error/getRecentXMinNums

> Body 请求参数

```json
{
  "type": "object",
  "properties": {}
}
```

#### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|

> 返回示例

> 成功

```json
{
  "code": 20000,
  "nums": 1
}
```

#### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

#### 返回数据结构

### POST 记录列表分页获取

POST /error/getAllItemList

> Body 请求参数

```json
{
  "type": "object",
  "properties": {}
}
```

#### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|

> 返回示例

#### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

#### 返回数据结构

## device

### POST x分钟内UV统计

POST /device/uv

> 返回示例

#### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

#### 返回数据结构

### POST x分钟内容浏览器/操作系统统计

POST /device/

> 返回示例

#### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

#### 返回数据结构

### POST 记录列表分页获取

POST /device/getAllItemList

> Body 请求参数

```json
{
  "type": "object",
  "properties": {}
}
```

#### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|

> 返回示例

#### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

#### 返回数据结构

### POST x分钟内容设备记录数

POST /device/getRecentXMinNums

> Body 请求参数

```json
{
  "type": "object",
  "properties": {}
}
```

#### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|

> 返回示例

> 成功

```json
{
  "code": "20000 \"nums\":1"
}
```

#### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

#### 返回数据结构

## performance

### POST 记录列表分页获取

POST /performance/getAllItemList

> Body 请求参数

```json
{
  "type": "object",
  "properties": {}
}
```

#### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|

> 返回示例

#### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

#### 返回数据结构

### POST x分钟内性能记录数

POST /performance/getRecentXMinNums

> Body 请求参数

```json
{
  "type": "object",
  "properties": {}
}
```

#### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object|false|none|

> 返回示例

> 成功

```json
{
  "code": "20000 \"nums\":1"
}
```

#### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

#### 返回数据结构

## 数据模型

