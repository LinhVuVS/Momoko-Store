import React from "react";
import Image from "next/image";
import Link from "next/link";

const Herosection = () => {
    return (
        <div className="flex max-md:flex-col-reverse items-center bg-[#f8cc93] max-h-[846px] max-md:h-full max-md:overflow-hidden">
            <div className="block w-1/2 max-md:w-full max-md:flex max-md:items-center max-md:flex-col max-md:text-center pl-[100px] max-md:pl-[32px] pr-[80px] max-md:pr-[32px] py-[100px] max-xl:py-[40px]">
                <h1 className="text-[44px] max-md:text-[36px] font-semibold">Trải Nghiệm Đẳng Cấp với Bàn Phím Cơ</h1>
                <p className="text-[17px] mx-[0] my-[16px] max-md:my-[8px]">
                    Bàn phím cơ không chỉ là công cụ làm việc mà còn là niềm đam mê của những người yêu công nghệ. Với
                    thiết kế tinh tế và cảm giác gõ phím đỉnh cao, bàn phím cơ mang đến trải nghiệm tuyệt vời cho mọi
                    thao tác.
                </p>
                <p className="text-[17px] mx-[0] my-[16px] max-md:my-[8px]">
                    Từ các switch đa dạng như Blue, Red, Brown đến đèn LED RGB lung linh, mỗi chiếc bàn phím cơ đều được
                    chế tác để đáp ứng nhu cầu của game thủ, lập trình viên và dân văn phòng. Hãy khám phá bộ sưu tập
                    của chúng tôi và tìm cho mình một chiếc bàn phím cơ phù hợp với phong cách của bạn.
                </p>
                <Link
                    href="/products"
                    className="inline-block text-[17px] bg-[#2f6950] text-[white] 
                                   px-[45px] py-[14px] rounded-[50px] mt-[16px] 
                                   [transition:all_0.3s_ease-in-out_0s] 
                                   hover:border-[solid] hover:border-[2px] 
                                 hover:border-[#2f6950] hover:bg-transparent 
                                 hover:text-[#2f6950]"
                >
                    KHÁM PHÁ NGAY
                </Link>
            </div>
            <div className="relative w-1/2 max-md:w-full h-full max-md:h-auto overflow-hidden">
                <Image
                    src="/hero.webp"
                    alt="herosection"
                    width={5000}
                    height={5000}
                    className="w-auto max-w-[1268px] h-full max-xl:bg-left object-cover rounded-tl-[500px] rounded-br-none rounded-tr-none rounded-bl-[500px] max-md:rounded-none "
                />
            </div>
        </div>
    );
};

export default Herosection;
