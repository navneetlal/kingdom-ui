import { Fragment, useState } from 'react';

import { Modal, Button, Form, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AddClan = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    console.log(form.getFieldsValue())
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      form.resetFields()
    }, 2000);
  };

  const handleCancel = () => {
    form.resetFields();
    setVisible(false);
  };

  return (
    <Fragment>
      <Button type="primary" onClick={showModal} icon={<PlusOutlined />} />
      <Modal
        title="New Clan"
        okText="Create"
        cancelText="Cancel"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{ modifier: 'public' }}
        >
          <Form.Item
            name="clanName"
            label="Name"
            rules={[{ required: true, message: 'Please input the name of kingdom!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="clanDescription" label="Description">
            <Input type="textarea" />
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default AddClan;