# Requitos da API Rentx

Este documento serve para a análise de requisitos da API Rentx.

## Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado, por padrão, com disponipilidade.
O usuário responsável pelo cadastro deve ser um usuário administrador.

## Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponívels pelo nome da categoria.
Deve ser possível listar todos os carros disponívels pelo nome da marca.
Deve ser possível listar todos os carros disponívels pelo nome do carro.

**RN**
O usuário não precisa estar logado no sistema.

## Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.

## Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro.

**RNF**
Utilizar o multer upload dos arquivos.

**RN**
O usuárui deve poder cadastrar mais de uma imagem para o carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

## Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
O usuário deve esta logado na aplicação
