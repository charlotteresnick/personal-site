/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import replaceSlashes from "../utils/replaceSlashes"
import useSiteMetadata from "../hooks/use-site-metadata"
import useThemeConfig from "../hooks/use-theme-config"

const HeaderTitle = () => {
  const { siteTitle, siteHeadline } = useSiteMetadata()
  const { basePath } = useThemeConfig()

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <h1 sx={{ my: 0, pl: `0.2em`, fontWeight: `medium`, fontSize: [2, 3] }}>
        {"."}
      </h1>
      <h1
        sx={{
          my: 0,
          fontWeight: `medium`,
          fontSize: [2, 3],
        }}
      >
        {`└── ${siteTitle}`}
      </h1>
      <h1
        sx={{
          my: 0,
          pl: `3.5em`,
          fontWeight: `medium`,
          fontSize: [1, 1],
          color: `secondary`,
        }}
      >
        {`└── ${siteHeadline}`}
      </h1>
    </Link>
  )
}

export default HeaderTitle
