import './App.css';
import React from 'react'
import {Container, CircularProgress, Divider, AppBar, Toolbar, Grid, Hidden, Drawer, ListItemText, List, ListItem, ClickAwayListener, Button, Tabs, Tab} from '@material-ui/core'
import TabPanel from '@material-ui/lab/TabPanel'
import TabContext from '@material-ui/lab/TabContext'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import {Listado} from './components/Listado'
import {Ficha} from './components/Ficha'
import {Filtros} from './components/Filtros'
import logo from './images/logo.png'

const api = 'http://localhost:8080'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modelos: [],
      modeloFicha: {},
      filtro: 'T',
      orden: 'nada',
      openDrawer: false,
      tab: 'modelos'
    }

    this.modelosTodos = []

    this.filtrarModelos = this.filtrarModelos.bind(this)
    this.ordenarModelos = this.ordenarModelos.bind(this)
    this.cambiarTab = this.cambiarTab.bind(this)
    this.verModelo = this.verModelo.bind(this)
  }

  componentDidMount() {
    fetch(`${api}/modelos`)
      .then(res => res.json())
      .then(
        (result) => {
          this.modelosTodos = result
          this.setState({
            modelos: result
          })

          const id = result[0].IdModelo

          fetch(`${api}/modelos/${id}`)
            .then(res => res.json())
            .then(
              r => {
                this.setState({
                  modeloFicha: r
                })
              },
              error => {
                console.log(error)
              }
            )
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          console.log(error)
        }
      )
  }

  filtrarModelos (cat) {
    const modelosFiltro = cat === 'T' ? this.modelosTodos : this.modelosTodos.filter(m => m.Categoria === cat)

    this.setState({
      modelos: modelosFiltro,
      filtro: cat
    })
  }
  
  cambiarTab (event, value) {
    this.setState({
      tab: value
    })
  }

  verModelo (id) {
    this.setState({
      modeloFicha: {},
      tab: 'ficha'
    })
    fetch(`${api}/modelos/${id}`)
      .then(res => res.json())
      .then(
        r => {
          this.setState({
            modeloFicha: r
          })
        },
        error => {
          console.log(error)
        }
      )
  }

  ordenarModelos (orden) {
    let modelosOrdenados = this.state.modelos.slice()

    switch (orden) {
      case 'mayor':
        this.setState({
          modelos: modelosOrdenados.sort((a, b) => parseInt(b.Precio.replace(/\./g, '')) - parseInt(a.Precio.replace(/\./g, ''))),
          orden: 'mayor'
        })
        break;

      case 'menor':
        this.setState({
          modelos: modelosOrdenados.sort((a, b) => parseInt(a.Precio.replace(/\./g, '')) - parseInt(b.Precio.replace(/\./g, ''))),
          orden: 'menor'
        })
        break;

      case 'viejos':
        this.setState({
          modelos: modelosOrdenados.sort((a, b) => parseInt(a.Año) - parseInt(b.Año)),
          orden: 'viejos'
        })
        break;

      case 'nuevos':
        this.setState({
          modelos: modelosOrdenados.sort((a, b) => parseInt(b.Año) - parseInt(a.Año)),
          orden: 'nuevos'
        })
        break;  
    
      default:
        this.filtrarModelos(this.state.filtro)
        break;
    }
  }

  render() {
    const loading = <div style={{
      display: 'flex',
      justifyContent: 'center',
      margin: '300px 0 300px 0'
    }}>
      <CircularProgress />
    </div>
    const styleTitulo = {
      fontFamily: "Montserrat",
      fontSize: "50px",    
      fontWeight: "bold"
    }
    return(
      <TabContext value={this.state.tab}>
        <AppBar position="fixed" color="white">
          <Toolbar>
            <Grid container>
              <Grid item xs={2} md={2}>
                <img alt="logo" src={logo} />
              </Grid>
              <Grid item xs={8} md={8}>
                <Container maxWidth="lg">
                <Hidden smDown>
                  <Tabs
                    value={this.state.tab}
                    indicatorColor="secondary"
                    textColor="secondary"
                    onChange={this.cambiarTab}
                  >
                    <Tab disableFocusRipple style={{textTransform: 'capitalize'}} value="modelos" label="Modelos" />
                    <Tab disableFocusRipple style={{textTransform: 'capitalize'}} value="ficha" label="Ficha tecnica" />
                  </Tabs>
                </Hidden>
                </Container>
              </Grid>
              <Grid container item xs={2} md={2} style={{display: 'flex'}} justify="flex-end" alignItems="center">
                <Hidden smDown>
                  <span style={{fontSize: "14px", fontFamily: "Montserrat"}}>Menu</span>
                </Hidden>
                <React.Fragment>
                  <MenuOutlinedIcon style={{cursor: 'pointer', marginLeft: '10px'}} fontSize="large" onClick={() => this.setState({openDrawer: true})} />
                  <Drawer anchor="right" open={this.state.openDrawer}>
                    <ClickAwayListener onClickAway={() => this.setState({openDrawer: false})}>
                      <div
                        role="presentation"
                        style={{
                          width: window.innerWidth <= 960 ? window.innerWidth + 'px' : window.screen.width*0.2 + 'px',
                        }}
                      >
                        <div style={{display: "flex", justifyContent: "flex-end"}}>
                          <Button style={{textTransform: "capitalize"}} onClick={() => this.setState({openDrawer: false})}>
                            Cerrar <span style={{fontSize: '15px'}}> X</span>
                          </Button>
                        </div>
                        <List>
                          {['Modelos', 'Servicios y Accesorios', 'Financiación', 'Reviews y Comunidad'].map((text, index) => (
                            <ListItem onClick={() => this.setState({openDrawer: false, tab: 'modelos'})} button key={text}>
                              <ListItemText style={{display: "flex", justifyContent: "flex-end", marginRight: '54px'}} primary={text} />
                            </ListItem>
                          ))}
                        </List>
                        <Divider variant="middle" />
                        <List>
                          {['Toyota Mobility Service', 'Toyota Gazoo Racing', 'Toyota Híbridos'].map((text, index) => (
                            <ListItem onClick={() => this.setState({openDrawer: false})} button key={text}>
                              <ListItemText style={{display: "flex", justifyContent: "flex-end", marginRight: '54px'}} primary={text} />
                            </ListItem>
                          ))}
                        </List>
                        <Divider variant="middle" />
                        <List>
                          {['Concesionarios', 'Test Drive', 'Contacto'].map((text, index) => (
                            <ListItem onClick={() => this.setState({openDrawer: false})} button key={text}>
                              <ListItemText style={{display: "flex", justifyContent: "flex-end", marginRight: '54px'}} primary={text} />
                            </ListItem>
                          ))}
                        </List>
                        <Divider variant="middle" />
                        <List>
                          {['Actividades', 'Servicios al Cliente', 'Ventas Especiales', 'Innovación', 'Prensa', 'Acerca de...'].map((text, index) => (
                            <ListItem onClick={() => this.setState({openDrawer: false})} button key={text}>
                              <ListItemText style={{display: "flex", justifyContent: "flex-end", marginRight: '54px'}} primary={text} />
                            </ListItem>
                          ))}
                        </List>
                      </div>
                    </ClickAwayListener>
                  </Drawer>
                </React.Fragment>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Divider style={{marginBottom: '80px'}} />
        <TabPanel value="modelos">
          <Container maxWidth="lg">
            <span style={styleTitulo}>Descubrí todos los modelos</span>
            <Filtros filtrarModelos={this.filtrarModelos} filtro={this.state.filtro} ordenarModelos={this.ordenarModelos} orden={this.state.orden} />
            <Divider />
            {this.state.modelos.length === 0
              ? loading
              : <Listado modelos={this.state.modelos} verModelo={this.verModelo} IdModeloFicha={this.state.modeloFicha.IdModelo} />
            }
          </Container>
        </TabPanel>
        <TabPanel value="ficha">
          {!this.state.modeloFicha.IdModelo
                ? loading
                : <Ficha modelo={this.state.modeloFicha} />
          }
        </TabPanel>
      </TabContext>
    )
  }
}

export default App
