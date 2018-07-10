import About from '../../views/About.vue';

export default {
  path: '/user',
  name: 'user',
  template: `
    <div>
        <router-view></router-view>
    </div>
  `,
  meta: {
    title: '用户管理',
    icon: 'ioshome',
  },
  children: [
    {
      path: '/user/userList',
      name: 'userList',
      component: About,
      meta: {
        title: '用户列表',
        icon: 'ioshome',
      },
    },
    {
      path: '/user/userChart',
      name: 'userChart',
      component: About,
      meta: {
        title: '用户图示化',
        icon: 'ioshome',
      },
    },
  ],
};
