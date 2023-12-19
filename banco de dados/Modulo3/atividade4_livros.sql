insert into autores(AutorID, Nome, Nacionalidade) values (1, 'Fabio Gomes', 'brasileira');
insert into autores(AutorID, Nome, Nacionalidade) values (2, 'Paulo Coelho', 'brasileira');
insert into autores(AutorID, Nome, Nacionalidade) values (3, 'Maria de Lourdes', 'brasileira');
insert into Livros(LivroID, Titulo, AnoPublicacao, AutorID) values (1, 'Tudo é Rio', '2000-02-02', 1);
insert into Livros(LivroID, Titulo, AnoPublicacao, AutorID) values (2, 'Maktube', '1994-02-02', 2);
insert into Livros(LivroID, Titulo, AnoPublicacao, AutorID) values (3, 'O Alquimista', '2000-02-02', 2);
insert into Livros(LivroID, Titulo, AnoPublicacao, AutorID) values (4, '11 Minutos', '2000-02-02', 2);
insert into Livros(LivroID, Titulo, AnoPublicacao, AutorID) values (5, 'Coisas que eu sei', '2000-02-02', 3);

select * from livros order by AutorID 

SELECT 
L.LivroID,
L.Titulo,
L.AnoPublicacao,
A.Nome as Nome_autor
FROM Livros L
INNER JOIN autores A on (L.AutorID = A.AutorID)

SELECT 
L.LivroID,
L.Titulo,
L.AnoPublicacao,
A.Nome as Nome_autor
FROM Livros L
LEFT JOIN autores A on (L.AutorID = A.AutorID)
where Nacionalidade = 1

