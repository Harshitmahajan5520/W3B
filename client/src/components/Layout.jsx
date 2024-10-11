import { MantineProvider } from '@mantine/core'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <MantineProvider>
        <Outlet />
    </MantineProvider>
  )
}

export default Layout