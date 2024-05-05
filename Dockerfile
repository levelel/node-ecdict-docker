# 使用官方的 Node.js 的 Docker 镜像
FROM node:22

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装 jsonlint 用于验证 JSON 文件
RUN npm install -g jsonlint

# 使用 jsonlint 检查 package.json 的格式
RUN jsonlint package.json

# 安装项目依赖
RUN npm install

# 复制项目文件到工作目录
COPY . .

# 指定卷，用户可以在运行容器时指定卷的具体路径
VOLUME /usr/src/app/db

# 暴露容器端口
EXPOSE 17830

# 运行应用程序
CMD ["node", "server.js"]