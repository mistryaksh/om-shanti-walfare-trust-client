export enum COMMON {
    ROOT = 'root',
    LINK_TARGET = '_blank',
    LOGO = './logo.png',
}

export enum SOCIAL_MEDIA_LINKS {
    TWITTER = 'https://twitter.com/',
    FACEBOOK = 'https://www.facebook.com/',
    LINKEDIN = 'https://www.linkedin.com/',
    GOOGLE = 'https://www.google.com/',
}

export enum LAYOUT_STYLES {
    TEXT = "inline-block text-slate-500 text-sm py-0 font-light border-r border-slate-500 pr-5 focus:outline-none active:outline-none",
    SOCIAL_ICON = "inline-block text-slate-500 text-lg py-0 font-light hover:text-emerald-500 hover:rotate-y-180 duration-200 ease-in-out focus:outline-none active:outline-none",
    BUTTON = "inline-block text-slate-500 text-sm py-0 font-light hover:text-emerald-500 duration-200 ease-in-out focus:outline-none active:outline-none",
    LINK = 'text-md font-light hover:text-emerald-500 duration-200 ease-in-out focus:outline-none active:outline-none',
}

export enum ROUTES {
    HOME = '/',
    ABOUT = '/about',
    CAUSES = '/causes',
    SOCIAL_EVENTS = '/social-events',
    CONTACT = '/contact',
    BLOG = '/blog',
}

export enum BUTTON_TYPES {
    BUTTON = 'button',
    SUBMIT = 'submit',
    RESET = 'reset',
}

export enum COMPONENT_STYLES {
    BUTTON = 'bg-emerald-500 text-white px-12 py-5 text-md font-light tracking-wider focus:outline-none active:outline-none hover:bg-emerald-600 duration-300 ease-in-out',
    BUTTON_TRANSPARENT = 'bg-transparent text-emerald-500 px-12 py-5 text-md font-light tracking-wider focus:outline-none active:outline-none',
}