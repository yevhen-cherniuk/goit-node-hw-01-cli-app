# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
https://monosnap.com/file/guUHEl2FD7ywu8xiIrZljSMucZQBRi

# Получаем контакт по id
node index.js --action get --id 5
https://monosnap.com/file/if28RyDp3l8xaPYd1uiKYWIJuDF2GI

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/cGGjmXcZaV1PWhEQ5yY6H6rcUc15RQ

# Удаляем контакт
node index.js --action remove --id=3
https://monosnap.com/file/68x9NOMFTYDS4pF1BYVfqfuq2nFnj9
