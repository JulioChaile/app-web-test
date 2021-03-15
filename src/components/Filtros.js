import React from 'react'
import {Box, Grid, Button, List, ListItem, Collapse, Divider, ClickAwayListener, Hidden} from '@material-ui/core'
import {ExpandLess, ExpandMore} from '@material-ui/icons'

export class Filtros extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openOrdenar: false,
            openFiltros: false
        }
    }
    render() {
        const styleButton = {
          textTransform: "capitalize",
          fontWeight: "0",
          fontSize: "12px",
          fontFamily: "Montserrat",
          borderRadius: "18px"
        }
        const styleFiltrar = {
          fontWeight: "600",
          fontSize: "14px",
          display: "flex",
          alignItems: 'flex-start',
        }
        const styleOrdenar = {
          fontWeight: "600",
          fontSize: "14px",
          display: "flex",
          alignItems: 'flex-start',
          cursor: "pointer",
          position: "relative"
        }
        const styleBox = {
          margin: "80px 0 15px 0",
          fontFamily: "Montserrat"
        }
        const styleList = {
            fontWeight: "0",
            fontSize: "8px",
            fontFamily: "Montserrat",
            backgroundColor: "white"
        }
        return(
            <Box style={styleBox} display="flex">
                <Hidden smDown>
                    <Box style={styleFiltrar}>Filtrar por</Box>
                </Hidden>
                <Hidden mdUp>
                    <Box onClick={() => this.setState({openFiltros: !this.state.openFiltros})} style={styleOrdenar} flexDirection="column">
                        <ClickAwayListener onClickAway={() => this.setState({openFiltros: false})} >
                            <div>
                                <span>Filtrar por {this.state.openFiltros ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}</span>
                                <Collapse style={{position: 'absolute', top: '23px'}} in={this.state.openFiltros} timeout="auto" unmountOnExit>
                                    <Box border={1} style={styleList}>
                                        <List component="div" disablePadding>
                                            <ListItem onClick={() => this.props.filtrarModelos('T')} button style={{backgroundColor: this.props.filtro === 'T' ? '#f7f7f7' : 'transparent'}}>
                                                Todos
                                            </ListItem>
                                            <Divider/>
                                            <ListItem onClick={() => this.props.filtrarModelos('A')} button style={{backgroundColor: this.props.filtro === 'A' ? '#f7f7f7' : 'transparent'}}>
                                                Autos
                                            </ListItem>
                                            <Divider/>
                                            <ListItem onClick={() => this.props.filtrarModelos('P')} button style={{backgroundColor: this.props.filtro === 'P' ? '#f7f7f7' : 'transparent'}}>
                                                Pickups y Comerciale
                                            </ListItem>
                                            <Divider/>
                                            <ListItem onClick={() => this.props.filtrarModelos('S')} button style={{backgroundColor: this.props.filtro === 'S' ? '#f7f7f7' : 'transparent'}}>
                                                SUVs y Crossovers
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Collapse>
                            </div>
                        </ClickAwayListener>
                    </Box>
                </Hidden>
                <Box flexGrow={1} justifyContent='start'>
                    <Hidden smDown>
                        <Grid
                            container
                            spacing={1}
                            alignItems="flex-start"
                        >
                            <Grid
                                item
                                container
                                justify="center" 
                                md={2}
                            >
                                <div style={{
                                    backgroundColor: this.props.filtro === 'T' ? '#f7f7f7' : 'transparent',
                                    borderRadius: '18px'
                                }}>
                                    <Button disableFocusRipple onClick={() => this.props.filtrarModelos('T')} style={styleButton} variant="text" size="small">
                                        Todos
                                    </Button>
                                </div>
                            </Grid>
                            <Grid
                                item
                                container
                                justify="center" 
                                md={2}
                            >
                                <div style={{
                                    backgroundColor: this.props.filtro === 'A' ? '#f7f7f7' : 'transparent',
                                    borderRadius: '18px'
                                }}>
                                    <Button disableFocusRipple onClick={() => this.props.filtrarModelos('A')} style={styleButton} variant="text" size="small">
                                        Autos
                                    </Button>
                                </div>
                            </Grid>
                            <Grid
                                item
                                container
                                justify="center" 
                                md={2}
                            >
                                <div style={{
                                    backgroundColor: this.props.filtro === 'P' ? '#f7f7f7' : 'transparent',
                                    borderRadius: '18px'
                                }}>
                                    <Button disableFocusRipple onClick={() => this.props.filtrarModelos('P')} style={styleButton} variant="text" size="small">
                                        Pickups y Comerciale
                                    </Button>
                                </div>
                            </Grid>
                            <Grid
                                item
                                container
                                justify="center" 
                                md={2}
                            >
                                <div style={{
                                    backgroundColor: this.props.filtro === 'S' ? '#f7f7f7' : 'transparent',
                                    borderRadius: '18px'
                                }}>
                                    <Button disableFocusRipple onClick={() => this.props.filtrarModelos('S')} style={styleButton} variant="text" size="small">
                                        SUVs y Crossovers
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Box>
                <Box onClick={() => this.setState({openOrdenar: !this.state.openOrdenar})} style={styleOrdenar} flexDirection="column">
                    <ClickAwayListener onClickAway={() => this.setState({openOrdenar: false})} >
                        <div>
                            <span>Ordenar por {this.state.openOrdenar ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}</span>
                            <Collapse style={{position: 'absolute', top: '23px'}} in={this.state.openOrdenar} timeout="auto" unmountOnExit>
                                <Box border={1} style={styleList}>
                                    <List component="div" disablePadding>
                                        <ListItem onClick={() => this.props.ordenarModelos('nada')} button style={{backgroundColor: this.props.orden === 'nada' ? '#f7f7f7' : 'transparent'}}>
                                            Nada
                                        </ListItem>
                                        <Divider/>
                                        <ListItem onClick={() => this.props.ordenarModelos('mayor')} button style={{backgroundColor: this.props.orden === 'mayor' ? '#f7f7f7' : 'transparent'}}>
                                            De mayor a menor precio
                                        </ListItem>
                                        <Divider/>
                                        <ListItem onClick={() => this.props.ordenarModelos('menor')} button style={{backgroundColor: this.props.orden === 'menor' ? '#f7f7f7' : 'transparent'}}>
                                            De menor a mayor precio
                                        </ListItem>
                                        <Divider/>
                                        <ListItem onClick={() => this.props.ordenarModelos('nuevos')} button style={{backgroundColor: this.props.orden === 'nuevos' ? '#f7f7f7' : 'transparent'}}>
                                            Más nuevos primero
                                        </ListItem>
                                        <Divider/>
                                        <ListItem onClick={() => this.props.ordenarModelos('viejos')} button style={{backgroundColor: this.props.orden === 'viejos' ? '#f7f7f7' : 'transparent'}}>
                                            Más viejos primero
                                        </ListItem>
                                    </List>
                                </Box>
                            </Collapse>
                        </div>
                    </ClickAwayListener>
                </Box>
            </Box>
        )
    }
}