# todo_app

todoを管理するWebアプリケーション

## 環境構築方法

フロントとバックエンドを分けて記載

### front

下記の手順で実行します。

1. 下記のコマンドを実行

```bash
$ npm create vite
```

2. Reactを選択
3. TypeScriptを選択する


## Docker上でpsqlとairを動かす

imageとcontainerの作成・起動をまとめて実行してくれます。

```bash
$ docker-compose up -d
```

Dockerコンテナ上のpostgresにアクセス
```bash
$ docker exec -it todo_app_psql psql -U postgres -d todo_app
```

Dockerコンテナ上のログを見る方法
```bash
$ docker logs -f todo_app_go
```


## バックエンドディレクトリ構成
```
.
├── Dockerfile
├── api
│   ├── handlers
│   │   └── todo_handler.go
│   ├── models
│   │   ├── card.go
│   │   ├── todo.go
│   │   └── users.go
│   └── store
├── go.mod
├── go.sum
├── internal
├── main.go
├── test
└── tmp
    ├── build-errors.log
    └── main
```
