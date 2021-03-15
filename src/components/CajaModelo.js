import React from 'react'
import {Grid, Button} from '@material-ui/core'

export class CajaModelo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boton: false
        }
    }

    render() {
        const img = require('../images/home/' + this.props.ImgHome)
        const pStyle = {
            fontSize: '28px',
            margin: '3px 0 3px 0',
            fontWeight: 600,
            color: this.props.IdModeloFicha === this.props.IdModelo ? '#eb0a1e' : '#000000'
        }
        const styleButton = {
            textTransform: "capitalize",
            fontWeight: "600",
            fontSize: "13px",
            fontFamily: "Montserrat",
            borderRadius: "18px",
            backgroundColor: "black"
        }

        return(
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                onMouseEnter={() => this.setState({boton: true})}
                onMouseLeave={() => this.setState({boton: false})}
                onClick={() => this.props.verModelo(this.props.IdModelo)}
            >
                    <p style={pStyle}>{this.props.Marca}</p>
                    {this.props.Año} | ${this.props.Precio}
                    <img alt={this.props.ImgHome} src={img.default} />
                    <div style={{height: '35px'}}>
                        {this.state.boton
                            ? <Button onClick={() => this.props.verModelo(this.props.IdModelo)} variant="text" disableFocusRipple style={styleButton}><span style={{color: 'white'}}>Ver Modelo</span></Button>
                            : ''
                        }
                    </div>
            </Grid>
        )
    }
}