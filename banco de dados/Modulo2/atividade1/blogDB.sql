create database blogDB

create table AUTOR (
AutorID int primary key,
Nome_autor varchar(30),
Email varchar(30)
)


create table POST (
PostID int primary key,
Titulo varchar(20),
Conteudo varchar(50),
Data_publicacao date,
AutorID int,
FOREIGN KEY (AutorID) REFERENCES autor(AutorID)
)


create table COMENTARIO (
ComentarioID int primary key,
Texto varchar(100),
Data_comentario date,
PostID int,
AutorID int,
FOREIGN KEY (PostID) REFERENCES Post(PostID),
FOREIGN KEY (AutorID) REFERENCES autor(AutorID)
)