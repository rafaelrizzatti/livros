import React from 'react';
import { MDBDataTable} from 'mdbreact';
import { Link } from 'react-router-dom'
const DatatablePage = () => {
  const data={
    columns: [
      {
        label: 'Livro',
        field: 'livro',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Autor',
        field: 'autor',
        sort: 'asc',
        width: 300
      },
      {
        label: 'Editora',
        field: 'editora',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Ano',
        field: 'ano',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Ações',
        field: 'acoes',
        sort: 'asc',
        width: 200
      }
    ],
    rows: [
      {
        livro: 'O Pequeno Principe - Edição de bolso (9788561706210)',
        autor: 'HarperColins',
        editora: "Antoine de Saint-Exupéry",
        ano: '2011',
        acoes : <Link to={{
            pathname: '/O Pequeno Principe - Edição de bolso (9788561706210)',
            params: {
              livro: "O Pequeno Principe - Edição de bolso (9788561706210)",
              autor: "HarperColins",
              editora: "Antoine de Saint-Exupéry",
              ano: '2011',
              idioma: "Portugues",
              peso: "250",
              dimensoes: "20.8,14,1.2"
            }
          }}>Detalhes</Link>
      },
      {
        livro: 'O historiador (9788573029932)',
        autor: 'Elizabeth Kostava',
        editora: "Ponto de leitura",
        ano: '2009',
        acoes : <Link to={{
            pathname: '/O historiador (9788573029932)',
            params: {
              livro: "O historiador (9788573029932)",
              autor: "Elizabeth Kostava",
              editora: "Ponto de leitura",
              ano: '2009',
              idioma: "Portugues",
              peso: "250",
              dimensoes: "20.8,14,1.2"
            }
          }}>Detalhes</Link>
      },
      {
        livro: 'Prazeres Malditos (9788532522498)',
        autor: 'Laurell K. Hamilton',
        editora: "Rocco",
        ano: '2013',
        acoes : <Link to={{
            pathname: '/Prazeres Malditos (9788532522498)',
            params: {
              livro: "Prazeres Malditos (9788532522498)",
              autor: "Laurell K. Hamilton",
              editora: "Rocco",
              ano: '2013',
              idioma: "Portugues",
              peso: "250",
              dimensoes: "20.8,14,1.2"
            }
          }}>Detalhes</Link>
      },
      {
        livro: 'O Código Da Vinci (8575421131)',
        autor: 'Dan Brown',
        editora: "Editora Random House",
        ano: '2004',
        acoes : <Link to={{
            pathname: '/O Código Da Vinci (8575421131)',
            params: {
              livro: "O Código Da Vinci (8575421131)",
              autor: "Dan Brown",
              editora: "Editora Random House",
              ano: '2004',
              idioma: "Portugues",
              peso: "250",
              dimensoes: "20.8,14,1.2"
            }
          }}>Detalhes</Link>
      },
      {
        livro: 'A Guerra dos Tronos : As Crônicas de Gelo e Fogo, volume 1 (8556510787)',
        autor: 'George R. R. Martin',
        editora: "Suma",
        ano: '2019',
        acoes : <Link to={{
            pathname: '/A Guerra dos Tronos : As Crônicas de Gelo e Fogo, volume 1 (8556510787)',
            params: {
              livro: "A Guerra dos Tronos : As Crônicas de Gelo e Fogo, volume 1 (8556510787)",
              autor: "George R. R. Martin",
              editora: "Suma",
              ano: '2019',
              idioma: "Portugues",
              peso: "780",
              dimensoes: "16,2.9,23"
            }
          }}>Detalhes</Link>
      },
      {
        livro: '1984 (8535914846)',
        autor: 'George Orwell',
        editora: "Companhia das Letras",
        ano: '2009',
        acoes : <Link to={{
            pathname: '/1984 (8535914846)',
            params: {
              livro: "1984 (8535914846)",
              autor: "George Orwell",
              editora: "Companhia das Letras",
              ano: '2009',
              idioma: "Portugues",
              peso: "567",
              dimensoes: "20.8,13.8,2.2"
            }
          }}>Detalhes</Link>
      },{
        livro: 'Uma Breve História do Tempo (9726620104)',
        autor: 'Stephen Hawking',
        editora: "Rocco",
        ano: '1988',
        acoes : <Link to={{
            pathname: '/Uma Breve História do Tempo (9726620104)',
            params: {
              livro: "Uma Breve História do Tempo (9726620104)",
              autor: "Stephen Hawking",
              editora: "Rocco",
              ano: '1988',
              idioma: "Portugues",
              peso: "567",
              dimensoes: "20.8,13.8,2.2"
            }
          }}>Detalhes</Link>
      },{
        livro: 'Muito longe de casa (8535925422)',
        autor: 'Ishmael Beah',
        editora: "Companhia de Bolso",
        ano: '2015',
        acoes : <Link to={{
            pathname: '/Muito longe de casa (8535925422)',
            params: {
              livro: "Muito longe de casa (8535925422)",
              autor: "Ishmael Beah",
              editora: "Companhia de Bolso",
              ano: '2015',
              idioma: "Portugues",
              peso: "222",
              dimensoes: "17.8,12.6,1.4"
            }
          }}>Detalhes</Link>
      },{
        livro: 'Are You There God? It"s Me, Margaret (B007I5QMK2)',
        autor: 'Judy Blume',
        editora: "Delacorte Books for Young Readers",
        ano: '2012',
        acoes : <Link to={{
            pathname: '/Are You There God? It"s Me, Margaret (B007I5QMK2)',
            params: {
              livro: "Are You There God? It's Me, Margaret (B007I5QMK2)",
              autor: "Judy Blume",
              editora: "Delacorte Books for Young Readers",
              ano: '2012',
              idioma: "Inglês",
              peso: "162",
              dimensoes: "17.8,12.6,1.4"
            }
          }}>Detalhes</Link>
      },{
        livro: 'Boa Noite, Lua (853360713X)',
        autor: 'Margaret Wise Brown',
        editora: "Martins Fontes",
        ano: '1997',
        acoes : <Link to={{
            pathname: '/Boa Noite, Lua (853360713X)',
            params: {
              livro: "Boa Noite, Lua (853360713X)",
              autor: "Margaret Wise Brown",
              editora: "Martins Fontes",
              ano: '1997',
              idioma: "Portugues",
              peso: "272",
              dimensoes: "17.6,19.8,0.6"
            }
          }}>Detalhes</Link>
      },{
        livro: 'Harry potter e a pedra filosofal (8532511015)',
        autor: 'J. K. Rowling',
        editora: "Rocco",
        ano: '2000',
        acoes : <Link to={{
            pathname: '/Harry potter e a pedra filosofal (8532511015)',
            params: {
              livro: "Harry potter e a pedra filosofal (8532511015)",
              autor: "J. K. Rowling",
              editora: "Rocco",
              ano: '2000',
              idioma: "Portugues",
              peso: "227",
              dimensoes: "20.8,14,1.2"
            }
          }}>Detalhes</Link>
      },{
        livro: 'A menina que roubava livros (B009M8CWXO)',
        autor: 'Markus Zusak',
        editora: "Intrínseca ",
        ano: '2012',
        acoes : <Link to={{
            pathname: '/A menina que roubava livros (B009M8CWXO)',
            params: {
              livro: "A menina que roubava livros (B009M8CWXO)",
              autor: "Markus Zusak",
              editora: "Intrínseca ",
              ano: '2012',
              idioma: "Portugues",
              peso: "227",
              dimensoes: "20.8,14,1.2"
            }
          }}>Detalhes</Link>
      }
    ]
  };

  return (
    <div className="container mt-10">
    <MDBDataTable
      striped
      hover
      data={data}
      searching={true}
    />
    </div>
  );
}

export default DatatablePage;