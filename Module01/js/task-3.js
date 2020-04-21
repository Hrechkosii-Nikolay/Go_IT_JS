const ADMIN_PASSWORD = 'jqueryismyjam';
let password = prompt('Enter password');
let message =
  password === null
    ? 'Отменено пользователем!'
    : password === ADMIN_PASSWORD
    ? 'Добро пожаловать!'
    : 'Доступ запрещен, неверный пароль!';
alert(message);
