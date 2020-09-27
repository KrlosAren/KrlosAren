import { useEffect, useState } from 'react';

const useMenu = () => {
  const [menu, setMenu] = useState({ isVisible: false });
  const menuContainer = document.getElementById('menu');

  if (menu.isVisible) {
    menuContainer.classList.toggle('hiddenMenu');
  }
};

export default useMenu;
