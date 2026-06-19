// Nếu không tìm thấy biến môi trường, nó sẽ tự động dùng link Strapi của bạn thay vì bị undefined
const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://jubilant-bat-47bef55ed6.strapiapp.com";
const API_GQL = `${API_URL}/graphql`;
export async function fetchAPI(query: string, variables = {}) {
  const res = await fetch(API_GQL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },

    cache: 'no-store',
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  if (!res.ok) {
    const errorText = await res.text(); // Lấy chi tiết lỗi từ server
    console.error("LỖI NETWORK / SERVER TRẢ VỀ:", errorText);
    throw new Error(`API Error: ${res.status}`);
  }

  const result = await res.json();

  // 2. NẾU GRAPHQL BÁO LỖI (Ví dụ: sai tên trường, sai cú pháp)
  if (result.errors) {
    console.error("LỖI CÚ PHÁP GRAPHQL:", JSON.stringify(result.errors, null, 2));
    throw new Error(`GraphQL Errors`);
  }

  return result.data;

}

export function getStrapiMedia(url: string | null | undefined) {
  if (!url) {
    return null;
  }

  // Nếu url đã có sẵn http hoặc https (ví dụ dùng Cloudinary, AWS S3)
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }

  return `${API_URL}${url}`;
}
export const dataGlobal = `
        query getGlobal {
        global {
            header {
            logo {
                link
                name
            }
            menu {
                name
                link
                statusBtn
                style
            }
            }
            footer {
            logo {
                name
                link
            }
            lists {
                menufooter {
                link
                name
                }
                title
            }
            text_left
            text_right
            }
            siteName
            siteDescription
            favicon {
            url
            caption
            }
            defaultSeo {
            shareImage {
                url
            }
            metaTitle
            metaDescription
            }
        }
        }
`;

export const dataHome = `
query getHome {
  home {
    blocks {
     __typename
      ... on ComponentDynamiczoneBanner {
        buttonRepeater {
          style
          statusBtn
          name
          link
          icon {
            caption
            url
          }
        }
        heading {
          text
          subtitle
          title
          Style
        }
        img_banner {
          url
          caption
        }
        text
        title
        list_item {
          title
          icon {
            caption
            url
          }
          description
        }
      }
      ... on ComponentDynamiczoneSsAbout {
        heading {
          title
          text
          subtitle
          Style
        }
        image {
          url
          caption
        }
        lists_item {
          icon {
            url
            caption
          }
          title
          description
        }
        text_r
        title_r
      }
      ... on ComponentDynamiczoneTestimonial {
        heading {
          subtitle
          text
          title
          Style
        }
        list_say {
          initials
          level
          name
          position
          description
        }
      }
      ... on ComponentDynamiczoneTechnique {
        heading {
          title
          text
          subtitle
          Style
        }
        boxs {
          title
          icon {
            caption
            url
          }
          description
        }
         buttonSingle {
          statusBtn
          style
          name
          link
          icon {
            caption
            url
          }
        }
        bgSection
      }
      ... on ComponentDynamiczoneTeam {
        id
        heading {
          subtitle
          text
          title
          Style
        }
        list_team {
          level
          initials
          description
          name
          position
        }
      }
      ... on ComponentDynamiczoneQuestion {
        heading {
          text
          subtitle
          title
          Style
        }
        faq {
          title
          content
        }
      }
      ... on ComponentDynamiczoneBegin {
        button {
          style
          statusBtn
          name
          link
          icon {
            caption
            url
          }
        }
        heading {
          subtitle
          text
          title
          Style
        }
      }
      ... on ComponentDynamiczoneWork {
        timelines {
          title
          icon {
            caption
            url
          }
          description
        }
        heading {
          subtitle
          text
          title
          Style
        }
      }
      ... on ComponentDynamiczoneSsProgram {
        heading {
          title
          text
          subtitle
          Style
        }
      }
      ... on ComponentDynamiczoneBook {
        heading {
          subtitle
          text
          title
          Style
        }
        fields {
          idField
          label
          options {
            value
            label
          }
          placeholder
          type
        }
        info {
          title
          icon {
            caption
            url
          }
          description
        }
      }
      ... on ComponentDynamiczoneCommunity {
        heading {
          title
          text
          subtitle
          Style
        }
        list {
          description
          initials
          level
          name
          position
        }
      }
      ... on ComponentDynamiczonePrice {
        heading {
          title
          text
          subtitle
          Style
        }
      }
    }
  }
}
`;


export const dataProgramDetail = `query Program($documentId: ID!) {
  program(documentId: $documentId) {
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



export const pageAbout = `
query getAbout {
  about {
    seo {
      metaTitle
      metaDescription
      shareImage {
        caption
        url
      }
    }
    blocks {
    __typename
      ... on ComponentDynamiczoneBanner {
        buttonRepeater {
          link
          name
          statusBtn
          style
        }
        img_banner {
          caption
          url
        }
        text
        title
        heading {
          title
          text
          subtitle
          Style
        }
      }
      ... on ComponentDynamiczoneTechnique {
        heading {
          title
          subtitle
          text
          Style
        }
        bgSection
        boxs {
          title
          description
        }
      }
      ... on ComponentBlockShareDefaulBlock {
        heading {
          text
          subtitle
          title
          Style
        }
        imgdefaul {
          caption
          url
        }
        list_item {
          title
          icon {
            caption
            url
          }
          description
        }
      }
      ... on ComponentDynamiczoneSsAbout {
        heading {
          text
          title
          subtitle
          Style
        }
        image {
          caption
          url
        }
        title_r
        lists_item {
          title
          icon {
            caption
            url
          }
          description
        }
      }
    }
  }
}`;

export const pageProgram = `
query getProgram {
  programPage {
  
    seo {
      metaTitle
      shareImage {
        caption
        url
      }
      metaDescription
    }
    blocks {
     __typename
      ... on ComponentDynamiczoneBanner {
        title
        text
        img_banner {
          caption
          url
        }
        heading {
          subtitle
          text
          title
          Style
        }
        list_item {
          title
          description
        }
      }
      ... on ComponentDynamiczoneTechnique {
        bgSection
        heading {
          text
          title
          subtitle
        }
        buttonSingle {
          style
          statusBtn
          name
          link
          icon {
            caption
            url
          }
        }
        boxs {
          title
          icon {
            caption
            url
          }
          description
        }
      }
      ... on ComponentDynamiczoneWork {
        heading {
          text
          title
          subtitle
          Style
        }
        timelines {
          title
          description
        }
      }
      ... on ComponentDynamiczoneSsAbout {
        heading {
          text
          title
          subtitle
        }
        image {
          caption
          url
        }
        lists_item {
          icon {
            url
            caption
          }
          title
        }
      }
      ... on ComponentDynamiczoneInvestment {
        heading {
          text
          title
          subtitle
          Style
        }
        pricings {
          title
          text
          statusPr
          price
          lists_info {
            title
            icon {
              caption
              url
            }
          }
          slug
        }
      }
    }
  }
}
`;

// fetch("http://localhost:1337/api/contacts/submit", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     data: formData,
//   }),
// });