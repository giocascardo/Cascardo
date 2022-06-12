función  initCanvas ( ) {
    var  ctx = documento . getElementById ( 'mi_lienzo' ) . getContext ( '2d' ) ;
    var  backgroundImage  = nueva  imagen ( ) ;
    var  naveImage        = nueva  imagen ( ) ;
    var  enemigospic1      = nueva  imagen ( ) ;
    var  enemigospic2      = nueva  imagen ( ) ;

    imagen de fondo . src = "imágenes/imagen-de-fondo.jpg" ;
    naveImagen . src = "images/foto-nave-espacial.png" ;

    enemigospic1 . src = "imagenes/enemigo1.png" ;
    enemigos pic2 . src = "imagenes/enemigo2.png" ;

    var  cW = ctx . lona _ ancho ;
    var  cH = ctx . lona _ altura ;

    var  enemigaTemplate = función  ( opciones ) {
        volver  {
            identificación : opciones . identificación  ||  '' ,
            x : opciones . x  ||  '' ,
            y : opciones . y  ||  '' ,
            w : opciones . w  ||  '' ,
            h : opciones . hora  ||  '' ,
            imagen : opciones . imagen  ||  enemigospic1
        }
    }

    var  enemigos = [
        nueva  plantilla de enemigo ( { id : "enemigo 1" ,  x : 100 ,  y : - 20 ,  w : 50 ,  h : 30 } ) ,
        nueva  plantilla de enemigo ( { id : "enemigo 2" ,  x : 225 ,  y : - 20 ,  w : 50 ,  h : 30 } ) ,
        nueva  plantilla de enemigo ( { id : "enemigo 3" ,  x : 350 ,  y : - 20 ,  w : 80 ,  h : 30 } ) ,
        nueva  plantilla de enemigo ( { id : "enemigo 4" ,  x : 100 ,  y : - 70 ,  w : 80 ,  h : 30 } ) ,
        nueva  plantilla de enemigo ( { id : "enemigo 5" ,  x : 225 ,  y : - 70 ,  w : 50 ,  h : 30 } ) ,
        nueva  plantilla de enemigo ( { id : "enemigo 6" ,  x : 350 ,  y : - 70 ,  w : 50 ,  h : 30 } ) ,
        nueva  plantilla de enemigo ( { id : "enemigo 7" ,  x : 475 ,  y : - 70 ,  w : 50 ,  h : 30 } ) ,
        nueva  plantilla de enemigo ( { id : "enemigo 8" ,  x : 600 ,  y : - 70 ,  w : 80 ,  h : 30 } ) ,
        nueva  plantilla de enemigo ( { id : "enemigo 9" ,  x : 475 ,  y : - 20 ,  w : 50 ,  h : 30 } ) ,
        nueva  plantilla de enemigo ( { id : "enemigo 10" ,  x : 600 ,  y : - 20 ,  w : 50 ,  h : 30 } ) ,


        nueva  plantilla de enemigo ( { id : "enemigo 11" ,  x : 100 ,  y : - 220 ,  w : 50 ,  h : 30 ,  imagen : enemigospic2 } ) ,
        nueva  plantilla de enemigos ( { id : "enemigo 12" ,  x : 225 ,  y : - 220 ,  w : 50 ,  h : 30 ,  imagen : enemigospic2 } ) ,
        nueva  plantilla de enemigo ( { id : "enemigo 13" ,  x : 350 ,  y : - 220 ,  w : 80 ,  h : 50 ,  imagen : enemigospic2 } ) ,
        nueva  plantilla de enemigo ( { id : "enemigo 14" ,  x : 100 ,  y : - 270 ,  w : 80 ,  h : 50 ,  imagen : enemigospic2 } ) ,
        nueva  plantilla de enemigo ( { id : "enemigo 15" ,  x : 225 ,  y : - 270 ,  w : 50 ,  h : 30 ,  imagen : enemigospic2 } ) ,
        nueva  plantilla de enemigo ( { id : "enemigo 16" ,  x : 350 ,  y : - 270 ,  w : 50 ,  h : 30 ,  imagen : enemigospic2 } ) ,
        nueva  plantilla de enemigos ( { id : "enemigo 17" ,  x : 475 ,  y : - 270 ,  w : 50 ,  h : 30 ,  imagen : enemigospic2 } ) ,
        nueva  plantilla de enemigo ( { id : "enemigo 18" ,  x : 600 ,  y : - 270 ,  w : 80 ,  h : 50 ,  imagen : enemigospic2 } ) ,
        nueva  plantilla de enemigo ( { id : "enemigo 19" ,  x : 475 ,  y : - 200 ,  w : 50 ,  h : 30 ,  imagen : enemigospic2 } ) ,
        nueva  plantilla de enemigo ( { id : "enemigo 20" ,  x : 600 ,  y : - 200 ,  w : 50 ,  h : 30 ,  imagen : enemigospic2 } ) ,
    ] ;

    var  renderEnemies = función  ( lista de enemigos ) {

        for ( var  i = 0 ;  i < listaenemigos . longitud ;  i ++ ) {
            var  enemigo  =  listaenemigos [ i ] ;
            ctx . dibujarImagen ( enemigo . imagen ,  enemigo . x ,  enemigo . y  +=  .5 ,  enemigo . w ,  enemigo . h ) ;
            lanzador _ hitDetectLowerLevel ( enemigo ) ;
        }
    }

     Lanzador de funciones ( ) {
        esto _ y = 500 ,
            esto _ x = cW * .5 - 25 ,
            esto _ w = 100 ,
        esto _ h = 100 ,
            esto _ direccion ,
            esto _ bg = "blanco" ,
            esto _ misiles = [ ] ;

        esto _ estado del juego = {
            encima : falso ,
            mensaje : "" ,
            estilo de relleno : 'rojo' ,
            fuente : 'cursiva negrita 36px Arial, sans-serif' ,
        }

        esto _ renderizar = función  ( ) {
            if  ( this . direccion === 'izquierda' ) {
                esto _ x- = 5 ;
            }
            else  if  ( this . direccion === 'right' ) {
                esto _ x += 5 ;
            }
            else  if ( this . direccion === 'downArrow' ) {
                esto _ y += 5 ;
            }
            else  if  ( this . direccion === 'flecha arriba' ) {
                esto _ y- = 5 ;
            }
            ctx . EstiloRelleno = esto . bg ;
            ctx . dibujarImagen ( ImagenDeFondo ,  10 ,  10 ) ;
            ctx . dibujarImagen ( naveImagen ,  este . x ,  este . y ,  100 ,  90 ) ;

            for ( var  i = 0 ;  i < this . misiles . length ;  i ++ ) {
                var  m = esto . misiles [ i ] ;
                ctx . fillRect ( m . x ,  m . y -= 5 ,  m . w ,  m . h ) ;
                esto _ hitDetect ( m , i ) ;
                si ( metro . y  <= 0 ) {
                    esto _ Misiles . empalme ( i , 1 ) ;
                }
            }

            if ( enemigos . longitud === 0 ) {
                clearInterval ( animateInterval ) ;
                ctx . EstiloRelleno = 'amarillo' ;
                ctx . fuente = esto . estado del juego . fuente ;
                ctx . fillText ( '¡GANASTÉ!' ,  cW * .5 - 80 , 50 ) ;
            }
        }

        esto _ hitDetect = función  ( m , mi ) {
            for ( var  i = 0 ;  i  <  enemigos . longitud ;  i ++ ) {
                var  e = enemigos [ i ] ;

                si ( metro . x <= e . x + e . w  &&  m . x + m . w >= e . x  &&
                    m _ y  >=  e . y  &  m . y <= mi . y + e . h ) {
                    enemigos _ empalme ( i , 1 ) ;
                    documento _ querySelector ( '.barra' ) . innerHTML = "Destruiste al" + e . identificación ;
                }
            }
        }

        esto _ hitDetectLowerLevel = función  ( enemigo ) {
            if  ( enemigo . y > 550 ) {
                esto _ estado del juego . sobre = verdadero ;
                esto _ estado del juego . mensaje = 'Los enemigos pasaron' ;
            }

            if ( ( enemigo . y  <  este . y + 25  &&  enemigo . y > este . y - 25 ) &&
                ( enemigo . x  <  este . x + 45  &&  enemigo . x > este . x - 45 ) ) {
                esto _ estado del juego . sobre = verdadero ;
                esto _ estado del juego . mensaje = 'Perdiste' ;
            }
            if  ( this . gameStatus . over === true ) {
                clearInterval ( animateInterval ) ;
                ctx . EstiloRelleno = esto . estado del juego . EstiloRelleno ;
                ctx . fuente = esto . estado del juego . fuente ;

                ctx . fillText ( este . gameStatus . mensaje ,  cW * .5 - 80 , 50 ) ;
            }
        }
    }


    var  lanzador = nuevo  lanzador ( ) ;
    función  animar ( ) {
        ctx . clearRect ( 0 ,  0 ,  cW ,  cH ) ;
        lanzador _ renderizar ( ) ;
        renderEnemies ( enemigos ) ;
    }

    var  animateInterval  =  setInterval ( animate ,  6 ) ;

    var  left_btn = documento . getElementById ( 'left_btn' ) ;
    var  right_btn = documento . getElementById ( 'right_btn' ) ;
    var  fire_btn = documento . getElementById ( 'fuego_btn' ) ;

    documento _ addEventListener ( 'keydown' ,  función  ( evento ) {
        if ( evento . código clave === 37 ) {
            lanzador _ dirección = 'izquierda' ;
            if ( lanzador . x > cW * 2 - 130 ) {
                lanzador _ x += 0 ;
                lanzador _ direccion = '' ;
            }
        }
    } ) ;

    documento _ addEventListener ( 'teclado' ,  función  ( evento ) {
        if ( evento . código clave === 37 ) {
            lanzador _ x += 0 ;
            lanzador _ direccion = '' ;
        }
    } ) ;

    documento _ addEventListener ( 'keydown' ,  función  ( evento ) {
        if ( evento . código clave === 39 ) {
            lanzador _ dirección = 'derecha' ;
            si ( lanzador . x > cW - 110 ) {
                lanzador _ x- = 0 ;
                lanzador _ direccion = '' ;
            }
        }
    } ) ;

    documento _ addEventListener ( 'teclado' ,  función  ( evento ) {
        if ( evento . código clave === 39 ) {
            lanzador _ x- = 0 ;
            lanzador _ direccion = '' ;
        }
    } ) ;

    documento _ addEventListener ( 'keydown' ,  función  ( evento ) {
        if ( evento . código clave === 38 ) {
            lanzador _ dirección = 'flecha arriba' ;
            if ( lanzador . y < cH * .2 - 80 ) {
                lanzador _ y +=  0 ;
                lanzador _ direccion = '' ;
            }
        }
    } ) ;

    documento _ addEventListener ( 'teclado' ,  función  ( evento ) {
        if ( evento . código clave === 38 ) {
            lanzador _ y- = 0 ;
            lanzador _ direccion = '' ;
        }
    } ) ;

    documento _ addEventListener ( 'keydown' ,  función  ( evento ) {
        if ( evento . código clave === 40 ) {
            lanzador _ direccion = 'flecha abajo' ;
            if ( lanzador . y > cH - 110 ) {
                lanzador _ y- = 0 ;
                lanzador _ direccion = '' ;
            }
        }
    } ) ;

    documento _ addEventListener ( 'teclado' ,  función  ( evento ) {
        if ( evento . código clave === 40 ) {
            lanzador _ y += 0 ;
            lanzador _ direccion = '' ;
        }
    } ) ;

    documento _ addEventListener ( 'keydown' ,  función  ( evento ) {
        if ( evento . código clave === 80 ) {
            ubicación _ recargar ( ) ;
            }
    } ) ;

    botón_izquierdo . addEventListener ( 'mousedown' ,  función  ( evento ) {
        lanzador _ dirección = 'izquierda' ;
    } ) ;

    botón_izquierdo . addEventListener ( 'ratón arriba' ,  función  ( evento ) {
        lanzador _ direccion = '' ;
    } ) ;

    right_btn . addEventListener ( 'mousedown' ,  función  ( evento ) {
        lanzador _ dirección = 'derecha' ;
    } ) ;

    right_btn . addEventListener ( 'ratón arriba' ,  función  ( evento ) {
        lanzador _ direccion = '' ;
    } ) ;

    fuego_btn . addEventListener ( 'mousedown' , función  ( evento ) {
        lanzador _ Misiles . empujar ( {
            x : lanzador . x + lanzador . w * .5 ,
            y : lanzador . y ,
            w : 3 ,
            h : 10 ,
        } ) ;
    } ) ;

    documento _ addEventListener ( 'keydown' ,  función  ( evento ) {
    if ( evento . código clave === 32 ) {
     lanzador _ Misiles . empujar ( {
     x : lanzador . x + lanzador . w * .5 ,
         y : lanzador . y ,
         w : 3 ,
         h : 10 ,
    } ) ;
    }
} ) ;
}
ventana _ addEventListener ( 'cargar' ,  función  ( evento ) {
    lienzo de inicio ( ) ;
} ) ;
