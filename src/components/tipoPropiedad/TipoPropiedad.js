import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './tipoPropiedad.css'

export default class TipoPropiedad extends Component {
    render() {
        return (
            <div className="mt-4">
              <div>
                <div className="Card-one">
                  <div className="title-card-one">
                    <h3> ¿Qué tipo de propiedad estas buscando? </h3>
                    <p className="subtitles">Estas preguntas nos ayudan a entender tus necesidades de vivienda.</p>
                  </div>
                  
                  <form>
                  <div className="container-categoria">
                    <div className="items"></div>
                    <div className="items"></div>
                    <div className="items"></div>
                  </div>
                      
                    <br /> <br/>
                    <Link to="/ciudad">
                      Atras
                    </Link>
                  </form>
                </div>
              </div>
            </div>
        )
    }
}
