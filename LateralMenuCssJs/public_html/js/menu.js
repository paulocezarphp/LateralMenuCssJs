/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
     
     var botao_ligado = 0;
 
     $('#icone').click(function(){
         
	botao_ligado++;
        
        if(botao_ligado === 1){
            $('nav').fadeIn('500');
        }else{
            $('nav').fadeOut('500');
        }
        
        if(botao_ligado > 1){
            botao_ligado = 0;
        }
        
      });
 
});