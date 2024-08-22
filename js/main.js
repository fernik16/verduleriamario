



    let menu = parseInt (prompt("Ingrese codigo de fruta: 01 tomate redondo, 02 tomate perita, 03 lechuga, 04 cebolla, 05 zanahoria. Otro numero para salir."))
    switch (menu){
        case 01: 
             let peso01 = parseInt(prompt("Ingrese el peso que arroja la balanza"))
             let precio01 =7000
               function preciotomr (precio1, peso1){
        
            let subtotal01 = precio1* peso1
                

            alert("El subtotales:"+subtotal01)
               return subtotal01
                                            }
              preciotomr(peso01, precio01)
        break  
        case 02: 
             let peso02 = parseInt(prompt("Ingrese el peso que arroja la balanza"))
             let precio02 =8000
               function preciotomp (precio2, peso2){
        
            let subtotal02 = precio2* peso2
                

            alert("El subtotales:"+subtotal02)
               return subtotal02
                                            }
              preciotomp(peso02, precio02)
        break 
        case 03: 
             let peso03 = parseInt(prompt("Ingrese el peso que arroja la balanza"))
             let precio03 =4000
               function preciolech (precio3, peso3){
        
            let subtotal03 = precio3* peso3
                

            alert("El subtotales:"+subtotal03)
               return subtotal03
                                            }
              preciolech(peso03, precio03)
        break 
        case 04: 
             let peso04 = parseInt(prompt("Ingrese el peso que arroja la balanza"))
             let precio04 =3000
               function precioceb (precio4, peso4){
        
            let subtotal04 = precio4* peso4
                

            alert("El subtotales:"+subtotal04)
               return subtotal04
                                            }
              precioceb(peso04, precio04)
        break 
        case 05: 
             let peso05 = parseInt(prompt("Ingrese el peso que arroja la balanza"))
             let precio05 =5000
               function preciozan (precio5, peso5){
        
            let subtotal05 = precio5* peso5
                

            alert("El subtotales:"+subtotal05)
               return subtotal05
                                            }
              preciozan(peso05, precio05)
        break 
        default:
            console.log("gracias")
        

    }

