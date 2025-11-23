#!/bin/bash
# 远程服务器重新部署脚本
# 在远程服务器上执行此脚本

echo "🚀 开始重新部署..."

# 1. 删除现有目录
echo "📁 删除现有目录..."
cd ~
rm -rf ssdramsen

# 2. 重新克隆仓库
echo "📥 重新克隆仓库..."
git clone https://github.com/niuroumiantt/ssdramsen.git

# 3. 部署到 Nginx
echo "📦 部署文件到 Nginx..."
sudo cp -r ~/ssdramsen/new-website/* /var/www/html/

# 4. 设置权限
echo "🔐 设置文件权限..."
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/

# 5. 重新加载 Nginx
echo "🔄 重新加载 Nginx..."
sudo systemctl reload nginx

# 6. 验证部署
echo "✅ 验证部署..."
if [ -f "/var/www/html/index.html" ]; then
    echo "✅ index.html 存在"
fi
if [ -f "/var/www/html/products/data-center/d5.html" ]; then
    echo "✅ d5.html 存在"
fi

echo ""
echo "🎉 部署完成！"
echo "📱 请在手机浏览器中测试："
echo "   - http://ssdrams.com/products/data-center/d5.html"
echo "   - 检查右上角是否有三条横线的菜单按钮"

