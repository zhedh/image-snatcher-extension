import { useRoutes, RouteObject } from 'react-router-dom'
import { routes, RouteConfig } from './index'
import { AuthGuard, KeepAliveGuard } from './Guards'
import React, { Suspense } from 'react'
import { LoadingOverlay } from '@mantine/core'
import { LoadingProvider } from '../../store'

// 将自定义路由配置转换为 react-router-dom 的格式
const transformRoutes = (routes: RouteConfig[]): RouteObject[] => {
  return routes.map((route) => {
    const item: RouteObject = {
      path: route.path,
      element: (
        <Suspense fallback={<LoadingOverlay visible />}>
          <AuthGuard route={route}>
            <KeepAliveGuard route={route}>
              {/* 注入加载Context */}
              <LoadingProvider>{route.element!}</LoadingProvider>
            </KeepAliveGuard>
          </AuthGuard>
        </Suspense>
      ),
    }

    if (route.children) {
      item.children = transformRoutes(route.children)
    }

    return item
  })
}

const Renderer: React.FC = () => {
  const element = useRoutes(transformRoutes(routes))
  return element
}

export default Renderer
