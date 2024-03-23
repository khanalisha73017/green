import React, { useState } from "react";
import { Modal } from "./Modal";
import { AddTaskForm } from "./AddTaskForm";


const Toolbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex gap-4 items-center justify-between mb-8">
      <button className="btn" onClick={openModal}>
        Add Task
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddTaskForm closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Toolbar;
