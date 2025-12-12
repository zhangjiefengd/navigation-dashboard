
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
    name: 'markdown-nice',
    url: 'https://md-wechat.weifeng522.cn',
    github: 'zhangjiefengd/markdown-nice',
    description: 'feat: user customization updates',
    lastUpdate: '9h ago',
    branch: 'master',
    status: 'success'
  },
  {
    id: 'earth-online',
    name: 'earth-online',
    url: 'https://earth-online.weifeng522.cn',
    github: 'zhangjiefengd/earth-online',
    description: 'fix: adjust rewrites for client subdirectory structure',
    lastUpdate: '5h ago',
    branch: 'master',
    status: 'warning' // Icon looks like "!" or similar, let's treat as warning or just different
  },
  {
    id: 'multi-image-cropper',
    name: 'multi-image-cropper',
    url: 'https://multi-image-cropper.weifeng522.cn',
    github: 'zhangjiefengd/multi-image-cropper',
    description: '配置修正后触发部署',
    lastUpdate: '6h ago',
    branch: 'master',
    status: 'success'
  }
];
