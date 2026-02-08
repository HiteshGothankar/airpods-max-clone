import { useState } from "react"

const FooterColumn = ({ title, children }) => {

    const [open, setOpen] = useState(false)

    return (
        <div className="border-b border-gray-300 lg:border-none tracking-tight">
            {/* Header */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between lg:pointer-events-none"
            >
                <h1 className="text-[12.5px] xl:text-[13px] font-medium lg:font-semibold text-gray-600 mb-2 mt-1">
                    {title}
                </h1>

                {/* Arrow (mobile only) */}
                <span className="lg:hidden text-lg">
                    {open ? "−" : (<img src="/down.png" className="w-3 h-auto" />)}
                </span>
            </button>

            {/* Content */}
            <ul
                className={`text-[11.5px] lg:text-xs text-gray-500 space-y-2 mb-1.5
    overflow-hidden transition-all duration-300 ease-in-out
    lg:block lg:opacity-100 lg:max-h-none lg:overflow-visible
                    ${open
                        ? "max-h-96 opacity-100 mb-5"
                        : "max-h-0 opacity-0"
                    }
                `}>
                {children}
            </ul>
        </div>
    )
}

export default FooterColumn