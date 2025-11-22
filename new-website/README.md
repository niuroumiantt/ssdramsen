# Solidigm 产品与解决方案网站

这是一个基于原 Solidigm 网站重新设计的网站，专注于产品和解决方案展示。

## 网站结构

```
new-website/
├── index.html                          # 首页
├── assets/
│   ├── css/
│   │   └── main.css                    # 主样式文件
│   ├── js/                             # JavaScript 文件
│   └── images/                         # 图片资源
├── products/
│   └── data-center.html                # 数据中心产品中心页
│   └── data-center/
│       ├── d7.html                     # D7系列页面
│       ├── d5.html                     # D5系列页面
│       ├── d3.html                     # D3系列页面
│       └── d7/
│           ├── ps1010.html             # D7-PS1010 产品详情
│           ├── ps1030.html             # D7-PS1030 产品详情
│           └── ...
└── solutions/
    ├── artificial-intelligence.html    # AI解决方案页面
    └── edge-storage.html               # 边缘存储解决方案页面
```

## 设计特点

### 色彩方案
- **主色调**: #00083f (深紫色)
- **强调色**: #4f00b5 (紫色)
- **背景色**: #f2f2f5 (浅灰色)
- **文字色**: #232323 (深灰色)

### 组件
- **Hero轮播**: 大图背景 + 文字叠加
- **产品卡片**: 图片 + 标题 + 描述 + 规格
- **Blade组件**: 左右布局，图片+文字内容
- **文章卡片**: 缩略图 + 分类标签 + 标题

## 已实现的页面

1. ✅ **首页** (`index.html`)
   - Hero轮播展示PCIe 5.0产品
   - 产品展示区（横向滚动）
   - 解决方案展示
   - 技术洞察文章列表
   - 快速链接

2. ✅ **产品中心页** (`products/data-center.html`)
   - Hero区域
   - 产品系列展示（D7/D5/D3）
   - 产品网格列表
   - AI解决方案推广

3. ✅ **AI解决方案页** (`solutions/artificial-intelligence.html`)
   - AI Hero区域
   - AI工作负载解决方案
   - 推荐产品
   - 未来展望

## 使用方法

### 本地开发
1. 直接在浏览器中打开 `index.html` 文件
2. 或使用本地服务器：
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (需要安装 http-server)
   npx http-server
   ```

### 部署
将所有文件上传到 Web 服务器即可。网站使用相对路径，无需特殊配置。

## 技术栈

- **HTML5**: 语义化标记
- **CSS3**: 自定义样式，响应式设计
- **JavaScript**: Splide.js 用于轮播功能
- **字体**: Google Fonts (Sora)

## 图片资源

网站使用原网站的图片CDN链接：
- `https://s7d9.scene7.com/is/image/Solidigm/...`
- `https://www.solidigm.com/content/dam/...`

## 响应式设计

- **桌面端** (>1024px): 完整布局，多列网格
- **平板端** (768px-1024px): 2列布局
- **移动端** (<768px): 单列布局，简化导航

## 待完善功能

- [ ] 产品详情页完整实现
- [ ] 边缘存储解决方案页面
- [ ] 产品系列页面（D7/D5/D3）
- [ ] 搜索功能
- [ ] 导航菜单下拉功能
- [ ] 更多交互效果

## 注意事项

1. 网站使用原网站的图片CDN，需要网络连接才能正常显示图片
2. 部分功能（如搜索、用户登录）需要后端支持，当前为静态展示
3. 导航菜单的下拉功能需要JavaScript实现（当前为简化版本）

