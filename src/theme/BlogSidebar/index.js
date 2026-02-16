import React, { useEffect } from 'react';
import BlogSidebar from '@theme-original/BlogSidebar';

export default function BlogSidebarWrapper(props) {
  useEffect(() => {
    // 1. 查找侧边栏中被标记为 "active" (高亮) 的链接
    const activeItem = document.querySelector('a[aria-current="page"]');

    // 2. 如果找到了，就滚动到该元素
    if (activeItem) {
      activeItem.scrollIntoView({
        behavior: 'instant', // 使用 'instant' 直接跳过去，避免页面加载时的视觉晃动
        block: 'center',     // 关键点：将该条目滚动到侧边栏的【垂直居中】位置
        inline: 'nearest'
      });
    }
  }, []); // 空依赖数组，确保只在组件挂载（页面加载）完成后执行一次
  
  return (
    <>
      <BlogSidebar {...props} />
    </>
  );
}
