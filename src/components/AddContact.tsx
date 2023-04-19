import { Button, Form, Input, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import * as actions from '../store/actions/contactActions';

const { Header, Content } = Layout;

const AddContact = () => {
    const navigator = useNavigate()
    const [form] = Form.useForm();
    const content: string = 'Add contact';
    const addContact = () => {
        const contact = {
            key: Math.round(Math.random() * 100000),
            name: form.getFieldValue('name'),
            email: form.getFieldValue('email'),
            phone: form.getFieldValue('phone')
        }
        actions.addContact(contact)
        navigator('/contacts')
    }
    return (
        <Layout>
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
          <h3 className='header__text' onClick={() => navigator('/contacts')}>My book</h3>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px' }}>
          <h2>{content}</h2>
        <Form
            form={form}
            style={{ maxWidth: 600, margin: 'auto' }}
            >
            <Form.Item label="Name" name='name'>
                <Input placeholder="Enter name" />
            </Form.Item>
            <Form.Item label="Email" name='email'>
                <Input placeholder="Enter email" />
            </Form.Item>
            <Form.Item label="Phone" name='phone'>
                <Input placeholder="Enter phone" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={() => addContact()}>Add contact</Button>
            </Form.Item>
        </Form>
        </Content>
      </Layout>
    )
}

export default AddContact;