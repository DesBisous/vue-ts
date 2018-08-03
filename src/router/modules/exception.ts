import Template from '../../components/common/Template.vue';
import Error from '../../views/exception/Error.vue';

export default {
  path: '/exception',
  name: 'exception',
  component: Template,
  meta: {
    title: '异常页',
    icon: 'ioshome',
  },
  children: [
    {
      path: '/exception/403',
      name: '403',
      component: Error,
      meta: {
        title: '403',
        icon: 'ioshome',
      },
    },
    {
      path: '/exception/404',
      name: '404',
      component: Error,
      meta: {
        title: '404',
        icon: 'ioshome',
      },
    },
    {
      path: '/exception/500',
      name: '500',
      component: Error,
      meta: {
        title: '500',
        icon: 'ioshome',
      },
    },
  ],
};
