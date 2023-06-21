FROM golang:1.18.2

WORKDIR /app
COPY ./backend .
RUN go mod init todo_app
RUN go install github.com/cosmtrek/air@latest
RUN go get -u gorm.io/gorm
RUN go get github.com/lib/pq
RUN go get github.com/labstack/echo/v4
RUN go get github.com/labstack/echo/v4/middleware

CMD ["air"]
