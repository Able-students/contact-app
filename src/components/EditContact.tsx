import { Button, Form, Input, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import * as actions from '../store/actions/contactActions';
import store from '../store/store';
import { useSelector } from 'react-redux';

const { Header, Content } = Layout;

const EditContact = (props: any) => {
    const navigator = useNavigate()
    const [form] = Form.useForm();
    const content: string = 'Edit contact';
    const url: URL = new URL(window.location.href)
    const id: number | any = url.searchParams.get('id');
    // const localId: string | null = localStorage.getItem('id')
    // console.log(localId);
    
    type RootState = ReturnType<typeof store.getState>
    const { contactList } = useSelector((state: RootState) => state.contactReducer)
    const editedContact = contactList.find(elem => elem.key === +id)

    const editContact = () => {
        const contact = {
            key: +id,
            name: form.getFieldValue('name'),
            email: form.getFieldValue('email'),
            phone: form.getFieldValue('phone')
        }
        actions.editContact(contact)
        navigator('/')
    }

    return (
        <Layout>
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
          <h3 className='header__text' onClick={() => navigator('/')}>My book</h3>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px' }}>
          <h2>{content}</h2>
        <Form
            form={form}
            initialValues={editedContact}
            style={{ maxWidth: 600, margin: 'auto' }}
            >
            <Form.Item label="Name" name='name'>
                <Input placeholder="Enter name"/>
            </Form.Item>
            <Form.Item label="Email" name='email'>
                <Input placeholder="Enter email" />
            </Form.Item>
            <Form.Item label="Phone" name='phone'>
                <Input placeholder="Enter phone" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={() => editContact()}>Save</Button>
            </Form.Item>
        </Form>
        </Content>
      </Layout>
    )
}

export default EditContact;