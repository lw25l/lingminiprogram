# 推送到GitHub指南

## 方法1：使用GitHub Desktop（推荐，最简单）

### 步骤：

1. **下载项目压缩包**
   - 文件：`lingshan-miniprogram-final.tar.gz`（78KB）
   - 解压到本地文件夹

2. **打开GitHub Desktop**
   - 如果没有，从 https://desktop.github.com 下载

3. **添加本地仓库**
   - File → Add Local Repository
   - 选择解压后的 `lingshan-miniprogram` 文件夹

4. **推送到GitHub**
   - 点击 "Publish repository"
   - 确认仓库名称：`lingminiprogram`
   - 点击 "Publish repository"

完成！项目已推送到您的GitHub。

---

## 方法2：使用Git命令行

### 步骤：

1. **下载并解压项目**
```bash
tar -xzf lingshan-miniprogram-final.tar.gz
cd lingshan-miniprogram
```

2. **初始化Git**
```bash
git init
git add .
git commit -m "🎉 Initial commit: 灵山胜境AI数字人智能导游小程序"
```

3. **推送到GitHub**
```bash
git remote add origin https://github.com/lw25l/lingminiprogram.git
git branch -M main
git push -u origin main
```

系统会提示您输入GitHub用户名和密码（或Personal Access Token）。

---

## 方法3：直接在GitHub网页上传

### 步骤：

1. **访问您的仓库**
   - 打开：https://github.com/lw25l/lingminiprogram

2. **上传文件**
   - 点击 "uploading an existing file"
   - 拖拽所有项目文件
   - 点击 "Commit changes"

---

## 📦 项目内容

**压缩包包含：**
- ✅ 60个源代码文件
- ✅ 完整的前端代码（miniprogram/）
- ✅ 完整的后端代码（server/）
- ✅ README.md 文档
- ✅ 快速开始指南
- ✅ 开发文档

**解压后：**
```
lingshan-miniprogram/
├── miniprogram/          # 小程序前端（31个文件）
├── server/               # 后端服务（8个文件）
├── README.md             # 项目文档
├── 快速开始.md           # 快速启动指南
└── ...其他文档
```

---

## 🚀 快速开始

### 1. 导入微信开发者工具
- 打开微信开发者工具
- 选择 `miniprogram` 目录
- 使用测试号或您的AppID
- 点击"编译"预览

### 2. 测试AI导游
进入"智能导游"页面，输入：
- "灵山大佛有多高？"
- "推荐一条游览路线"
- "门票多少钱？"

---

## ⚠️ 注意事项

1. **图片资源需要自行准备**
   - 景点图片：buddha.jpg, palace.jpg等
   - 图标资源：home.png, chat.png等
   - 可临时使用占位图测试

2. **后端服务（可选）**
   - 进入 `server` 目录
   - 运行 `npm install && npm start`
   - 服务将在 http://localhost:3000 运行

---

**需要帮助？**
- GitHub Desktop下载：https://desktop.github.com
- 微信开发者工具：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
