create database db_controle_filmes_ab;

use db_controle_filmes_ab;

#tem que obrigatoriamente comecar com o tipo
create table tbl_filme(
	id int not null primary key auto_increment,
	nome varchar(80) not null,
    duracao time not null,
    sinopse text not null,
    data_lancamento date not null,
    foto_capa varchar(200),
    link_trailer varchar(200)
);

create table tbl_idioma(
    id_idioma int not null primary key auto_increment,
    idioma varchar(45) not null
);

create table tbl_genero(
    id_genero int not null primary key auto_increment,
    genero varchar(45)
);

create table tbl_usuario(
    id_usuario int not null primary key auto_increment,
    nome_usuario varchar(200),
    email_usuario varchar(200)
);

create table tbl_sexo(
    id_sexo int not null primary key auto_increment,
    sexo varchar(10)
);

create table tbl_nacionalidade(
    id_nacionalidade int not null primary key auto_increment,
    nacionalidade varchar(30)
);

create table tbl_classificacao(
    id_classificacao int not null primary key auto_increment,
    classificacao varchar(100)
);