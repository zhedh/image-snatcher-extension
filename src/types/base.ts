
export interface PaginationParams {
  current: number
  pageSize: number
}

export interface PaginationProps {
  total?: number
  current: number
  pageSize: number
}

export interface ListData<T> {
  records: T[]
  pagination: PaginationProps
}

export interface ResponseData<T> {
  code: string | number
  msg: string
  result: T
  [name: string]: unknown
}

export type ApiResponse<T> = Promise<ResponseData<T>>

export type ApiListData<T> = ApiResponse<ListData<T>>

export interface ChartRecord {
  key: string
  value: number
}

export interface SelectOption {
  label: string
  value: string | number
  children?: SelectOption[]
}


