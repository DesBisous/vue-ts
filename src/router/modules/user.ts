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
      template: `
        <div>
            用户列表
        </div>
      `,
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
