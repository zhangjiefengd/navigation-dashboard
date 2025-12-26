
export interface Project {
  id: string;
  name: string;
  url: string;
  github: string;
  description: string;
  lastUpdate: string;
  branch: string;
  status: 'success' | 'warning' | 'error'; // Mapping based on icons (check/pulse)
}

export const projects: Project[] = [
  {
    id: 'markdown-nice',
    name: 'Markdown Nice 排版工具',
    url: 'https://md-wechat.weifeng522.cn',
    github: 'zhangjiefengd/markdown-nice',
    description: '一款支持自定义样式的微信公众号 Markdown 编辑器，让排版更简单。',
    lastUpdate: '9h ago',
    branch: 'master',
    status: 'success'
  },
  {
    id: 'earth-online',
    name: 'Earth Online 地球在线',
    url: 'https://earth-online.weifeng522.cn',
    github: 'zhangjiefengd/earth-online',
    description: '实时地球在线查看工具，提供全球气象、海洋流场等数据的可视化展示。',
    lastUpdate: '5h ago',
    branch: 'master',
    status: 'warning'
  },
  {
    id: 'multi-image-cropper',
    name: '多图裁剪工具',
    url: 'https://multi-image-cropper.weifeng522.cn',
    github: 'zhangjiefengd/multi-image-cropper',
    description: '高效的批量图片裁剪工具，支持自动识别与手动调整，提升图片处理效率。',
    lastUpdate: '6h ago',
    branch: 'master',
    status: 'success'
  },
  {
    id: 'wechat-article-exporter',
    name: '公众号管理',
    url: 'https://data.weifeng522.cn',
    github: 'zhangjiefengd/wechat-article-exporter',
    description: '微信公众号文章导出与管理工具，支持批量导出、数据分析等功能。',
    lastUpdate: '1h ago',
    branch: 'master',
    status: 'success'
  }
];
