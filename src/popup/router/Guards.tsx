import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { RouteConfig } from './index'

interface GuardProps {
  route: RouteConfig
  children: React.ReactElement
}

export const AuthGuard: React.FC<GuardProps> = ({ route, children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  // 检查是否需要登录
  useEffect(() => {
    // if (route.meta?.requiresAuth) {
    //   const token = localStorage.getItem('token')
    //   if (!token) {
    //     // 保存当前路径，登录后跳转回来
    //     navigate(
    //       `/login?redirect=${encodeURIComponent(
    //         location.pathname + location.search
    //       )}`
    //     )
    //   }
    // }
  }, [route, navigate, location])

  return children
}

export const KeepAliveGuard: React.FC<GuardProps> = ({ route, children }) => {
  // 页面缓存逻辑
  // const cacheKey = `page_cache_${location.pathname}`

  useEffect(() => {
    if (route.meta?.keepAlive) {
      // 保存页面状态到 sessionStorage
      return () => {
        // 组件卸载时保存状态
      }
    }
  }, [route.meta?.keepAlive])

  return children
}
