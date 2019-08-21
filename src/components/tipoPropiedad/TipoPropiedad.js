import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
