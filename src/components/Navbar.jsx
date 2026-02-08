import gsap from "gsap"
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

const NavLinks = [
    {
        text: 'Store',
        subMenuGroups: [
            {
                header: 'Shop',
                elevatedLinks: [
                    { text: 'Shop the Latest', href: '' },
                    { text: 'Mac', href: '' },
                    { text: 'iPad', href: '' },
                    { text: 'iPhone', href: '' },
                    { text: 'Apple Watch', href: '' },
                    { text: 'AirPods', href: '' },
                    { text: 'Accessories', href: '' }
                ],
                links: []
            },
            {
                header: 'Quick Links',
                links: [
                    { text: 'Find a Store', href: '' },
                    { text: 'Order Status', href: '' },
                    { text: 'Apple Trade In', href: '' },
                    { text: 'Ways to Buy', href: '' },
                    { text: 'Personal Setup', href: '' }
                ]
            },
            {
                header: 'Shop Special Stores',
                links: [
                    { text: 'Certified Refurbished', href: '' },
                    { text: 'Education', href: '' },
                    { text: 'Business', href: '' },
                    { text: 'Veterans and Military', href: '' },
                    { text: 'Government', href: '' }
                ]
            }
        ]
    },
    {
        text: 'Mac',
        subMenuGroups: [
            {
                header: 'Explore Mac',
                elevatedLinks: [
                    { text: 'Explore All Mac', href: '' },
                    { text: 'MacBook Air', href: '' },
                    { text: 'MacBook Pro', href: '' },
                    { text: 'iMac', href: '' },
                    { text: 'Mac Mini', href: '' },
                    { text: 'Mac Studio', href: '' },
                    { text: 'Mac Pro', href: '' },
                    { text: 'Displays', href: '' }
                ],
                links: [
                    { text: 'Compare Mac', href: '' },
                    { text: 'Switch from PC to Mac', href: '' },
                ]
            },
            {
                header: 'Shop Mac',
                links: [
                    { text: 'Shop Mac', href: '' },
                    { text: 'Help Me Choose', href: '' },
                    { text: 'Mac Accessories', href: '' },
                    { text: 'Apple Trade In', href: '' },
                    { text: 'Financing', href: '' },
                ]
            },
            {
                header: 'More from Mac',
                links: [
                    { text: 'Mac Support', href: '' },
                    { text: 'AppleCare+ for Mac', href: '' },
                    { text: 'macOS Sequoia', href: '' },
                    { text: 'Apple Intelligence', href: '' },
                    { text: 'Apps by Apple', href: '' },
                    { text: 'Continuity', href: '' },
                    { text: 'iCloud+', href: '' },
                    { text: 'More for Business', href: '' },
                    { text: 'Education', href: '' },
                ]
            }
        ]
    },
    {
        text: 'iPad',
        subMenuGroups: [
            {
                header: 'Explore iPad',
                elevatedLinks: [
                    { text: 'Explore All iPad', href: '' },
                    { text: 'iPad Pro', href: '' },
                    { text: 'iPad Air', href: '' },
                    { text: 'iPad', href: '' },
                    { text: 'iPad Mini', href: '' },
                    { text: 'Apple Pencil', href: '' },
                    { text: 'Keyboards', href: '' }
                ],
                links: [
                    { text: 'Compare iPad', href: '' },
                    { text: 'Why iPad', href: '' },
                ]
            },
            {
                header: 'Shop iPad',
                links: [
                    { text: 'Shop iPad', href: '' },
                    { text: 'iPad Accessories', href: '' },
                    { text: 'Apple Trade In', href: '' },
                    { text: 'Financing', href: '' },
                ]
            },
            {
                header: 'More from iPad',
                links: [
                    { text: 'iPad Support', href: '' },
                    { text: 'AppleCare+ for iPad', href: '' },
                    { text: 'iPadOS 18', href: '' },
                    { text: 'Apple Intelligence', href: '' },
                    { text: 'Apps by Apple', href: '' },
                    { text: 'iCloud+', href: '' },
                    { text: 'Education', href: '' },
                ]
            }
        ]
    },
    {
        text: 'iPhone',
        subMenuGroups: [
            {
                header: 'Explore iPhone',
                elevatedLinks: [
                    { text: 'Explore All iPhone', href: '' },
                    { text: 'iPhone 17 Pro', href: '' },
                    { text: 'iPhone Air', href: '' },
                    { text: 'iPhone 16e', href: '' },
                    { text: 'iPhone 17', href: '' },
                ],
                links: [
                    { text: 'Compare iPhone', href: '' },
                    { text: 'Switch from Android', href: '' },
                ],
            },
            {
                header: 'Shop iPhone',
                links: [
                    { text: 'Shop iPhone', href: '' },
                    { text: 'iPhone Accessories', href: '' },
                    { text: 'Apple Trade In', href: '' },
                    { text: 'Carrier Deals at Apple', href: '' },
                    { text: 'Financing', href: '' },
                ]
            },
            {
                header: 'More from iPhone',
                links: [
                    { text: 'iPhone Support', href: '' },
                    { text: 'AppleCare+ for iPhone', href: '' },
                    { text: 'iOS 18', href: '' },
                    { text: 'Apple Intelligence', href: '' },
                    { text: 'Apps by Apple', href: '' },
                    { text: 'iPhone Privacy', href: '' },
                    { text: 'iCloud+', href: '' },
                    { text: 'Wallet, Pay, Card', href: '' },
                    { text: 'Siri', href: '' },
                ]
            }
        ]
    },
    {
        text: 'Watch',
        subMenuGroups: [
            {
                header: 'Explore Watch',
                elevatedLinks: [
                    { text: 'Explore All Apple Watch', href: '' },
                    { text: 'Apple Watch Series 10', href: '' },
                    { text: 'Apple Watch Ultra 2', href: '' },
                    { text: 'Apple Watch SE', href: '' },
                    { text: 'Apple Watch Nike', href: '' },
                    { text: 'Apple Watch Hermès', href: '' },
                ],
                links: [
                    { text: 'Compare Watch', href: '' },
                    { text: 'Why Apple Watch', href: '' },
                ],
            },
            {
                header: 'Shop Watch',
                links: [
                    { text: 'Shop Apple Watch', href: '' },
                    { text: 'Apple Watch Studio', href: '' },
                    { text: 'Apple Watch Bands', href: '' },
                    { text: 'Apple Watch Accessories', href: '' },
                    { text: 'Apple Trade In', href: '' },
                    { text: 'Financing', href: '' },
                ]
            },
            {
                header: 'More from Watch',
                links: [
                    { text: 'Apple Watch Support', href: '' },
                    { text: 'AppleCare+', href: '' },
                    { text: 'watchOS 11', href: '' },
                    { text: 'Apple Watch For Your Kids', href: '' },
                    { text: 'Apps by Apple', href: '' },
                    { text: 'Apple Fitness+', href: '' },
                ]
            }
        ]
    },
    {
        text: 'AirPods',
        subMenuGroups: [
            {
                header: 'Explore AirPods',
                elevatedLinks: [
                    { text: 'Explore All AirPods', href: '' },
                    { text: 'AirPods 4', href: '' },
                    { text: 'AirPods Pro 3', href: '' },
                    { text: 'AirPods Max', href: '' }
                ],
                links: [
                    { text: 'Compare AirPods', href: '' }
                ],
            },
            {
                header: 'Shop AirPods',
                links: [
                    { text: 'Shop AirPods', href: '' },
                    { text: 'AirPods Accessories', href: '' }
                ]
            },
            {
                header: 'More from AirPods',
                links: [
                    { text: 'AirPods Support', href: '' },
                    { text: 'AppleCare+ for Headphones', href: '' },
                    { text: 'Hearing Health', href: '' },
                    { text: 'Apple Music', href: '' }
                ]
            }
        ]
    },
    {
        text: 'TV & Home',
        subMenuGroups: [
            {
                header: 'Explore TV & Home',
                elevatedLinks: [
                    { text: 'Explore TV & Home', href: '' },
                    { text: 'Apple TV 4K', href: '' },
                    { text: 'HomePod', href: '' },
                    { text: 'HomePod Mini', href: '' },
                ],
                links: [],
            },
            {
                header: 'Shop TV & Home',
                links: [
                    { text: 'Shop Apple TV 4K', href: '' },
                    { text: 'Shop HomePod', href: '' },
                    { text: 'Shop HomePod Mini', href: '' },
                    { text: 'Shop Siri Remote', href: '' },
                    { text: 'TV & Home Accessories', href: '' }
                ]
            },
            {
                header: 'More from TV & Home',
                links: [
                    { text: 'Apple TV Support', href: '' },
                    { text: 'HomePod Support', href: '' },
                    { text: 'AppleCare+', href: '' },
                    { text: 'Apple TV App', href: '' },
                    { text: 'Apple TV+', href: '' },
                    { text: 'Home App', href: '' },
                    { text: 'Apple Music', href: '' },
                    { text: 'Siri', href: '' },
                    { text: 'AirPay', href: '' }
                ]
            }
        ]
    },
    {
        text: 'Entertainment',
        subMenuGroups: [
            {
                header: 'Explore Entertainment',
                elevatedLinks: [
                    { text: 'Explore Entertainment', href: '' },
                    { text: 'Apple One', href: '' },
                    { text: 'Apple Tv', href: '' },
                    { text: 'Apple Music', href: '' },
                    { text: 'Apple Arcade', href: '' },
                    { text: 'Apple Fitness+', href: '' },
                    { text: 'Apple Podcasts', href: '' },
                    { text: 'Apple Books', href: '' },
                    { text: 'Apple Store', href: '' },
                ],
                links: [],
            },
            {
                header: 'Support',
                links: [
                    { text: 'Apple Vision Support', href: '' },
                    { text: 'Apple TV Support', href: '' },
                    { text: 'Apple Music Support', href: '' },
                ]
            },
        ]
    },
    {
        text: 'Accessories',
        subMenuGroups: [
            {
                header: 'Shop Accessories',
                elevatedLinks: [
                    { text: 'Shop All Accessories', href: '' },
                    { text: 'Mac', href: '' },
                    { text: 'iPad', href: '' },
                    { text: 'iPhone', href: '' },
                    { text: 'Apple Watch', href: '' },
                    { text: 'Apple Vision Pro', href: '' },
                    { text: 'AirPods', href: '' },
                    { text: 'TV & Home', href: '' }
                ],
                links: [],
            },
            {
                header: 'Explore Accessories',
                links: [
                    { text: 'Made by Apple', href: '' },
                    { text: 'AirTag', href: '' }
                ]
            }
        ]
    },
    {
        text: 'Support',
        subMenuGroups: [
            {
                header: 'Explore Support',
                elevatedLinks: [
                    { text: 'iPhone', href: '' },
                    { text: 'Mac', href: '' },
                    { text: 'iPad', href: '' },
                    { text: 'Watch', href: '' },
                    { text: 'Apple Vision Pro', href: '' },
                    { text: 'AirPods', href: '' },
                    { text: 'Music', href: '' },
                    { text: 'TV', href: '' },
                ],
                links: [
                    { text: 'Explore Support', href: '' }
                ],
            },
            {
                header: 'Get Help',
                links: [
                    { text: 'Community', href: '' },
                    { text: 'Check Coverage', href: '' },
                    { text: 'Repair', href: '' }
                ]
            },
            {
                header: 'Helpful Topics',
                links: [
                    { text: 'Get AppleCare+', href: '' },
                    { text: 'Apple Account & Password', href: '' },
                    { text: 'Billing & Subscriptions', href: '' },
                    { text: 'Accessability', href: '' },
                    { text: 'iPhone Privacy', href: '' },
                    { text: 'iCloud+', href: '' },
                    { text: 'Wallet, Pay, Card', href: '' },
                ]
            }
        ]
    }
]

const Navbar = () => {

    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeMobileNav, setActiveMobileNav] = useState(null)

    const subMenuRef = useRef(null)

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [mobileOpen])

    useEffect(() => {
        if (!activeMobileNav || !subMenuRef.current) return

        const items = subMenuRef.current.querySelectorAll(".menu-item")

        gsap.fromTo(
            items,
            {
                x: 20,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.06,
            }
        )
    }, [activeMobileNav])

    useEffect(() => {
        if (!mobileOpen) return

        gsap.fromTo(
            ".nav-item",
            {
                x: 20,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.06,
            }
        )
    }, [mobileOpen])


    return (
        <>
            <div className="absolute w-full p-2.5 bg-gray-100 mx-auto z-50">
                <div className='w-full lg:w-[87.5%] mx-auto max-w-[1680px]'>
                    <div className='w-full lg:w-[85%] xl:w-[75%] mx-auto'>
                        {/* MOBILE TOP BAR */}
                        <div className="flex lg:hidden items-center justify-between">
                            {/* Logo */}
                            <a href="" className="w-10 h-auto text-gray-800">
                                <svg viewBox="0 0 24 24" className='w-7 h-auto' fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.52 12.46C16.508 11.8438 16.6682 11.2365 16.9827 10.7065C17.2972 10.1765 17.7534 9.74476 18.3 9.46C17.9558 8.98143 17.5063 8.5883 16.9862 8.31089C16.466 8.03349 15.8892 7.87923 15.3 7.86C14.03 7.76 12.65 8.6 12.14 8.6C11.63 8.6 10.37 7.9 9.40999 7.9C7.40999 7.9 5.29999 9.49 5.29999 12.66C5.30963 13.6481 5.48194 14.6279 5.80999 15.56C6.24999 16.84 7.89999 20.05 9.61999 20C10.52 20 11.16 19.36 12.33 19.36C13.5 19.36 14.05 20 15.06 20C16.79 20 18.29 17.05 18.72 15.74C18.0689 15.4737 17.5119 15.0195 17.1201 14.4353C16.7282 13.8511 16.5193 13.1634 16.52 12.46ZM14.52 6.59C14.8307 6.23965 15.065 5.82839 15.2079 5.38245C15.3508 4.93651 15.3992 4.46569 15.35 4C14.4163 4.10239 13.5539 4.54785 12.93 5.25C12.6074 5.58991 12.3583 5.99266 12.1983 6.43312C12.0383 6.87358 11.9708 7.34229 12 7.81C12.4842 7.82361 12.9646 7.71974 13.3999 7.50728C13.8353 7.29482 14.2127 6.98009 14.5 6.59H14.52Z"></path> </g></svg>
                            </a>

                            <div className="flex items-center justify-between gap-7">
                                <button>
                                    <img src="/search.png" className="w-6 h-auto" alt="" />
                                </button>
                                <button>
                                    <img src="/bag.png" className="w-5 h-auto" alt="" />
                                </button>
                                {/* Hamburger */}
                                <button
                                    onClick={() => {
                                        setMobileOpen(true)
                                        setActiveMobileNav(null)
                                    }}
                                    className="text-xl"
                                >
                                    ☰
                                </button>
                            </div>
                        </div>

                        <ul className="hidden lg:flex justify-between items-center font-normal">
                            <li className="hidden lg:block">
                                {/* Apple Logo */}
                                <a href="" className='flex items-start size-6 text-gray-800 cursor-pointer'>
                                    <svg viewBox="0 0 24 24" className='w-5 h-5' fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.52 12.46C16.508 11.8438 16.6682 11.2365 16.9827 10.7065C17.2972 10.1765 17.7534 9.74476 18.3 9.46C17.9558 8.98143 17.5063 8.5883 16.9862 8.31089C16.466 8.03349 15.8892 7.87923 15.3 7.86C14.03 7.76 12.65 8.6 12.14 8.6C11.63 8.6 10.37 7.9 9.40999 7.9C7.40999 7.9 5.29999 9.49 5.29999 12.66C5.30963 13.6481 5.48194 14.6279 5.80999 15.56C6.24999 16.84 7.89999 20.05 9.61999 20C10.52 20 11.16 19.36 12.33 19.36C13.5 19.36 14.05 20 15.06 20C16.79 20 18.29 17.05 18.72 15.74C18.0689 15.4737 17.5119 15.0195 17.1201 14.4353C16.7282 13.8511 16.5193 13.1634 16.52 12.46ZM14.52 6.59C14.8307 6.23965 15.065 5.82839 15.2079 5.38245C15.3508 4.93651 15.3992 4.46569 15.35 4C14.4163 4.10239 13.5539 4.54785 12.93 5.25C12.6074 5.58991 12.3583 5.99266 12.1983 6.43312C12.0383 6.87358 11.9708 7.34229 12 7.81C12.4842 7.82361 12.9646 7.71974 13.3999 7.50728C13.8353 7.29482 14.2127 6.98009 14.5 6.59H14.52Z"></path> </g></svg>
                                </a>
                            </li>
                            {
                                NavLinks.map((NavLink, index) => (
                                    <li key={index} className="group">
                                        {/* Main Nav Link */}
                                        <button className="text-xs cursor-pointer">{NavLink.text}</button>

                                        {/* Nested Menu */}
                                        <div className="absolute left-0 top-full w-screen
                                        bg-gray-100 shadow-md
                                        opacity-0 -translate-y-0.5 invisible
                                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                                        transition-all duration-600">
                                            <div className="w-[87.5%] max-w-[1680px] mx-auto">
                                                <div className="w-full lg:w-[85%] xl:w-[75%] mx-auto py-10">
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                                        {NavLink.subMenuGroups.map((group, gIndex) => (
                                                            <div
                                                                key={gIndex}
                                                            >
                                                                <h3 className="cursor-pointer pb-5 text-xs text-gray-600">{group.header}</h3>

                                                                {/* Elevated Links */}
                                                                {group.elevatedLinks?.length > 0 && (
                                                                    <ul className="mb-4 space-y-2">
                                                                        {group.elevatedLinks.map((link, lIndex) => (
                                                                            <li key={lIndex}>
                                                                                <a
                                                                                    href={link.href}
                                                                                    className="cursor-pointer block text-[22px] font-medium text-black"
                                                                                >
                                                                                    {link.text}
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}

                                                                {/* Normal Links */}
                                                                {group.links?.length > 0 && (
                                                                    <ul className="space-y-2">
                                                                        {group.links.map((link, lIndex) => (
                                                                            <li key={lIndex}>
                                                                                <a
                                                                                    href={link.href}
                                                                                    className="cursor-pointer block text-xs text-black"
                                                                                >
                                                                                    {link.text}
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </div>
                                                        ))}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }

                            <li>
                                <img src="/search.png" className="cursor-pointer w-5 h-5" alt="" />
                            </li>
                            <li>
                                <img src="/bag.png" className="cursor-pointer w-4 h-auto" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {
                mobileOpen && (
                    <div className="fixed inset-0 bg-white z-[100] overflow-y-auto overflow-x-hidden lg:hidden">

                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-4">
                            <button
                                onClick={() => setActiveMobileNav(null)}
                                className={`text-[18px] font-medium ${activeMobileNav ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <img src="/images/icon_chevron_large.svg" className="w-2 h-auto scale-x-[-1]" alt="" />
                            </button>

                            <button
                                onClick={() => setMobileOpen(false)}
                                className="text-[19px] font-medium"
                            >
                                ✕
                            </button>
                        </div>

                        {/* MAIN NAV */}
                        {!activeMobileNav && (
                            <ul className="py-4 space-y-3">
                                {NavLinks.map((nav, i) => (
                                    <li
                                        key={i}
                                        onClick={() => setActiveMobileNav(nav)}
                                        className="nav-item flex justify-between text-[25px] pl-10 font-medium cursor-pointer"
                                    >
                                        {nav.text}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* SUB MENU */}
                        {activeMobileNav && (
                            <div ref={subMenuRef} className="sub-menu px-4 py-6 space-y-8 pl-10">
                                {activeMobileNav.subMenuGroups.map((group, gIndex) => (
                                    <div key={gIndex}>
                                        <h3 className="menu-item text-lg text-gray-500 mb-4">
                                            {group.header}
                                        </h3>

                                        {group.elevatedLinks?.map((link, i) => (
                                            <div key={i} className="menu-item text-[25px] font-medium py-1">
                                                <a href="">{link.text}</a>
                                            </div>
                                        ))}

                                        {group.links?.map((link, i) => (
                                            <div key={i} className="menu-item text-[16px] font-medium py-1">
                                                <a href="">{link.text}</a>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                )
            }
        </>

    )
}


export default Navbar