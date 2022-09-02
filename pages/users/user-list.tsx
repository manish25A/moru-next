import { Card, Layout, Row,Col } from 'antd';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Container from '../../Containers/container';
import { fetchUsers } from '../api/fetchUsers';

const { Header, Sider, Content } = Layout;
import { EditOutlined, EllipsisOutlined, HeartFilled ,HeartOutlined} from '@ant-design/icons';

const UserList: NextPage = (props:any) => {
    let { data } = useSWR('users', fetchUsers)
    
    const [userData, setUserData] = useState([])
    useEffect(() => {
        setUserData(data)
    }, [data]); 

    const listenCardEvent = (e: any, id:any) => {
        const newList= data.map((userData: any) => {
            if (id === userData.id) {
                const updatedUser = {
                    ...userData,
                    isFavourite:!userData?.isFavourite
                }
                return updatedUser;
            }
            return userData;
        })
        setUserData(newList)
    }

    return (
        <Container {...props}>
            <>
                <Layout>
                    <Row justify="start" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        
                    {userData?.map((user: any) => (
                        <Col>
                        <Card
                            key={user.id}
                            hoverable
                            style={{ width: 240, marginBottom: 20 }}
                                actions={[
                               user?.isFavourite ? <HeartFilled key='favourite' onClick={()=> listenCardEvent('favourite',user.id)} />:<HeartOutlined key="notFavourite" onClick={()=> listenCardEvent('favourite',user.id)}/>,
          <EllipsisOutlined key="ellipsis" onClick={()=> listenCardEvent('ellipsis',user.id)} />,
        ]}
                            cover={
                                <img
                                    alt='person'
                                    src='https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'
                                />
                            }
                        >
                            <p>{user?.name}</p>
                           <p> {user?.email}</p>
                           <p> {user?.phone}</p>
                        </Card>
</Col>
                    ))
                        }
                    </Row>

                </Layout>
            </ > 
            
        </Container>
    );
};

export default UserList;