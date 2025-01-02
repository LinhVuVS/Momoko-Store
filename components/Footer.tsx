import React from "react";
import {
    Star,
    Truck,
    FileQuestion,
    Pencil,
    ScrollText,
    TicketSlash,
    Wrench,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#f8cc93] py-10 px-6 mt-8 rounded-tl-[10px] rounded-tr-[10px]">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Information Section */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold mb-4">INFORMATION</h3>
                    <a
                        href="#"
                        className="flex items-center justify-center md:justify-start text-lg font-medium text-gray-700"
                    >
                        Review
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} fill="yellow" className="ml-1" />
                        ))}
                    </a>
                </div>

                {/* Service Section */}
                <div className="max-sm:flex max-sm:flex-col max-sm:items-center text-center md:text-left ">
                    <h3 className="text-xl font-semibold mb-4">SERVICE</h3>
                    <ul className="space-y-2">
                        {[
                            { text: "Track my Order", Icon: Truck },
                            { text: "FAQ", Icon: FileQuestion },
                            { text: "Shipping Policy", Icon: Pencil },
                            { text: "Privacy Policy", Icon: ScrollText },
                            { text: "Refund Policy", Icon: TicketSlash },
                            { text: "Terms of Service", Icon: Wrench },
                        ].map(({ text, Icon }, i) => (
                            <li
                                key={i}
                                className="flex items-center gap-2 cursor-pointer hover:text-gray-800 transition"
                            >
                                {text}
                                <Icon size={20} />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold mb-4">FOLLOW US</h3>
                    <div className="flex justify-center md:justify-start gap-4">
                        {[
                            { Icon: Facebook, href: "#" },
                            { Icon: Twitter, href: "#" },
                            { Icon: Instagram, href: "#" },
                            { Icon: Youtube, href: "#" },
                        ].map(({ Icon, href }, i) => (
                            <a
                                key={i}
                                href={href}
                                className="text-gray-700 hover:text-gray-900 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon size={30} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Newsletter Signup Section */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold mb-4">SIGN UP</h3>
                    <p className="text-gray-700 leading-6 mb-4">
                        Sign up for our newsletter to receive updates about upcoming merch drops.
                    </p>
                    <form className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#2f5c47] outline-none transition"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#2f5c47] text-white py-3 rounded-md [transition:all_0.3s_ease-in-out_0s] 
                                   hover:border-[solid] hover:border-[2px] 
                                 hover:border-[#2f6950] hover:bg-transparent 
                                 hover:text-[#2f6950]"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
