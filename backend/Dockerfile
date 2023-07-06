FROM golang:1.18.2

WORKDIR /app
COPY go.mod go.sum ./
RUN ["go", "mod", "download"]
RUN ["go", "install", "github.com/cosmtrek/air@latest"]
ADD ./ ./

CMD ["air"]
