create table users (
	id serial primary key,
	nome varchar(100) not null,
	email varchar(100) unique not null,
	senha text not null,
	cargo varchar(20) default 'leitor',
	criado_em timestamp default current_timestamp
);

create table posts (
	id serial primary key,
	titulo varchar(200) not null,
	conteudo text not null,
	criado_em timestamp default current_timestamp,
	usuario_id integer references users(id)
);