import React from "react";
import Image from "next/image";

export default function Suggestions() {
  return (
    <div>
      <div className="suggestions-block">
        <div>
          <h1 className='suggestions-block-description'>
            به مناسبت <span className="suggestions-girls-day">روز دختر</span> به ازای هر خرید بالای یک میلیون تومان، هزینه ارسال
            رایگان می‌باشد.
          </h1>
        </div>
        <div className="suggestions-block-image-container">
          <Image
            src="/images/museum-of-bags-and-purses-handbag-messenger-bag-fashion-women-s-handbags-58fb84c0744bca0f2b0111df59adb636.png"
            alt="happy-girls-day"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
