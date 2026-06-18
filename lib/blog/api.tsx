// page blog
export const dataBlogs = `
query getBlog {
  blogPage {
    seo {
      metaTitle
      metaDescription
      shareImage {
        caption
        url
      }
    }
    banner {
      title
      text
      heading {
        title
        text
        subtitle
        Style
      }
      img_banner {
        caption
        url
      }
      list_item {
        description
        title
      }
    }
    footer2 {
      onFooter {
        Email
        description
      }
      heading {
        Style
        subtitle
        text
        title
      }
    }
  }
}
`;


export const blogList = `query GetBlogList {
  categories {
    name
    slug
  }
  blogs {
    title
    slug
    description
    updatedAt
    publishedAt
    thumb {
      url
      caption
    }
   
    category {
      slug
      name
    }
  }
} `;

// single blog
export const blogBySlug = `
  query BlogBySlug($slug: String!) {
    blogs(filters: { slug: { eq: $slug } }) {
      title
      slug
      description
      updatedAt
      thumb {
        url
        caption
      }
      category {
        slug
        name
      }
      blocks {
      __typename
        ... on ComponentSharedQuote {
          title
          body
        }
        ... on ComponentSharedRichText {
          body
        }
      }
     author {
        name
        description
        avatar {
          caption
          url
        }
        position
        email
      }
    }
  }
`;

export const relatedBlog = `
query RelatedBlogs(
  $categorySlug: String!
  $currentSlug: String!
) {
  blogs(
    filters: {
      category: {
        slug: {
          eq: $categorySlug
        }
      }
      slug: {
        ne: $currentSlug
      }
    }
  ) {
    title
    slug
    description
    category {
      name
      slug
    }
     thumb {
      url
      caption
    }
  }
}
`;