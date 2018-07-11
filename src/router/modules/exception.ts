export default {
  path: '/exception',
  name: 'exception',
  template: `
    <div>
        <router-view></router-view>
    </div>
  `,
  meta: {
    title: '异常页',
    icon: 'ioshome',
  },
  children: [
    {
      path: '/exception/403',
      name: '403',
      template: `
        <div>
            403 错误啦！
        </div>
      `,
      meta: {
        title: '403',
        icon: 'ioshome',
      },
    },
    {
      path: '/exception/404',
      name: '404',
      template: `
        <div>
            404 错误啦！
        </div>
      `,
      meta: {
        title: '404',
        icon: 'ioshome',
      },
    },
    {
      path: '/exception/500',
      name: '500',
      template: `
        <div>
            500 错误啦！
        </div>
      `,
      meta: {
        title: '500',
        icon: 'ioshome',
      },
    },
  ],
};
