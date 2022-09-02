import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { NextPage } from 'next';

const { Header, Sider, Content } = Layout;
import styles from '../../styles/Users.module.css'
import Container from '../../Containers/container'

const UserList:NextPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Container>
        </Container>
    );
};

export default UserList;