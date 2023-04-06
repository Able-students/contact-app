import { Layout, Button, Table, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import store from '../store/store';
import type { ColumnsType } from 'antd/es/table';
import { ContactType } from '../store/reducer/contactReducer';
import { useSelector } from 'react-redux';
const { Header, Content } = Layout;

const Main = () => {
    const navigator = useNavigate()
    // const { contactList } = store.getState().contactReducer
    type RootState = ReturnType<typeof store.getState>
    const { contactList } = useSelector((state: RootState) => state.contactReducer)
    const columns: ColumnsType<ContactType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Phone number',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
              <Button onClick={() => navigator('/edit')}>Edit</Button>
              <Button onClick={() => alert(record.key)}>Delete</Button>
            </Space>
          ),
    },
    ];
      
    return (
    <Layout>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <h3 className='header__text'>My book</h3>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <h2>Welcome to react redux contact book</h2>
        <Button onClick={() => navigator('/add')} style={{marginBottom: '15px'}}>Add new contact</Button> 
        <Table dataSource={contactList} columns={columns} />;
      </Content>
    </Layout>
    )
}

export default Main;