import React from "react";

import { MapPinned, Smartphone, Mail } from "lucide-react";
import Footer from "@/components/Footer";
import MapComponent from "@/components/MapComponent";

const Contact = () => {
    return (
        <>
            <div className=" grid xl:grid-cols-2 md:grid-cols-1 mx-[50px] px-[15px] py-4 md:mx-[16px] max-sm:mx-[8px]">
                <div className="row">
                    <div className="">
                        <div className="px-[15px]">
                            <p className="text-heading1-bold text-[40px]">MOMOKO Liên Hệ</p>
                            <ul className="mt-6">
                                <li className="flex gap-3 mt-2">
                                    <MapPinned /> <span>Địa chỉ: Nam Từ Liêm, Hà Nội</span>
                                </li>
                                <li className="flex gap-3 mt-2">
                                    <Smartphone /> <span>Số điện thoại: 0123456789</span>
                                </li>
                                <li className="flex gap-3 mt-2">
                                    <Mail /> <span>Email: momokoshop@gmail.com</span>
                                </li>
                            </ul>

                            <div className="border-t-[#dee2e6] border-t border-solid py-4 mt-4">
                                <p className="text-[24px] uppercase mb-3.5">Liên hệ với chúng tôi</p>
                                <input
                                    placeholder="Nguyễn Văn A"
                                    className="w-full h-[52px] px-4 py-2 mb-4 text-[20px] leading-normal rounded-[.3rem] border-[1px] border-[solid] border-[#ced4da] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out]"
                                />

                                <input
                                    placeholder="Email"
                                    className="w-full h-[52px] px-4 py-2 mb-4 text-[20px] leading-normal rounded-[.3rem] border-[1px] border-[solid] border-[#ced4da] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out]"
                                />

                                <input
                                    placeholder="Số điện thoại"
                                    className="w-full h-[52px] px-4 py-2 mb-4 text-[20px] leading-normal rounded-[.3rem] border-[1px] border-[solid] border-[#ced4da] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out]"
                                />

                                <textarea
                                    placeholder="Ghi chú"
                                    className="w-full h-[138px] px-4 py-2 mb-4 text-[20px] leading-normal rounded-[.3rem] border-[1px] border-[solid] border-[#ced4da] [transition:border-color_.15s_ease-in-out,_box-shadow_.15s_ease-in-out]"
                                />

                                <button
                                    className="h-[52px] w-full bg-[#2f6950] text-[white] 
                                            px-[45px] py-[14px] rounded-[20px]
                                            [transition:all_0.3s_ease-in-out_0s] 
                                            hover:border-[solid] hover:border-[2px] 
                                            hover:border-[#2f6950] hover:bg-transparent 
                                            hover:text-[#2f6950]"
                                >
                                    Gửi liên hệ của bạn
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="">
                        <MapComponent />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;

export const dynamic = "force-dynamic";
