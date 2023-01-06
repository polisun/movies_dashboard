# Шаблон пустого react ts app


## [JSON-server](https://github.com/typicode/json-server)

### В данном шаблон сервер уже подключен с данными(_server/db.json_)



### Если хочешь подключить данный сервер в свое приложение тебе необходимо следущее:

1. `npm i -D json-server`
2. создать директорию с json файлом базы данных(название не имеет значения). например: _server/db.json_
3. заполнить _db.json_ файл данными(пример с данными по фильмам есть в этом проекте)
4. добавить скрипт запуска **json-server** в _package.json_. например:
```javascript
//package.json
// ...
  "scripts": {
    "start": "react-scripts start",
    // ...
    "start:server": "json-server -p 8080 --watch server/db.json"
  },
// ...
```

где:
-   `-p 8080`         - порт на котором запускается сервер
-   `--watch`         - флаг говорит о том что сервер будет следить за изменением файла
-   `server/db.json`  - путь к файлу базы данных

5. запустить скрипт
```cmd
    npm run start:server
```
6. можешь выполнять запросы на сервер _http://localhost:8080/movies_

### Полная документация как пользоваться сервером [тут](https://github.com/typicode/json-server)