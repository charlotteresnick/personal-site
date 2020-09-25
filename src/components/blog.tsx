/** @jsx jsx */
import { jsx, Heading, Link as TLink } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import Layout from "./layout"
import Listing from "./listing"
import useThemeConfig from "../hooks/use-theme-config"
import replaceSlashes from "../utils/replaceSlashes"
import SEO from "./seo"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  [key: string]: any
}

const Blog = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useThemeConfig()

  return (
    <Layout>
      <SEO title="Blog" />
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexFlow: `wrap`,
        }}
      >
        <Heading variant="styles.h2">Blog</Heading>
        <TLink
          as={Link}
          sx={{ variant: `links.secondary` }}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </TLink>
      </Flex>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

type WrapperProps = {
  data: {
    allPost: any
    [key: string]: string
  }
  [key: string]: any
}

export default function BlogWrapper({ ...props }: WrapperProps) {
  const {
    data: { allPost },
  } = props

  return <Blog posts={allPost.nodes} {...props} />
}
