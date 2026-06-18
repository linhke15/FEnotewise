export const dataPrograms = ` query getPrograms {
  programs {
    title
    text
    slug
    thumb {
      caption
      url
    }
   
    category_program {
      title
      slug
    }
  }
}`;

export const dataProgramSingle = `
query GetProgramSingle($slug: String!) {
  programs(
    filters: { slug: { eq: $slug } }
    pagination: { limit: 1 }
  ) {
    title
    text
    slug
    thumb {
      caption
      url
    }
    category_program {
      title
      slug
    }
  }
}
`;