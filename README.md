# node-ecdict

docker for [ECDICT](https://github.com/skywind3000/ECDICT)
based on [Node.js Interface for ECDICT](https://github.com/HiuYanChong/node-ecdict)

[![npm version](https://img.shields.io/npm/v/node-ecdict.svg)](https://www.npmjs.com/package/node-ecdict) [![Build Status](https://travis-ci.org/HiuYanChong/node-ecdict.svg?branch=master)](https://travis-ci.org/HiuYanChong/node-ecdict) [![codecov](https://codecov.io/gh/HiuYanChong/node-ecdict/branch/master/graph/badge.svg)](https://codecov.io/gh/HiuYanChong/node-ecdict)

## 简介
支持 POST and GET
并可以用docker启动
数据库已替换成207MB的[ecdict-sqlite-28.zip](https://github.com/skywind3000/ECDICT/releases/download/1.0.28/ecdict-sqlite-28.zip)

## 使用方法
不用docker
```bash
node server.js
```
使用docker
```bash
docker run -p 17830:17830 --restart=yes -d levelel/node-ecdict
```
（可选）使用自己的字典文件`ecdict.sqlite`：替换`/path/to/localfolder`为自己的文件夹，并把自己的字典文件重命名为`ecdict.sqlite`。
```bash
docker run -p 17830:17830 -v /path/to/localfolder:/usr/src/app/db --restart=yes -d levelel/node-ecdict
```

打开浏览器，访问：
```html
http://localhost:17830/api/search?q=cool
```
```json
[
  {
    "id": 664784,
    "sw": "cool",
    "word": "cool",
    "phonetic": "ku:l",
    "definition": [
      "n. the quality of being at a refreshingly low temperature",
      "v. make cool or cooler",
      "v. loose heat",
      "v. lose intensity"
    ],
    "translation": [
      "n. 凉爽, 凉爽的空气",
      "a. 凉爽的, 冷淡的, 冷静的",
      "vi. 冷却, 平息",
      "vt. 使冷却, 使平静"
    ],
    "pos": [
      "n:3",
      "r:3",
      "j:70",
      "v:24"
    ],
    "collins": 4,
    "oxford": 1,
    "tag": [
      "zk",
      "gk"
    ],
    "bnc": 2478,
    "frq": 1451,
    "exchange": [
      "i:cooling",
      "d:cooled",
      "3:cools",
      "p:cooled",
      "s:cools",
      "r:cooler",
      "t:coolest"
    ],
    "detail": null,
    "audio": ""
  }
]
```

```html
http://localhost:17830/api/batch-search?q=example,item
```
```json
[
  {
    "id": 1028356,
    "sw": "example",
    "word": "example",
    "phonetic": "ig'zæmpl",
    "definition": [
      "n. an item of information that is typical of a class or group",
      "n. punishment intended as a warning to others"
    ],
    "translation": [
      "n. 例子, 样本, 实例",
      "[化] 实例"
    ],
    "pos": [
      "n:100"
    ],
    "collins": 5,
    "oxford": 1,
    "tag": [
      "zk",
      "gk",
      "ielts"
    ],
    "bnc": 511,
    "frq": 852,
    "exchange": [
      "s:examples"
    ],
    "detail": null,
    "audio": ""
  },
  {
    "id": 1565593,
    "sw": "item",
    "word": "item",
    "phonetic": "'aitәm",
    "definition": [
      "n. a distinct part that can be specified separately in a group of things that could be enumerated on a list",
      "n. a whole individual unit; especially when included in a list or collection",
      "r. (used when listing or enumerating items) also"
    ],
    "translation": [
      "n. 项目, 条款, 一则, 项",
      "[计] 项"
    ],
    "pos": [
      "r:1",
      "n:99"
    ],
    "collins": 4,
    "oxford": 1,
    "tag": [
      "cet4",
      "ky",
      "ielts"
    ],
    "bnc": 950,
    "frq": 1031,
    "exchange": [
      "s:items"
    ],
    "detail": null,
    "audio": ""
  }
]
```
## License

MIT