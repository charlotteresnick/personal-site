import { graphql, useStaticQuery } from "gatsby"

type UseThemeConfigProps = {
  themeConfig: {
    basePath: string
    blogPath: string
    postsPath: string
    pagesPath: string
    tagsPath: string
    externalLinks: {
      name: string
      url: string
    }[]
    navigation: {
      title: string
      slug: string
    }[]
    showLineNumbers: boolean
    showCopyButton: boolean
  }
}

const useThemeConfig = () => {
  const data = useStaticQuery<UseThemeConfigProps>(graphql`
    query {
      themeConfig {
        basePath
        blogPath
        postsPath
        pagesPath
        tagsPath
        showLineNumbers
        showCopyButton
        externalLinks {
          name
          url
        }
        navigation {
          title
          slug
        }
      }
    }
  `)

  return data.themeConfig
}

export default useThemeConfig
