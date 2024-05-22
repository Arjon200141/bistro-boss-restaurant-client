const Footer = () => {
    return (
        <footer>
            <div className="flex justify-between">
                <div className="footer p-10 bg-[#1F2937] ">
                    <nav className="ml-40 space-y-2">
                        <h2 className="ml-8 text-3xl font-semibold text-white ">Contact Us</h2>
                        <p className="text-sm text-white text-center">
                            123 ABS Street, Uni 21, Bangladesh <br />
                            +88 123456789 <br />
                            Mon - Fri: 08:00 - 22:00 <br />
                            Sat - Sun: 10:00 - 23:00 <br />
                        </p>
                    </nav>
                </div>
                <div className="footer w p-10 bg-[#111827] text-neutral-content">
                    <nav className="">
                        <h2 className="ml-40 text-3xl font-semibold text-white text-center">Follow US</h2>
                        <p className="ml-40 text-sm text-white text-center">Join us on social media</p>
                        <div className="grid grid-flow-col gap-12 ml-28">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                            <a><svg width="35.000000" height="35.000000" viewBox="0 0 35 35" fill="none" className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector" d="M25.34 0L9.63 0C4.27 0 0 4.27 0 9.63L0 25.36C0 30.69 4.27 35 9.63 35L25.36 35C30.69 35 35 30.72 35 25.36L35 9.63C34.97 4.27 30.69 0 25.34 0ZM31.9 23.97C31.9 28.32 28.35 31.93 23.94 31.93L11.03 31.93C6.67 31.93 3.06 28.38 3.06 23.97L3.06 11.02C3.06 6.67 6.61 3.06 11.03 3.06L24.02 3.06C28.38 3.06 31.98 6.61 31.98 11.02L31.98 23.97L31.9 23.97Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero" />
                                <path id="Vector" d="M23.86 11.19L23.78 11.11L23.7 11.03C22.03 9.36 19.8 8.44 17.48 8.44C12.53 8.47 8.52 12.53 8.55 17.48C8.55 19.88 9.52 22.16 11.19 23.86C12.85 25.55 15.11 26.49 17.48 26.49C22.46 26.41 26.44 22.24 26.36 17.21C26.31 14.98 25.44 12.8 23.86 11.19ZM17.48 23.43C14.2 23.48 11.54 20.84 11.48 17.56C11.43 14.28 14.06 11.62 17.35 11.56C20.63 11.51 23.29 14.15 23.35 17.43L23.35 17.51C23.35 20.71 20.71 23.37 17.48 23.43Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero" />
                                <path id="Vector" d="M29.02 8.04C29.02 9.22 28.11 10.19 26.92 10.19C26.36 10.19 25.82 9.98 25.44 9.57C24.61 8.74 24.61 7.34 25.5 6.51C25.9 6.1 26.41 5.89 26.98 5.89C27.46 5.89 27.95 6.08 28.32 6.37L28.38 6.43C28.46 6.48 28.51 6.56 28.57 6.61L28.62 6.67C28.83 7.04 29.02 7.53 29.02 8.04Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero" />
                            </svg>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;