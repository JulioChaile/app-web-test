import React from 'react'
import Grid from '@material-ui/core/Grid'
import {CajaModelo} from './CajaModelo'

export class Listado extends React.Component {
    render() {
        return(
            <Grid style={{marginTop: "50px", marginBottom: "50px"}} container spacing={1}>
                {this.props.modelos.map((m, i) => 
                    <Grid
                        item
                        xs={12}
                        md={3}
                    >
                        <CajaModelo
                            IdModeloFicha={this.props.IdModeloFicha}
                            IdModelo={m.IdModelo}
                            Marca={m.Marca}
                            Año={m.Año}
                            Precio={m.Precio}
                            ImgHome={m.ImgHome}
                            key={m.IdModelo}
                            verModelo={this.props.verModelo}
                        />
                    </Grid>
                )}
            </Grid>
        )
    }
}