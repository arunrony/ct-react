import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//Not tested well, may be buggy.
export default function RightSideMenu({selectedAL, handleClose, handleSelect}) {
  const menuItems = ["Profile", "My Account", "Billing"]
  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={selectedAL}
        keepMounted
        open={Boolean(selectedAL)}
        onClose={handleClose}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index}
                    onClick={() => handleSelect(item)}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
