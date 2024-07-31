import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { AntDesignOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const App = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        setConfirmLoading(true);
        console.log('Form values: ', values);
        setTimeout(() => {
          setOpen(false);
          setConfirmLoading(false);
          form.resetFields();
        }, 2000);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
    form.resetFields();
  };

  return (
    <>
      <Button className='mt-6 w-32' type="primary" onClick={showModal}>
        <AntDesignOutlined />
        Invite
      </Button>
      <Modal
        title="Invitation"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          name="invite_form"
        >
          <Form.Item
            name="collegeName"
            label="College Name"
            rules={[{ required: true, message: 'Please input the college name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="location"
            label="Location"
            rules={[{ required: true, message: 'Please input the location!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="numberOfStudents"
            label="Number of Students"
            rules={[{ required: true, message: 'Please input the number of students!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="branch"
            label="Branch"
            rules={[{ required: true, message: 'Please input the branch!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="position"
            label="Position"
            rules={[{ required: true, message: 'Please input the position!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="batch"
            label="Batch"
            rules={[{ required: true, message: 'Please input the batch!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please input the description!' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default App;
