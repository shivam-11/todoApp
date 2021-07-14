import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export const Refresh = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    console.log("hello");
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log("hello");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <><div>
      <Button type="primary" onClick={showModal} className = "border-2 bg-green-400 py-1 px-3 my-2 hover:border-gray-500">
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} zIndex = {5000} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      </div>

    
    </>
  )
};


