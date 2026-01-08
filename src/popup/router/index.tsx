import React from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../pages/home'
import Setting from '../pages/Setting'

// 路由配置类型定义
export interface RouteConfig {
  path: string
  element: React.ReactElement
  children?: RouteConfig[]
  meta?: {
    title?: string
    requiresAuth?: boolean // 需要登录
    keepAlive?: boolean // 页面缓存
  }
}

// 主路由配置
export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/home',
    element: <Home />,
    meta: {
      title: '首页',
      keepAlive: true,
    },
  },
  {
    path: '/setting',
    element: <Setting />,
    meta: {
      title: '设置',
    },
  },
]
