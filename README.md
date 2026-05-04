# 微信小程序项目集合

<div align="center">

**微信小程序项目集合** — 包含多个微信小程序项目的代码仓库

[![WeChat](https://img.shields.io/badge/WeChat-MiniProgram-07C160.svg)](https://developers.weixin.qq.com/miniprogram/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## Features

- **快修小程序** — 设备报修和维修进度查询系统
- **基础小程序模板** — 包含云函数、组件、页面等基础结构
- **云开发支持** — 支持微信小程序云开发
- **模块化设计** — 易于扩展和二次开发

## Project Structure

```
wechat-miniprograms/
├── fast-new/                    # 快修小程序
│   ├── fast-repair/             # 快修前端代码
│   ├── project.config.json      # 项目配置
│   └── project.private.config.json
├── miniprogram-1/               # 基础小程序模板
│   ├── cloudfunctions/          # 云函数
│   ├── components/              # 自定义组件
│   ├── pages/                   # 页面文件
│   ├── utils/                   # 工具函数
│   ├── project.config.json      # 项目配置
│   └── sitemap.json             # 站点地图
└── README.md                    # 项目说明文档
```

## Quick Start

### Prerequisites

- 微信开发者工具
- 微信小程序账号 (如需云开发功能)

### Run

1. 下载并安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

2. 克隆仓库
```bash
git clone https://github.com/beahanbarry291994-cmd/wechat-miniprograms.git
```

3. 在微信开发者工具中导入项目
   - 选择对应的子项目目录
   - 填入你的小程序 AppID (或使用测试号)

4. 开始开发和调试

## Projects

### 1. fast-new (快修小程序)

快修报修系统的微信小程序前端

- **路径**: `fast-new/fast-repair/`
- **功能**: 设备报修、维修进度查询
- **技术**: 微信小程序原生开发

### 2. miniprogram-1 (基础小程序)

微信小程序基础模板

- **路径**: `miniprogram-1/`
- **功能**: 包含云函数、组件、页面等基础结构
- **技术**: 微信小程序云开发

## Development

- 每个子项目为独立的小程序项目
- 可根据需要选择性导入
- 云函数需要在云开发控制台部署

## License

各子项目遵循各自的许可证
