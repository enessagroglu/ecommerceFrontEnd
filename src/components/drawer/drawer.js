import React, { useState } from 'react';
import { Button, Drawer} from 'antd';


export default function Drawer(){
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onChange = e => {
        setPlacement(e.target.value);
    };

return (
    <>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};


