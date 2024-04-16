create database Certidao_debito

create table clientes (
    id serial primary key,
    nome varchar(50) not null,
    cpf varchar(11)
);

create table certidao (
 	id serial primary key,
 	cliente_id int,
    foreign key (cliente_id) references clientes(id),
   	data_emissao date not null,
   	validade date not null,
   	codigo_validacao varchar(100) not null
 );

create table  debito (
	id serial primary key,
	cliente_id int,
	foreign key (cliente_id) references clientes(id),
	valor NUMERIC(10, 2) not null,
	data_vencimento date not null
);

create table imovel (
	id serial primary key,
	cliente_id int,
	foreign key (cliente_id) references clientes(id),
	endereco varchar(100) not null,
	contrato_ativo boolean not null
);

insert into clientes (nome,cpf)
values ('Gabriel','82163211210'),
('João','72143251211'),
('Thiago','62133212125'),
('Leticia','61293221213'),
('Mayara','52138241214'),
('Gabriela','52193231515')

insert into certidao (cliente_id, data_emissao, validade, codigo_validacao)
values (1,'2024-01-12','2024-02-11','8efa7440-83ba-4f47-adba-d5cb5d73ce55'),
(2,'2024-02-04','2024-03-03','66e0b9b3-25a4-4891-9f2c-f611a153036f'),
(4,'2024-01-24','2024-02-23','41c4f35c-4497-4826-8d78-ada1cd362d7c'),
(5,'2024-03-15','2024-04-14','b63fea54-700e-42ae-92a9-ad6269663550'),
(6,'2024-03-21','2024-04-20','b420601d-e9d3-4737-b409-f33a40f94bf2'),
(7,'2024-04-14','2024-05-13','570b1403-1d83-4a06-951c-c7c769cc4006')
(5,'2024-01-16','2024-02-15','c2f996e9-4785-4f36-9f37-17cddc4716b6'),;

insert into debito (cliente_id, valor, data_vencimento)
values (6,'10.00','2024-11-11')
(1,'0.00','2024-01-12')
(2,'500.30','2024-04-01'),
(4,'200.0','2024-02-24'),
(5,'87.0','2024-04-15'),
(6,'0.00','2024-02-22'),
(7,'0.00','2024-01-13')

insert into imovel (cliente_id, endereco, contrato_ativo)
values (1,'Rua Oito de Agosto',false),
(2,'Rua Jurema',true),
(4,'Rua Pedro Borges 20',false),
(5,'Rua Vinte e Nove de Novembro',true),
(6,'Rua Alice',false),
(7,'Rua Vila Nova do Cajueiro',false)


// A -
select * from clientes c 

// B - A certidão só poderá ser emitida se o cliente não tiver débito
select * 
from certidao c
Full JOIN debito d on c.cliente_id = d.cliente_id
Where d.valor > 0
and d.data_vencimento > current_date;


// C 
select *
from debito d  
LEFT join imovel i on d.cliente_id = i.cliente_id
WHERE d.cliente_id = 2;

// D
select *
from imovel i 
inner join clientes c on i.cliente_id = i.cliente_id
where i.contrato_ativo = true ;

// E
SELECT *
FROM certidao c
WHERE cliente_id = 5
AND c.data_emissao BETWEEN '2024-01-01' AND '2024-12-31';

// F
select *
from clientes c 
right join debito d on d.cliente_id = d.cliente_id;

// G
select *
from clientes c 
right join certidao c2  on c.id = c2.cliente_id;

// H
select*
from clientes c 
join debito d on c.id = d.cliente_id
where d.valor > 0;

// I 
SELECT
  EXTRACT(MONTH FROM data_emissao) AS mes,
  COUNT(*) AS quantidade_certidoes
FROM certidao
GROUP BY EXTRACT(MONTH FROM data_emissao)
ORDER BY mes;


select * from certidao c 
select * from debito d 
select * from imovel i 

create extension if not exists "uuid-ossp";
select uuid_generate_v4();
