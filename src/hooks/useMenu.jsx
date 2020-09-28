import { useEffect, useState } from 'react';

const useMenu = () => {
  const [menu, setMenu] = useState({ isVisible: false });
  const menuContainer = document.getElementById('menu');

  if (menu.isVisible === true) {
    // menuContainer.classList.toggle('hiddenMenu');
    console.log('hola');
  }

};

export default useMenu;
