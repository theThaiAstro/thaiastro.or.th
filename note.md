# Notes

## Query

### Featured Post Query

```graphql
featuredPost: allMdx(
    sort: { order: DESC, fields: frontmatter___date }
    limit: 1
    filter: { frontmatter: { isFeatured: { eq: true }, isUnpublished: { ne: true } } }
) {
    edges {
        node {
            frontmatter {
                title
                featuredImage {
                    childImageSharp {
                        gatsbyImageData(quality: 100, layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1)
                    }
                }
            }
            fields {
                slug
                sourceInstanceName
            }
        }
    }
}
```
