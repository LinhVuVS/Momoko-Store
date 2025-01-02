import React from "react";
import Image from "next/image";

const FeatureSection = () => {
    return (
        <div className=" w-full bg-[#2f6950] p-[40px] max-sm:p-[10px]">
            <img src="/why_buy_here_2.webp" alt="Feature-Head" className="" />

            <div className="flex max-sm:flex-col justify-between mx-[60px] max-xl:mx-[20px] py-[20px] my-[45px] gap-5">
                <div className="flex flex-col items-center justify-center my-[20px]">
                    <img src="/Cow2_150x.avif" alt="Feature-Head" className="max-w-[120px]" />
                    <h3 className="text-[20px] font-bold text-[#fff] px-[10px]">HIGH QUALITY</h3>
                    <p className="text-[16px] font-light text-[#fff] px-[10px]">
                        Bàn phím cơ của chúng tôi được chế tạo từ các vật liệu cao cấp, đảm bảo độ bền và độ chính xác
                        trong từng thao tác. Với các switch được thiết kế tỉ mỉ, bạn sẽ cảm nhận được sự khác biệt ngay
                        từ lần gõ đầu tiên.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center my-[20px]">
                    <img src="/2bigger_150x.avif" alt="Feature-Head" className="max-w-[120px]" />
                    <h3 className="text-[20px] font-bold text-[#fff] px-[10px]">SUPER COMFY</h3>
                    <p className="text-[16px] font-light text-[#fff] px-[10px]">
                        Dù bạn đang làm việc cả ngày hay chơi game thâu đêm, bàn phím cơ mang đến sự thoải mái tuyệt
                        đối. Các phím bấm êm ái và phản hồi nhanh chóng giúp bạn luôn tập trung và hiệu quả.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center my-[20px]">
                    <img src="/3bigger_150x.avif" alt="Feature-Head" className="max-w-[120px]" />
                    <h3 className="text-[20px] font-bold text-[#fff] px-[10px]">OFFICIAL MERCH</h3>
                    <p className="text-[16px] font-light text-[#fff] px-[10px]">
                        Nếu bạn đang tìm kiếm một bàn phím cơ chính hãng, đây là nơi dành cho bạn! Chúng tôi cung cấp
                        một loạt các sản phẩm từ các thương hiệu hàng đầu, đáp ứng mọi nhu cầu từ game thủ đến dân văn
                        phòng.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
