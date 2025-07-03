

# Microservice Email Sending — Monorepo NestJS + Redis + Bull + Docker

Este projeto é um monorepo NestJS que implementa uma arquitetura de microserviços para envio assíncrono de e-mails, utilizando Redis como broker e Bull para filas. O repositório contém:

- **API**: Recebe requisições HTTP, cadastra usuários e emite eventos de envio de e-mail.
- **Redis Worker**: Microserviço que consome eventos, enfileira e processa o envio de e-mails.
- **Redis**: Banco de dados em memória usado como broker de mensagens e backend do Bull.

---

## Como rodar localmente

### 1. Suba apenas o Redis localmente (se não usar Docker Compose)
```sh
docker run --name redis-local -p 6379:6379 redis:6.2.3-alpine
```

### 2. Rode a API e o worker separadamente
```sh
npm run start:dev --workspace=api
npm run start:dev --workspace=redis
```

---

## Como rodar tudo via Docker Compose

```sh
docker-compose up --build
```

Isso irá subir:
- API (`apps/api`)
- Redis (banco)
- Redis Worker (`apps/redis`)

---

## Principais mudanças e melhorias recentes

- **Monorepo:** Estrutura unificada para múltiplos microserviços.
- **Integração via eventos:** API emite eventos de e-mail via Redis, desacoplando lógica de envio.
- **Fila Bull:** Envio de e-mails é processado de forma assíncrona e escalável.
- **Docker Compose:** Facilita o ambiente de desenvolvimento e produção, rodando todos os serviços juntos.
- **Código limpo e modular:** Separação clara de responsabilidades, fácil manutenção e escalabilidade.

---

## Novidades

- Serviço `redis-worker` adicionado ao Docker Compose.
- Enfileiramento real de e-mails implementado.
- Providers e módulos ajustados para injeção correta de dependências.
- Documentação e exemplos de uso atualizados.

---

## Estrutura do Projeto

```
microservice-email-sending/
  apps/
    api/      # Microserviço principal (API)
    redis/    # Microserviço worker (processa fila, envia e-mail)
  docker-compose.yml
  Dockerfile
  ...
```

---

## Fluxo resumido

1. **API** recebe requisição de criação de usuário.
2. API emite evento `CREATE_SEND_EMAIL` via Redis.
3. **Redis Worker** consome o evento, enfileira e processa o envio do e-mail.
4. E-mail é enviado de forma assíncrona.

