import {HeroUIProvider} from '@heroui/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <HeroUIProvider locale={"en-GB"}>
      {children}
    </HeroUIProvider>
  )
}
