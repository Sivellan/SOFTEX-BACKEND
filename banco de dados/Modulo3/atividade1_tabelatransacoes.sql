1
SELECT * FROM transacoes

2
SELECT 
ID_transacoes as codigos,
Data AS data_das_transacoes,
valor AS valores_das_trasacoes',
FROM transacoes

3
SELECT * FROM transacoes where valor > 100

4
SELECT 
id_transacoes,
valor
FROM transacoes order by valor desc;

5
SELECT 
    AVG(valor) AS media_valor,
    MAX(valor) AS valor_maximo,
    MIN(valor) AS valor_minimo,
    COUNT(*) AS total_transacoes
FROM transacoes;

6
SELECT 
    produto,
    AVG(valor) AS media_valor_por_produto
FROM transacoes
GROUP BY produto;

7
SELECT 
    categoria,
    COUNT(*) AS quantidade_total_produtos_vendidos,
    SUM(valor) AS valor_total_vendas,
    AVG(valor) AS media_valor_por_transacao
FROM transacoes
GROUP BY categoria;