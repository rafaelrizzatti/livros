import React from 'react'

const Livro = (props) => (
    <div className="container mt-10">
   
        <div className="card">
             {console.log("params",props.location.params)}
            <div className="card-body">
                <h5 className="card-title">{props.location.params.livro}</h5>
                <p className="card-text">
                    <strong>Autor: </strong> {props.location.params.autor} <br/>
                    <strong>Editora: </strong> {props.location.params.editora} <br/>
                    <strong> Idioma:  </strong>{props.location.params.idioma} <br/>
                    <strong> Peso:  </strong>{props.location.params.peso} <br/>
                    <strong> Dimensões: </strong> {props.location.params.dimensoes}
                </p>
            </div>
        </div>

    </div>
);
export default Livro;
