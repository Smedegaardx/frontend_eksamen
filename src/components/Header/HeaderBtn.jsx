import Link from "next/link";
import { LettersPullUp as FlippingText } from "./FlippingText";

const HeaderBtn = ({
  setActivePage,
  activePage,
  text,
  link,
  onMouseEnter,
  onMouseLeave,
}) => {
  let isActive = false;
  if (activePage == text) {
    isActive = "active";
  }

  return (
    <Link
      data-page={text}
      href={link}
      onClick={() => setActivePage(text)}
      className="flex flex-col"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>
        <FlippingText
          text={text}
          className="active:text-(--color-brand)"
          data={isActive}
        ></FlippingText>
      </div>
    </Link>
  );
};

export default HeaderBtn;
