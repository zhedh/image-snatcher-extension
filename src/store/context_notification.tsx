import React from 'react'
import { Notification } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react'
import styled from 'styled-components'

interface NotificationParams {
  message: string
  title?: string
  icon?: React.ReactNode
  color?: string
  duration?: number // 毫秒
}

type NotificationDispatch = (params: NotificationParams) => void

const NotificationContext = React.createContext<
  [NotificationParams, NotificationDispatch]
>([
  { message: '' },
  (params: string | NotificationParams) => console.log(params),
])

const NotificationWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 99;
`

export const NotificationProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [notification, setNotification] = React.useState<NotificationParams>({
    message: '',
  })

  return (
    <>
      {notification.message && (
        <NotificationWrapper>
          <Notification
            icon={notification.icon}
            color={notification.color}
            title={notification.title}
            onClose={() => setNotification({ message: '' })}
          >
            {notification.message}
          </Notification>
        </NotificationWrapper>
      )}
      <NotificationContext.Provider value={[notification, setNotification]}>
        {children}
      </NotificationContext.Provider>
    </>
  )
}

export const useNotification = () => {
  const [, setNotification] = React.useContext(NotificationContext)

  const format = (params: string | NotificationParams) =>
    typeof params === 'string' ? { message: params } : params
  const show = (params: string | NotificationParams) => {
    params = format(params)
    setNotification(format(params))
    if (params.duration === 0) {
      return
    }
    setTimeout(() => setNotification({ message: '' }), params?.duration || 5000)
  }

  const hide = () => setNotification({ message: '' })

  const success = (params: string | NotificationParams) =>
    show({ ...format(params), color: 'green', icon: <IconCheck size={18} /> })

  const error = (params: string | NotificationParams) =>
    show({ ...format(params), color: 'red', icon: <IconX size={18} /> })

  return {
    show,
    hide,
    success,
    error,
  }
}
