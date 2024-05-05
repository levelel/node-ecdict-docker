const express = require('express');
const search = require('./index.js').search;
const batchSearch = require('./index.js').batchSearch;
const app = express();

app.use(express.json()); // 支持JSON格式的请求

// 为单个单词搜索设置路由
app.post('/api/search', (req, res) => {
  const keyword = req.body.keyword;
  search(keyword)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));
});

app.get('/api/search', (req, res) => {
    const keyword = req.query.q; // 从查询参数中获取关键词
    search(keyword)
      .then(result => res.json(result))
      .catch(err => res.status(500).send(err));
  });

// 为批量搜索设置路由
app.post('/api/batch-search', (req, res) => {
  const kwdList = req.body.kwdList;
  batchSearch(kwdList)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));
});

app.get('/api/batch-search', (req, res) => {
    const kwdList = req.query.q ? req.query.q.split(',') : [];
    batchSearch(kwdList)
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err));
});

// 定义一个端口号，我们使用17830
const PORT = process.env.PORT || 17830;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});