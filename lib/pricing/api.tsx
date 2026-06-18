export const pagePricing = `
query PricingPage {
  pricingPage {
    heading {
      subtitle
      title
      text
      Style
    }
    boxCompare {
      subtitle
      text
      title
      Style
    }
    sectionBooking {
      heading {
        subtitle
        text
        title
        Style
      }
      button {
        name
        statusBtn
        style
        link
      }
    }
    sectionFAQ {
      heading {
        subtitle
        text
        title
        Style
      }
      faq {
        title
        content
      }
    }
  }
}

`;

export const dataPricing = `
query getPricings{
  pricings{
    title
    text
    price
    slug
    statusPr
    lists_info {
      title
      icon {
        caption
        url
      }
    }
    itemTable {
      text
      statusTB
    }
  }
}
`;