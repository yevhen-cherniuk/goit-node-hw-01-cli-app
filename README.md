# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
https://monosnap.com/file/guUHEl2FD7ywu8xiIrZljSMucZQBRi

# Получаем контакт по id
node index.js --action get --id 5
https://monosnap.com/file/if28RyDp3l8xaPYd1uiKYWIJuDF2GI

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/5WRQ0V9QWRcFVu862NCk41nuKWmY8r

# Удаляем контакт
node index.js --action remove --id=3
https://monosnap.com/file/93GobYG0xMVpnF5rYZ8Kqz6yHFZYwp
