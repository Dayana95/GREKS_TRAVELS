var atractivos_1=new Array("-Atractivos Turísticos-","San Juan del Sur","Isla de Ometepe");
var atractivos_2=new Array("-Atractivos Turísticos-","Volcán Mombacho","Isletas de Granada"); 
var atractivos_3=new Array("-Atractivos Turísticos-","Mercado de Artesanías","Volcán Masaya"); 
var atractivos_4=new Array("-Atractivos Turísticos-","Catedral","Volcán Cerro Negro","Ruinas de León Viejo");


   function cambia_atractivo(){ 
      var lugar; 
      lugar = document.f1.lugar[document.f1.lugar.selectedIndex].value;
      if (lugar != 0) { 
         mis_atractivos=eval("atractivos_" + lugar);
         num_atractivos = mis_atractivos.length;
         document.f1.atractivos.length = num_atractivos;
         for(i=0;i<num_atractivos;i++){ 
            document.f1.atractivos.options[i].value=i;
            document.f1.atractivos.options[i].text=mis_atractivos[i];
         }  
      }
      else{ 
         document.f1.atractivos.length = 1;
         document.f1.cantidad.length = 1;
         document.f1.atractivos.options[0].value = "-";
         document.f1.atractivos.options[0].text = "-Atractivos Turísticos-";
      } 
      
      document.f1.atractivos.options[0].selected = true;
      document.f1.cantidad.options[0].selected = true;
      document.f1.total.value = "Total";
}
var cantidad_1=new Array("-Cantidad de personas-","4","5","6","7","8","9","10");
var cantidad_2=new Array("-Cantidad de personas-","3","4","5","6","7","8","9","10");
var cantidad_3=new Array("-Cantidad de personas-","3","4","5","6","7","8","9","10");
var cantidad_4=new Array("-Cantidad de personas-","3","4","5","6","7","8","9","10");

function cambia_cantidad(){ 
      var lugar; 
      var atrac
      
      lugar = document.f1.lugar[document.f1.lugar.selectedIndex].value;

   

      if (lugar != 0) { 
         mi_cantidad=eval("cantidad_" + lugar);
         num_cantidad = mi_cantidad.length;
         document.f1.cantidad.length = num_cantidad;
         for(i=0;i<num_cantidad;i++){ 
            document.f1.cantidad.options[i].value=mi_cantidad[i];
            document.f1.cantidad.options[i].text=mi_cantidad[i];
         }  
      }
      else{ 
         document.f1.cantidad.length = 1;
         document.f1.cantidad.options[0].value = "0";
         document.f1.cantidad.options[0].text = "-Cantidad de personas-";
         }  
      
      document.f1.cantidad.options[0].selected = true;
      document.f1.total.value = "Total";

     

}


function calcular_precio(){
   var lugar;
   lugar = document.f1.lugar[document.f1.lugar.selectedIndex].value;


   switch(lugar){
      case "1": calcular_rivas();
      break;
      case "2": calcular_granada();
      break;
      case "3": calcular_masaya();
      break;
      case "4": calcular_leon();
      
   }


}



function calcular_rivas(){
   var atrac;
   var total;
   var cant;
   atrac = document.f1.atractivos[document.f1.atractivos.selectedIndex].value;
   cant = document.f1.cantidad[document.f1.cantidad.selectedIndex].value;  

   
   switch(atrac){
                 case "1":  switch(cant){
                        case "4": total = cant * 78;
                           document.f1.total.value = "$" + total;
                        break;

                        case "5": total = cant * 66;
                           document.f1.total.value = "$" + total;
                        break;

                        case "6": total = cant * 59;
                           document.f1.total.value = "$" + total;
                        break;

                        case "7": total = cant * 54;
                           document.f1.total.value = "$" + total;
                        break;

                        case "8": total = cant * 50;
                           document.f1.total.value = "$" + total;
                        break;

                        case "9": total = cant * 47;
                           document.f1.total.value = "$" + total;
                        break;

                        case "10": total = cant * 45;
                           document.f1.total.value = "$" + total;
                        break;

                        default: document.f1.total = "Total";

                     }
     
           break;

         case "2": switch(cant){
                      case "4": total = cant * 84;
                           document.f1.total.value = "$" + total; 
                        break;  

                        case "5":
                        case "6":
                        case "7": total = cant * 67;
                           document.f1.total.value = "$" + total;
                        break;

                        case "8": total = cant * 64;
                           document.f1.total.value = "$" + total;
                        break;

                        case "9": total = cant * 50;
                           document.f1.total.value = "$" + total;
                        break;

                        case "10": total = cant * 48;
                           document.f1.total.value = "$" + total;
                        break;

                        default: document.f1.total.value = "Total";
                        break;
                        }
         break;

      }


      }
     


function calcular_granada(){
   var cant;
   var total;
   cant = document.f1.cantidad[document.f1.cantidad.selectedIndex].value; 


   var cant;
   var total;
   var atrac;
   atrac = document.f1.atractivos[document.f1.atractivos.selectedIndex].value;
   cant = document.f1.cantidad[document.f1.cantidad.selectedIndex].value;


   switch(atrac){
      case "1": switch(cant){
                  case "3": total = cant * 108;
                     document.f1.total.value = "$" + total;
                  break;

                  case "4": total = cant * 86;
                     document.f1.total.value = "$" + total;
                  break;

                  case "5": total = cant * 74;
                     document.f1.total.value = "$" + total;
                  break;

                  case "6": total = cant * 67;
                     document.f1.total.value = "$" + total;
                  break;

                  case "7": total = cant * 59;
                     document.f1.total.value = "$" + total;
                  break;

                  case "8": total = cant * 54;
                     document.f1.total.value = "$" + total;
                  break;

                  case "9": total = cant * 51;
                     document.f1.total.value = "$" + total;
                  break;

                  case "10": total = cant * 49;
                     document.f1.total.value = "$" + total;
                  break;

                  default: document.f1.total.value = "Total";

      }      
      break;

      case "2": switch(cant){
                  case "3": total = cant * 90;
                     document.f1.total.value = "$" + total; 
                  break;

                  case "4": total = cant * 67;
                     document.f1.total.value = "$" + total; 
                  break;

                  case "5": total = cant * 60;
                     document.f1.total.value = "$" + total; 
                  break;

                  case "6": total = cant * 52;
                     document.f1.total.value = "$" + total; 
                  break;

                  case "7": total = cant * 46;
                     document.f1.total.value = "$" + total;
                  break;

                  case "8": total = cant * 41;
                     document.f1.total.value = "$" + total;
                  break;

                  case "9": total = cant * 38;
                     document.f1.total.value = "$" + total;
                  break;

                  case "10": total = cant * 35;
                     document.f1.total.value = "$" + total;
                  break;

                  default: document.f1.total.value = "Total";
                  break;
   }
      break;
   }

}

function calcular_masaya(){
   var cant;
   var total;
   var atrac;
   atrac = document.f1.atractivos[document.f1.atractivos.selectedIndex].value;
   cant = document.f1.cantidad[document.f1.cantidad.selectedIndex].value;


   switch(atrac){
      case "1": switch(cant){
                  case "3": total = cant * 108;
                  document.f1.total.value = "$" + total;
                  break;
                  case "4": total = cant * 86;
                  document.f1.total.value = "$" + total;
                  break;
                  case "5": total = cant * 74;
                  document.f1.total.value = "$" + total;
                  break;
                  case "6": total = cant * 67;
                  document.f1.total.value = "$" + total;
                  break;
                  case "7": total = cant * 59;
                  document.f1.total.value = "$" + total;
                  break;
                  case "8": total = cant * 54;
                  document.f1.total.value = "$" + total;
                  break;
                  case "9": total = cant * 51;
                  document.f1.total.value = "$" + total;
                  break;
                  case "10": total = cant * 49;
                  document.f1.total.value = "$" + total;
                  break;
                  default: document.f1.total.value = "Total";

      }      
      break;

      case "2": switch(cant){
                  case "3": total = cant * 96;
                  document.f1.total.value = "$" + total;
                  break;
                  case "4": total = cant * 78;
                  document.f1.total.value = "$" + total;
                  break;
                  case "5": total = cant * 66;
                  document.f1.total.value = "$" + total;
                  break;
                  case "6": total = cant * 59;
                  document.f1.total.value = "$" + total;
                  break;
                  case "7": total = cant * 54;
                  document.f1.total.value = "$" + total;
                  break;
                  case "8": total = cant * 50;
                  document.f1.total.value = "$" + total;
                  break;
                  case "9": total = cant * 47;
                  document.f1.total.value = "$" + total;
                  break;
                  case "10": total = cant * 45;
                  document.f1.total.value = "$" + total;
                  break;
                  default: document.f1.total = "Total";
      }
      break;
   }


}


function calcular_leon(){
   var atrac;
   var total;
   var cant;
   atrac = document.f1.atractivos[document.f1.atractivos.selectedIndex].value;
   cant = document.f1.cantidad[document.f1.cantidad.selectedIndex].value;  

   
switch(atrac){
      case "1":  switch(cant){
                     case "4": total = cant * 79;
                        document.f1.total.value = "$" + total;
                     break;

                     case "5": total = cant * 67;
                        document.f1.total.value = "$" + total;
                     break;

                     case "6": total = cant * 60;
                        document.f1.total.value = "$" + total;
                     break;

                     case "7": total = cant * 55;
                        document.f1.total.value = "$" + total;
                     break;

                     case "8": total = cant * 51;
                        document.f1.total.value = "$" + total;
                     break;

                     case "9": total = cant * 48;
                        document.f1.total.value = "$" + total;
                     break;

                     case "10": total = cant * 46;
                        document.f1.total.value = "$" + total;
                     break;

                     default: document.f1.total = "Total";
                  }
  

           

      break;

      case "2": switch(cant){
                   case "4": total = cant * 84;
                        document.f1.total.value = "$" + total; 
                     break;  

                     case "5":
                     case "6":
                     case "7": total = cant * 67;
                        document.f1.total.value = "$" + total;
                     break;

                     case "8": total = cant * 64;
                        document.f1.total.value = "$" + total;
                     break;

                     case "9": total = cant * 50;
                        document.f1.total.value = "$" + total;
                     break;

                     case "10": total = cant * 48;
                        document.f1.total.value = "$" + total;
                     break;

                     default: document.f1.total.value = "Total";
                     break;
      }
      break;

      case "3": switch(cant){
                   case "4": total = cant * 82;
                        document.f1.total.value = "$" + total; 
                     break;  

                     case "5":
                     case "6":
                     case "7": total = cant * 65;
                        document.f1.total.value = "$" + total;
                     break;

                     case "8": total = cant * 62;
                        document.f1.total.value = "$" + total;
                     break;

                     case "9": total = cant * 48;
                        document.f1.total.value = "$" + total;
                     break;

                     case "10": total = cant * 46;
                        document.f1.total.value = "$" + total;
                     break;

                     default: document.f1.total.value = "Total";
                     break;
                   }
      break;
   }

}  





