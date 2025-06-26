<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

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

---

## Como contribuir

1. Fork este repositório
2. Crie uma branch: `git checkout -b minha-feature`
3. Faça suas alterações e commits semânticos
4. Envie um PR

---

## Contato

Dúvidas ou sugestões? Abra uma issue ou envie um PR!

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
