const pages_data = [
  'pages/index/index',
  'pages/containers/login/LoginContainer'
];

if (process.env.NODE_ENV === 'development') {
  pages_data.unshift('pages/views/nav/index');
}

export default pages_data;

