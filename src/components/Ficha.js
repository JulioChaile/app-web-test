import React from 'react'
import {Container, Grid} from '@material-ui/core'
import InfiniteCarousel from 'react-leaf-carousel'

export class Ficha extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            classGrid: window.innerWidth <= 960
        }

        this.cambiarClass = this.cambiarClass.bind(this)
    }

    componentDidMount() {
        const a = this.cambiarClass
        window.addEventListener("resize", function(event) {
            a()
        })
    }

    cambiarClass() {
        this.setState({
            classGrid: window.innerWidth <= 960
        })
    }

    render () {
        const imgPrincipal = require('../images/ficha/' + this.props.modelo.ImgFicha)
        const imgCaract1 = require('../images/ficha/' + this.props.modelo.CaracteristicasResaltables[0].Img)
        const imgCaract2 = require('../images/ficha/' + this.props.modelo.CaracteristicasResaltables[1].Img)
        const styleMarca = {
            fontSize: '20px',
            fontWeight: 600,
            fontFamily: 'Montserrat'
        }
        const styleTitulo = {
            fontSize: '50px',
            fontWeight: 600,
            fontFamily: 'Montserrat'
        }
        const styleTituloCaract = {
            fontSize: '20px',
            fontWeight: 600,
            fontFamily: 'Montserrat'
        }
        const styleDescripcion = {
            fontSize: '16px',
            fontWeight: "normal",
            fontFamily: 'Montserrat'
        }
        const styleImg = {
            maxWidth: '100%',
            width: 'auto',
            height: 'auto'
        }
        
        return (
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={6} xs={12}><img style={styleImg} alt={this.props.modelo.ImgFicha} src={imgPrincipal.default} /></Grid>
                    <Grid item container direction="column" md={6} xs={12}>
                        <span style={styleMarca}>{this.props.modelo.Marca}</span>
                        <span style={styleTitulo}>{this.props.modelo.Titulo}</span>
                        <span style={styleDescripcion}>{this.props.modelo.Descripcion}</span>
                    </Grid>
                </Grid>
                <div
                    style={{backgroundColor: '#f7f7f7', marginTop: '50px'}}
                >
                <InfiniteCarousel
                    breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        },
                    },
                    ]}
                    dots={true}
                    showSides={true}
                    sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={4}
                    slidesToShow={4}
                    scrollOnDevice={true}
                    incrementalSides={true}
                >
                    {this.props.modelo.Caracteristicas.map(c => {
                        const img = require('../images/ficha/' + c.Img)
                        return <div>
                            <img style={styleImg} alt={c.Img} src={img.default} />
                            <span style={styleTituloCaract}>{c.Titulo}</span>
                            <p style={styleDescripcion}>{c.Descripcion}</p>
                        </div>
                    })
                    }
                </InfiniteCarousel>
                </div>
                <Grid container justify="center" style={{marginTop: "50px"}}>
                    <Grid item md={6} xs={12}>
                        <span style={styleTituloCaract}>{this.props.modelo.CaracteristicasResaltables[0].Titulo}</span>
                        <p style={styleDescripcion}>{this.props.modelo.CaracteristicasResaltables[0].Descripcion}</p>
                    </Grid>
                    <Grid container justify="flex-end" item md={6} xs={12}><img style={styleImg} alt={this.props.modelo.ImgFicha} src={imgCaract1.default} /></Grid>
                </Grid>
                <Grid container justify="center" style={{marginTop: "50px"}} direction={this.state.classGrid ? 'column-reverse' : 'row'}>
                    <Grid item md={6} xs={12}><img style={styleImg} alt={this.props.modelo.ImgFicha} src={imgCaract2.default} /></Grid>
                    <Grid item md={6} xs={12}>
                        <span style={styleTituloCaract}>{this.props.modelo.CaracteristicasResaltables[1].Titulo}</span>
                        <p style={styleDescripcion}>{this.props.modelo.CaracteristicasResaltables[1].Descripcion}</p>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}