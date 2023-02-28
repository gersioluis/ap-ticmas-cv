function mostrarInformacion( seccion ) {
  var boton ;
  var secciones = document.getElementsByClassName( "seccion" ) ;
  var largo = secciones.length ;
  for ( let i=0 ; i<largo ; i++ )
  	if ( secciones[i].id === seccion )
      boton = i ;
    else
      secciones[i].style.display = "none" ;
  secciones[boton].style.display = "block"
}