import Template from '../../components/common/Template.vue';
import UserList from '../../views/user/UserList.vue';

export default {
  path: '/user',
  name: 'user',
  component: Template,
  meta: {
    title: '用户管理',
    icon: 'ioshome',
  },
  children: [
    {
      path: '/user/userList',
      name: 'userList',
      component: UserList,
      meta: {
        title: '用户列表',
        icon: 'ioshome',
      },
    },
    {
      path: '/user/userChart',
      name: 'userChart',
      template: `
        <div>
            用户图示化
        </div>
      `,
      meta: {
        title: '用户图示化',
        icon: 'ioshome',
      },
    },
  ],
};
