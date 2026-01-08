import React from 'react'

type LoadingDispatch = (loading: boolean | string) => void

const LoadingContext = React.createContext<[boolean | string, LoadingDispatch]>(
  [false, (loading: boolean | string) => console.log(loading)]
)

export const useLoading = () => React.useContext(LoadingContext)

export const LoadingProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [loading, setLoading] = React.useState<boolean | string>(false)

  return React.createElement(
    LoadingContext.Provider,
    { value: [loading, setLoading] },
    children
  )
}
