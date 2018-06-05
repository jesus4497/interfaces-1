import React from 'react';
import Loadable from 'react-loadable'

import { Layout } from './containers/index';

function Loading() {
  return <div>Loading...</div>;
}

const Historial = Loadable ({
  loader: () => import('./components/datos-academicos/historial-academico'),
  loading:Loading,
}); 

const HorarioSeccion = Loadable({
  loader: ()=> import('./components/datos-academicos/horario-seccion'),
  loading:Loading,
});

const routes = [
  { path: '/', exact: true, name: 'Home', component: Layout },
  {path:'/datos/historico-academico', exact:true,  name:'Historico Academico', component: Historial},
  {path:'/datos/horario-seccion', exact:true,  name:'Horario Seccion', component: HorarioSeccion},


];

export default routes;
