import { Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { useData, User } from "../../Context";
import { ActionButton } from "../ActionButton/ActionButton";

interface P {
  userId: number;
  isCreate?: boolean;
}

export const UserForm = ({ userId, isCreate }: P) => {

  const {getUserById,addUser, editUser} = useData()
  const userEditing = getUserById(userId)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    submitData(userState)
    setUserState({id:0, description: "", email:"",name:"", surname:""})

  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setUserState({id:0, description: "", email:"",name:"", surname:""})
  };

  const [userState, setUserState] = useState<User|undefined>(userEditing);

  const handleNameChange = (value: string) => {
    setUserState((prev) => ({ ...prev!, name: value }));
  };

  const handleSurnameChange = (value: string) => {
    setUserState((prev) => ({ ...prev!, surname: value }));
  };

  const handleEmailChange = (value: string) => {
    setUserState((prev) => ({ ...prev!, email: value }));
  };

  const handleDescriptionChange = (value: string) => {
    setUserState((prev) => ({ ...prev!, description: value }));
  };

  const submitData = (user: User)=>{
    isCreate?     addUser(user) :editUser(user)
  }

  return (
    <>
      <ActionButton
        actionType={isCreate ? "create" : "edit"}
        onActionClick={showModal}
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* ---------------- */}
        <Input
          placeholder="User Name"
          value={userState?.name}
          onChange={(e) => {
            handleNameChange(e.target.value);
          }}
        />
        <Input
          placeholder="User Surname"
          value={userState?.surname}
          onChange={(e) => {
            handleSurnameChange(e.target.value);
          }}
        />
        <Input
          placeholder="Email"
          value={userState?.email}
          onChange={(e) => {
            handleEmailChange(e.target.value);
          }}
        />

        <TextArea
          placeholder="Description"
          value={userState?.description}
          onChange={(e) => {
            handleDescriptionChange(e.target.value);
          }}
        />

        {console.log(userState)}
      </Modal>
    </>
  );
};
