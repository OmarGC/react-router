import React, { Component } from 'react'
import './ciudades.css'
import { Link } from 'react-router-dom'
export default class Ciudades extends Component {
    render() {
        return (
            <div className="mt-4">
              <div>
                <div className="Card">
                  <div className="title-card-one">
                    <h3> ¿En dónde te gustaría comprar? </h3>
                  </div>
                  
                  <form>
                      <div className="selects">
                        <select className="form-control form-control-lg">
                            <option value="mercedes">Cualquier cosa</option>
                            <option>Large select</option>
                            <option value="mercedes">Maaa</option>
                            <option value="audi">Audi</option>
                        </select>
                      </div>
                      <br />
                      <div className="selects">
                        <select className="form-control form-control-lg">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                      </div>
                        <br /> <br/>
                      <Link  className="btn btn-comenzar" to="/tipo">
                      COMENZAR
                      </Link>
                  </form>
                </div>
              </div>
            </div>
        )
    }
}
