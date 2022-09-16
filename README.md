# Получаем и выводим весь список контактов в виде таблицы (console.table) - https://monosnap.com/file/Zm4T0JehPUgRtaVpDrQRvV5CBHu4SI

node index.js --action list

# Получаем контакт по id - https://monosnap.com/file/A9g8WRh4dgLt3FBQ4IKwUuxRqkOrA9

node index.js --action get --id 5 -

# Добавялем контакт - https://monosnap.com/file/AnVFWQhAjh5DEuzx72Ml5x0QhwqNGW

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

# Удаляем контакт - https://monosnap.com/file/aBXFAYL6J0r0z33nQCDDmUn9ml2S0C

node index.js --action remove --id=3
