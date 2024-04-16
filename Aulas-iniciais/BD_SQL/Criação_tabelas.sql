create database avanti

create table cliente (
	id serial primary key,
	nome varchar(100) not null,
	telefone varchar(22) not null,
	endereco varchar(200) not null
)

create table venda (
	id serial primary key,
	produto varchar(100),
	cliente_id integer references cliente(id)
)

insert into venda (produto,cliente_id)
values ('Biscoito',13)

insert into cliente (nome,telefone,endereco)
values ('Gabriel','85980028922','Rua xy'),
('João','85980028922','Rua xy'),
('Maylon','85980028922','Rua xy'),
('Thiago','85980028922','Rua xy')

select * from venda v 

delete from cliente where id = '12'