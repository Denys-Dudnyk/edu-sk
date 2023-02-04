export const accentColor = '#8645FF'
export const bgColor = '#f8f4ff'

export const IS_SERVER = typeof window === 'undefined'
export const IS_CLIENT = typeof window !== 'undefined'
export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
