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

const modelos = JSON.parse([{"IdModelo":"1","Marca":"Yaris","A\u00f1o":"2020","Precio":"1.038.900","ImgHome":"yaris.png","ImgFicha":"yaris@2x.png","Categoria":"P","Titulo":"Preparada para cualquier desaf\u00edo ","Descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Caracteristicas":"[{\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 11}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 12}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 13}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 14}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 15}]","CaracteristicasResaltables":"[{\"Img\": \"3.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 7}, {\"Img\": \"1.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 8}]"},{"IdModelo":"2","Marca":"Corolla","A\u00f1o":"2018","Precio":"1.430.700","ImgHome":"corolla.png","ImgFicha":"corolla@2x.png","Categoria":"S","Titulo":"Preparada para cualquier desaf\u00edo ","Descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Caracteristicas":"[{\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 16}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 17}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 18}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 19}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 20}]","CaracteristicasResaltables":"[{\"Img\": \"3.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 9}, {\"Img\": \"1.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 10}]"},{"IdModelo":"3","Marca":"Prius","A\u00f1o":"2019","Precio":"2.882.000","ImgHome":"prius-1.png","ImgFicha":"prius-1@2x.png","Categoria":"S","Titulo":"Preparada para cualquier desaf\u00edo ","Descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Caracteristicas":"[{\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 21}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 22}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 23}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 24}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 25}]","CaracteristicasResaltables":"[{\"Img\": \"3.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 11}, {\"Img\": \"1.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 12}]"},{"IdModelo":"4","Marca":"Camry","A\u00f1o":"2018","Precio":"3.753.200","ImgHome":"camry.png","ImgFicha":"camry@2x.png","Categoria":"A","Titulo":"Preparada para cualquier desaf\u00edo ","Descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Caracteristicas":"[{\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 26}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 27}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 28}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 29}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 30}]","CaracteristicasResaltables":"[{\"Img\": \"3.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 13}, {\"Img\": \"1.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 14}]"},{"IdModelo":"5","Marca":"Toyota 86","A\u00f1o":"2019","Precio":"3.812.100","ImgHome":"toyota-86.png","ImgFicha":"toyota-86@2x.png","Categoria":"A","Titulo":"Preparada para cualquier desaf\u00edo ","Descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Caracteristicas":"[{\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 31}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 32}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 33}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 34}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 35}]","CaracteristicasResaltables":"[{\"Img\": \"3.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 15}, {\"Img\": \"1.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 16}]"},{"IdModelo":"6","Marca":"Innova","A\u00f1o":"2020","Precio":"2.596.400","ImgHome":"innova.png","ImgFicha":"innova@2x.png","Categoria":"P","Titulo":"Preparada para cualquier desaf\u00edo ","Descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Caracteristicas":"[{\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 36}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 37}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 38}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 39}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 40}]","CaracteristicasResaltables":"[{\"Img\": \"3.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 17}, {\"Img\": \"1.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 18}]"},{"IdModelo":"7","Marca":"SW4","A\u00f1o":"2019","Precio":"3.236.200","ImgHome":"sw-4.png","ImgFicha":"sw-4@2x.png","Categoria":"P","Titulo":"Preparada para cualquier desaf\u00edo ","Descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Caracteristicas":"[{\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 41}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 42}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 43}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 44}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 45}]","CaracteristicasResaltables":"[{\"Img\": \"3.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 19}, {\"Img\": \"1.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 20}]"},{"IdModelo":"8","Marca":"RAV4","A\u00f1o":"2019","Precio":"3.170.200","ImgHome":"rav-4.png","ImgFicha":"rav-4@2x.png","Categoria":"A","Titulo":"Preparada para cualquier desaf\u00edo ","Descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Caracteristicas":"[{\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 46}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 47}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 48}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 49}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 50}]","CaracteristicasResaltables":"[{\"Img\": \"3.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 21}, {\"Img\": \"1.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 22}]"},{"IdModelo":"9","Marca":"Land Cruiser Prado","A\u00f1o":"2017","Precio":"815.900","ImgHome":"prado.png","ImgFicha":"prado@2x.png","Categoria":"P","Titulo":"Preparada para cualquier desaf\u00edo ","Descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Caracteristicas":"[{\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 51}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 52}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 53}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 54}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 55}]","CaracteristicasResaltables":"[{\"Img\": \"3.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 23}, {\"Img\": \"1.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 24}]"},{"IdModelo":"10","Marca":"Land Cruiser 200","A\u00f1o":"2018","Precio":"7.873.100","ImgHome":"cruiser.png","ImgFicha":"cruiser@2x.png","Categoria":"S","Titulo":"Preparada para cualquier desaf\u00edo ","Descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Caracteristicas":"[{\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 56}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 57}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 58}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 59}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 60}]","CaracteristicasResaltables":"[{\"Img\": \"3.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 25}, {\"Img\": \"1.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 26}]"},{"IdModelo":"11","Marca":"Hilux","A\u00f1o":"2020","Precio":"1.507.000","ImgHome":"hilux.png","ImgFicha":"hilux@2x.png","Categoria":"A","Titulo":"Preparada para cualquier desaf\u00edo ","Descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Caracteristicas":"[{\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 61}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 62}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 63}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 64}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 65}]","CaracteristicasResaltables":"[{\"Img\": \"3.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 29}, {\"Img\": \"1.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 30}]"},{"IdModelo":"13","Marca":"Etios","A\u00f1o":"2019","Precio":"815.900","ImgHome":"etios.png","ImgFicha":"etios@2x.png","Categoria":"A","Titulo":"Preparada para cualquier desaf\u00edo ","Descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Caracteristicas":"[{\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 66}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 67}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 68}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 69}, {\"Img\": \"image.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicaModelo\": 70}]","CaracteristicasResaltables":"[{\"Img\": \"3.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 31}, {\"Img\": \"1.png\", \"Titulo\": \"Titulo\", \"Descripcion\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\", \"IdCaracteristicasResaltablesModelo\": 32}]"}])

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
    this.modelosTodos = modelos
    this.setState({
      modelos: modelos,
      modeloFicha: modelos[0]
    })
    /*
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
    */
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
    const m = this.state.modelos.filter(f => f.IdModelo === id)[0]
    this.setState({
      modeloFicha: {},
      tab: 'ficha'
    })
    /*
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
    */
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
