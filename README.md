# Image Snatcher - 网页图片批量抓取工具

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Chrome](https://img.shields.io/badge/chrome-%3E%3D88-orange.svg)

一个强大的 Chrome 浏览器扩展，用于从网页上批量抓取和下载图片。支持多种图片类型，包括普通图片、CSS背景图片和Canvas画布。

## ✨ 主要特性

### 🎯 智能图片捕获
- **IMG标签图片** - 抓取网页中的 `<img>` 标签图片
- **CSS背景图片** - 提取CSS中的背景图片资源
- **Canvas画布** - 捕获Canvas元素生成的图片
- **智能去重** - 自动过滤重复的图片URL

### 🚀 高效批量处理
- **批量选择** - 支持多选图片进行批量操作
- **一键全选/清空** - 快速选择或取消选择所有图片
- **智能过滤** - 按关键词搜索图片（支持标题、描述和URL）
- **尺寸控制** - 设置最小图片尺寸过滤条件

### 📦 便捷下载功能
- **ZIP打包下载** - 将选中的图片打包成ZIP文件
- **质量压缩** - 支持图片压缩选项，节省存储空间
- **原图保持** - 可选择保持原始图片质量

### 🎨 现代化界面
- **响应式设计** - 适配不同屏幕尺寸
- **深色模式** - 支持明暗主题切换
- **直观操作** - 简洁易用的用户界面

## 🛠️ 技术栈

- **前端框架**: React 19 + TypeScript
- **构建工具**: Vite 7
- **UI组件库**: Mantine UI
- **样式方案**: Styled Components
- **扩展开发**: CRXJS Vite Plugin
- **Chrome API**: Manifest V3

## 📋 系统要求

- **Chrome浏览器**: 版本 88 或更高
- **操作系统**: Windows 7+ / macOS 10.12+ / Linux

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```
启动开发服务器，自动监听文件变化。

### 构建生产版本
```bash
npm run build
```
构建优化后的生产版本。

### 加载扩展

1. 打开 Chrome 浏览器
2. 访问 `chrome://extensions/`
3. 开启右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择项目中的 `dist` 目录

## 📖 使用指南

### 基本使用流程

1. **打开目标网页** - 在任意网页上点击扩展图标
2. **选择抓取类型** - 选择要抓取的图片类型（IMG/CSS/Canvas）
3. **开始抓取** - 点击"抓取图片"按钮
4. **选择图片** - 在列表中选择需要下载的图片
5. **下载图片** - 选择是否压缩后下载

### 高级功能

- **关键词搜索**: 在搜索框中输入关键词快速定位图片
- **批量操作**: 使用全选/清空按钮快速选择图片
- **质量设置**: 下载时可选择压缩质量（0.1-1.0）

### 支持的图片类型

| 类型 | 说明 | 示例 |
|------|------|------|
| IMG | HTML img标签图片 | `<img src="image.jpg">` |
| CSS | CSS背景图片 | `background-image: url(...)` |
| Canvas | Canvas画布内容 | `<canvas>` 元素 |

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发环境设置

1. Fork 本项目
2. 克隆到本地: `git clone https://github.com/zhedh/image-snatcher-extension.git`
3. 安装依赖: `npm install`
4. 创建功能分支: `git checkout -b feature/new-feature`
5. 提交更改: `git commit -am 'Add new feature'`
6. 推送分支: `git push origin feature/new-feature`
7. 创建 Pull Request

### 代码规范

- 使用 TypeScript 进行类型检查
- 遵循 ESLint 配置的代码规范
- 提交前运行 `npm run build` 确保构建成功

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙋‍♂️ 常见问题

### Q: 为什么抓取不到图片？
A: 请确保：
- 在普通网页上使用（不支持Chrome商店等特殊页面）
- 选择了正确的图片类型
- 图片尺寸符合最小要求

### Q: 下载的图片质量如何？
A: 支持原图质量下载或自定义压缩比例（0.1-1.0）。

### Q: 支持哪些图片格式？
A: 支持所有浏览器支持的图片格式，包括 JPEG、PNG、GIF、WebP 等。

### Q: 会有图片丢失吗？
A: 插件会自动过滤无效或重复的图片，确保下载的图片完整可用。

## 📞 联系我们

- 项目主页: [GitHub Repository](https://github.com/zhedh/image-snatcher-extension)
- 问题反馈: [Issues](https://github.com/zhedh/image-snatcher-extension/issues)
- 功能请求: [Discussions](https://github.com/zhedh/image-snatcher-extension/discussions)

---

**享受高效的网页图片抓取体验！** 🎉