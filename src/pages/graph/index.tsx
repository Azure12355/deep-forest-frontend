import { EllipsisOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import {Button, Descriptions, DescriptionsProps, Dropdown, Input} from 'antd';
import React from 'react';
import {Neo4jGraph} from "@/components";

export default () => {

  const {Search} = Input;

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '学名',
      children: '松材线虫',
    },
    {
      key: '2',
      label: 'Telephone',
      children: '1810000000',
    },
    {
      key: '3',
      label: 'Live',
      children: 'Hangzhou, Zhejiang',
    },
    {
      key: '4',
      label: 'Remark',
      children: 'empty',
    },
    {
      key: '5',
      label: 'Address',
      children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    },
  ];


  return (
    <div
      style={{
        background: '#F5F7FA',
      }}
    >
      <PageContainer
        token={{
          paddingBlockPageContainerContent: 24,
          paddingInlinePageContainerContent: 60,
        }}
        header={{
          title: '页面标题',
          ghost: true,
          extra: [
            <Button key="1">次要按钮</Button>,
            <Button key="2">次要按钮</Button>,
            <Button key="3" type="primary">
              主要按钮
            </Button>,
            <Dropdown
              key="dropdown"
              trigger={['click']}
              menu={{
                items: [
                  {
                    label: '下拉菜单',
                    key: '1',
                  },
                  {
                    label: '下拉菜单2',
                    key: '2',
                  },
                  {
                    label: '下拉菜单3',
                    key: '3',
                  },
                ],
              }}
            >
              <Button key="4" style={{ padding: '0 8px' }}>
                <EllipsisOutlined />
              </Button>
            </Dropdown>,
          ],
        }}
      >
        <ProCard
          colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
          layout="center"
          bordered
        >
          <Search  placeholder="input search text" size={"large"}  onSearch={(value) => {
            alert(value);
          }} enterButton
                   style={{
                     width: '50%'
                   }}
          />
        </ProCard>
        <ProCard
          colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
          layout="center"
          bordered
        >
          <ProCard split="vertical">
            <ProCard title="详细信息" colSpan="30%">
              <Descriptions title="松材线虫" column={1} items={items} />
            </ProCard>
            <ProCard title="图数据可视化" headerBordered>
              <Neo4jGraph/>
            </ProCard>
          </ProCard>
        </ProCard>
      </PageContainer>
    </div>
  )
}
