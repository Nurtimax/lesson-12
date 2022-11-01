import React, { useState } from "react";
import { MenuStyle } from "../style/Style";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import MenuModal from "../menu_modal/MenuModal";

const Menu = () => {
  const [openMenuModal, setOpenMenuModal] = useState(false);

  const openMenuModalHandler = () => {
    setOpenMenuModal((prevState) => !prevState);
  };

  return (
    <MenuStyle>
      {openMenuModal && <MenuModal />}

      <button onClick={openMenuModalHandler}>
        {openMenuModal ? (
          <>
            <GrClose />
          </>
        ) : (
          <BiMenuAltRight />
        )}
      </button>
    </MenuStyle>
  );
};

export default Menu;
