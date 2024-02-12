export enum LAYOUT_STYLES {
   TEXT = "inline-block text-slate-500 text-sm py-0 font-light border-r border-slate-500 pr-5 focus:outline-none active:outline-none",
   SOCIAL_ICON = "inline-block text-slate-500 text-lg py-0 font-light hover:text-emerald-500 hover:rotate-y-180 duration-200 ease-in-out focus:outline-none active:outline-none",
   BUTTON = "inline-block text-slate-500 text-sm py-0 font-light hover:text-emerald-500 duration-200 ease-in-out focus:outline-none active:outline-none",
   LINK = 'text-md font-light hover:text-emerald-500 duration-200 ease-in-out focus:outline-none active:outline-none',
}

export enum COMPONENT_STYLES {
   BUTTON = 'bg-emerald-500 text-white px-10 py-5 text-md font-light tracking-wider focus:outline-none active:outline-none hover:bg-emerald-600 duration-300 ease-in-out',
   BUTTON_TRANSPARENT = 'bg-transparent text-emerald-500 px-12 py-5 text-md font-light tracking-wider focus:outline-none active:outline-none',
   CARD = 'group bg-white rounded-md light-shadow w-full hover:bg-emerald-500 ease-in-out duration-300',
   CARD_BODY = 'flex flex-col items-center justify-center px-10 py-20 w-full h-min',
   CARD_ICON = 'bg-emerald-500 text-white px-6 py-6 rounded-full text-4xl group-hover:text-emerald-500 group-hover:bg-white ease-in-out duration-200',
   CARD_TITLE = 'text-2xl font-medium mt-16 tracking-wide text-center group-hover:text-white ease-in-out duration-200',
   CARD_DESCRIPTION = 'text-sm font-light tracking-wider text-slate-500 leading-loose mt-5 text-center group-hover:text-white ease-in-out duration-200',
}