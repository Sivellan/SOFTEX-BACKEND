insert into produtos(ProdutoID, Nome_produto, Preco, qtde_estoque) values (1, 'Smartphone', 799.99, 20);
insert into produtos(ProdutoID, Nome_produto, Preco, qtde_estoque) values (2, 'Tablet', 349.99, 10);
insert into produtos(ProdutoID, Nome_produto, Preco, qtde_estoque) values (3, 'Fone de ouvido', 49.99, 50);

update produtos set qtde_estoque = 25, preco = 849.99 where ProdutoID = 1

delete from produtos where idproduto in (1, 2);
insert into produtos(ProdutoID, Nome_produto, Preco, qtde_estoque) values (2, 'Tablet', 349.99, 5);
insert into produtos(ProdutoID, Nome_produto, Preco, qtde_estoque) values (3, 'Fone de ouvido', 49.99, 40);

