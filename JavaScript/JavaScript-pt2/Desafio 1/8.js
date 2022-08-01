/*[ ] Escreva um programa onde, você cria uma função geradora de desconto.
A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, 
um booleando que diz se o cliente vai pagar a vista ou não)
Os descontos funcionam da seguinte forma:*/


function calculateDiscount(name, value, isFirstPurchase, isCashPayment){

        if(isFirstPurchase && isCashPayment){
            if(value > 1000){}
            else if(value < 500){}
            else{}
        }

        if(isFirstPurchase && !isCashPayment){

        }
        if(!isFirstPurchase && isCashPayment){

        }

        if(!isFirstPurchase && !isCashPayment){
            if(value > 1000){}
            else if(value < 500){
                Math.random() * (20 - 10) + 10;
            }
            else{}
        }



    }