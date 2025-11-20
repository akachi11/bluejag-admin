const sizes = {
    mobileSmall: "320px",
    mobileMedium: "375px",
    mobileLarge: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopLarge: "1440px",
    desktop: "2560px"
}

export const devices = {
    mobileSmall: `(min-width: ${sizes.mobileSmall})`,
    mobileMedium: `(min-width: ${sizes.mobileMedium})`,
    mobileLarge: `(min-width: ${sizes.mobileLarge})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopLarge: `(min-width: ${sizes.laptopLarge})`,
    desktop: `(min-width: ${sizes.desktop})`,
}