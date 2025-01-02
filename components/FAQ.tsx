"use client";

import React, { useState } from "react";
import { Earth } from "lucide-react";
import Link from "next/link";

const FAQ = () => {
    // Mảng câu hỏi và câu trả lời, trong đó answer là JSX (có thể chứa các thẻ khác nhau)
    const faqData = [
        {
            question: "Đơn hàng của tôi đang ở đâu ?",
            answer: (
                <p>
                    Bạn có thể theo dõi vị trí đơn hàng ở{" "}
                    <Link href="/orders" className="text-blue-500 underline">
                        đây
                    </Link>
                    .
                </p>
            ),
        },
        {
            question: "Đơn hàng có thể giao đến chỗ tôi không?",
            answer: (
                <div>
                    <p className="font-bold">
                        Chúng tôi có thể giao sản phẩm đến tất cả các quốc gia. Việc vận chuyển sẽ được thực hiện bởi
                        bên chuyển phát thứ ba.
                    </p>
                    <br />

                    <ul className="">
                        <li className="">🌎 Vận chuyển trong nước sẽ mất khoảng tử 1-3 ngày</li>
                        <li className="">🌎 Vận chuyển ra nước ngoài sẽ mất khoảng 8-12 ngày</li>
                    </ul>
                </div>
            ),
        },
        {
            question: "tôi có thể trả hàng hoặc đổi hàng không",
            answer: (
                <div>
                    <p className="font-bold">
                        Mọi yêu cầu Trả hàng/Đổi hàng phải được thực hiện trong vòng 14 ngày kể từ Ngày giao hàng.
                    </p>
                    <br />

                    <p>
                        Đơn hàng phải ở tình trạng ban đầu chưa qua sử dụng để đủ điều kiện được hoàn lại tiền. Đơn hàng
                        trả lại do lỗi sản xuất, chúng tôi không thể hoàn lại tiền cho chi phí vận chuyển ban đầu của
                        bạn. Chúng tôi không chịu trách nhiệm về chi phí vận chuyển đổi/trả hàng phát sinh.
                    </p>
                </div>
            ),
        },
        {
            question: "Hủy đơn hàng như thế nào?",
            answer: (
                <p>
                    Để hủy đơn hàng, vui lòng gửi email đến support@momoko.com, nêu rõ họ tên đầy đủ, số đơn hàng và lý
                    do bạn muốn hủy đơn hàng. Vui lòng xem chính sách hoàn tiền của chúng tôi tại đây
                </p>
            ),
        },
    ];

    // State để quản lý câu hỏi nào đang mở
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Hàm để mở hoặc đóng câu hỏi
    const toggleAnswer = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="flex flex-col justify-center items-center my-[50px] mx-[32px] max-sm:mx-[20px]">
            <img src="FAQ.svg" alt="FAQ" />
            <p className="text-[38px] font-bold text-center leading-[43px] mb-5 p-2.5">
                Bạn có câu hỏi nào liên quan đến sản phẩm ?
            </p>
            <div className="flex flex-col p-5 max-sm:p-0 w-full">
                {faqData.map((faq, index) => (
                    <div key={index} className="w-full mb-4">
                        {/* Câu hỏi */}
                        <div
                            className="w-full bg-[#eeeeee] no-underline text-[21px] 
                                        font-medium text-[#12442e] relative cursor-pointer
                                        block mx-0 px-[30px] py-4 rounded-2xl border-[none] transition-all duration-300"
                            onClick={() => toggleAnswer(index)}
                        >
                            {faq.question}
                        </div>

                        {/* Câu trả lời - hiệu ứng trượt xuống */}
                        <div
                            className={`overflow-hidden transition-all duration-500 ${
                                openIndex === index ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                            }`}
                        >
                            <div className="ml-3 text-[18px] text-[#333] p-2">{faq.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
