'use client'

import { PropsWithChildren } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { getQueryClientForProvider } from './client'

export default function QueryProvider({ children }: PropsWithChildren) {
  const queryClient = getQueryClientForProvider()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  )
}
