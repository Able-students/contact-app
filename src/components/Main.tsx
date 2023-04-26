import { Layout, Button, Table, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import store from '../store/store';
import type { ColumnsType } from 'antd/es/table';
import { ContactType, ContactListType } from '../store/reducer/contactReducer';
import { useSelector } from 'react-redux';
import * as actions from '../store/actions/contactActions';
import { useEffect, useState, useTransition } from 'react';
import { InitialStateType } from '../store/reducer/userReducer';
import {logout} from '../store/actions/userActions';

const { Header, Content } = Layout;

const Main = () => {
    const [isPending, startTransition] = useTransition();
    console.log(isPending,'--isPending');
  
    const navigator = useNavigate()
    type RootState = ReturnType<typeof store.getState>
    const { contactList } = useSelector((state: RootState) => state.contactReducer)
    const { currentUser } = useSelector((state: RootState) => state.userReducer) as InitialStateType

   
    console.log(contactList);
    useEffect(()=>{
        if(currentUser?.username){
        }else{
          navigator('/');
        }
    },[])
  
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
              <Button onClick={() => { navigator('/edit/?id=' + record.key); 
            //  localStorage.setItem('id', record.key.toString());
            }}>Edit</Button>
              <Button onClick={() => deleteContact(record.key)}>Delete</Button>
            </Space>
          ),
    },
    ];
    function deleteContact(id: number){
      if(contactList){
        const filteredList: ContactListType = contactList.filter((elem: ContactType) => elem.key !== id)
        actions.setContactList(filteredList)
      }
    }

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
      console.log('selectedRowKeys changed: ', newSelectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    };
  
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };

    const [freeee, setFreeee] = useState<any>(contactList);

    const filterName = ()=>{
      
      if(contactList.length>0){
        let arr = contactList.filter(el => el.name_id === currentUser?.id);
        setFreeee(arr);
      }
     
    }
     
    return (
    <Layout>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <h3 className='header__text'>My book  <span style={{position: 'absolute', right: '30px'}}   onClick={() => {navigator('/'); logout()}}>{currentUser?.username}</span></h3>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <h2>Welcome to react redux contact book</h2>
        <Button onClick={() => navigator('/add')} style={{marginBottom: '15px'}}>Add new contact</Button> 
        <Button onClick={() => filterName()} style={{margin: '0 0 15px 20px'}}>Filter contact</Button> 
        <Table 
          pagination={{defaultPageSize: 4}} 
          rowSelection={rowSelection} 
          dataSource={freeee} 
          columns={columns} 
        />
      </Content>
      {isPending && <h2>loading</h2>}
    </Layout>
    )
}

export default Main;