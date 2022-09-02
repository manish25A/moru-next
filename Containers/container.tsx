import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { NextPage } from 'next';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

import styles from '../styles/Container.module.css'
const Container:NextPage = (props:any) => {

    
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >

            <Layout className="site-layout">
                <Header
                    className={styles.antLayoutHeader}
                    style={{
                        padding: 0,
                    }}
                >
                <Breadcrumb
                        style={{
                            margin: '16px 20px',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                    </Breadcrumb>
                    </Header>

                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                   
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        {props.children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};
export default Container
