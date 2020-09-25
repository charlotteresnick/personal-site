/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { Flex } from "@theme-ui/components"
import useThemeConfig from "../hooks/use-theme-config"
import ColorModeToggle from "./colormode-toggle"
import Navigation from "./navigation"
import HeaderTitle from "./header-title"
import HeaderExternalLinks from "./header-external-links"

const Header = () => {
  const { navigation: nav } = useThemeConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header sx={{ mb: [5, 6] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <HeaderTitle />
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <Flex
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 4,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        <Navigation nav={nav} />
        <HeaderExternalLinks />
      </Flex>
    </header>
  )
}

export default Header
