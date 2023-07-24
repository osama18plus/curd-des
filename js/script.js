let inputName = document.getElementById('InputName');
let cardNumber = document.getElementById('CardNumber');
let mM = document.getElementById('MM');
let yY = document.getElementById('YY');
let cvC = document.getElementById('InputCvC');
let submit = document.getElementById('confirm');
let wrongFormat = document.getElementById('wrong_msg');
let wrongFormat2 = document.getElementById('wrong_msg2');
let cantblank1 = document.getElementById('cant_blank1');
let cantblank2 = document.getElementById('cant_blank2');
let numcartOutpit = document.getElementById('output');
let name = document.getElementById('name');
let year = document.getElementById('MMInnerHtml');
let Day = document.getElementById('YYInnerHtml');
let outcvc = document.getElementById('cvc');
let ThankYou = document.getElementById('ThankYou');
let done = document.getElementById('continue');
let mode= 'true';
var space = '  ';
let num = 2;
var wrong = '';
var wrong2 = '';
var wrong3 = '';
var wrong4 = '';
var wrong5 = '';


// name card
inputName.onkeyup = function namecurd(){
    let test = inputName.value;
    if(test!='' &&test==+test){
        inputName.style.border='#ff0000 3px solid';
        wrongFormat2.style.display='block';
        wrongFormat2.style.color='#ff0000';
        wrong = 'true';
    }else{
        inputName.style.border='';
        wrongFormat2.style.display='none';
        wrong = 'false'
    }
}
// number card
cardNumber.onkeyup = function(){
    if(cardNumber.value.length > 16){
        cardNumber.style.border='#ff0000 3px solid';
        wrongFormat.style.display='block';
        wrongFormat.style.color='#ff0000';
        wrong2 = 'true'

    }else{
        cardNumber.style.border='';
        wrongFormat.style.display='none';
        wrong2 = 'false';
    }
}


// MM card
mM.onkeyup = function(){
    let mmv = mM.value;
    if(mmv!='' &&mmv>12||mmv<1&&mmv!=''){
        cantblank1.style.display='block';
        cantblank1.style.color='#ff0000';
        mM.style.border='3px #ff0000 solid'
        wrong3 = 'true';
    }else{
        cantblank1.style.display='none';
        mM.style.border=''
        wrong3 = 'false';
    }   
}
// YY card
yY.onkeyup = function(){
    let yyv = yY.value;
    if(yyv!='' &&yyv>31||yyv<1&&yyv!=''){
        cantblank1.style.display='block';
        cantblank1.style.color='#ff0000';
        yY.style.border='3px #ff0000 solid'
        wrong4 = 'true';
    }else{
        cantblank1.style.display='none';
        yY.style.border=''
        wrong4 = 'false';
    }   
}
// CVC card
cvC.onkeyup = function(){
    let cvcv = cvC.value;
    if(cvcv!='' &&cvcv.length>3||cvcv.length<1&&cvcv!=''){
        cantblank2.style.display='block';
        cantblank2.style.color='#ff0000';
        cvC.style.border='3px #ff0000 solid'
        wrong5 = 'true';
    }else{
        cantblank2.style.display='none';
        cvC.style.border='';
        wrong5 = 'false';
    }   
}
// confirm







    submit.onclick = function(){
        
        if(wrong==='true'||wrong2==='true'||wrong3==='true'||wrong4==='true'||wrong5==='true'||inputName.value==''||cardNumber.value==''||mM.value==''||yY.value==''||cvC.value==''){
            let Arr =[];
            let date =
            {
                name:inputName.value,
                num:cardNumber.value,
                month:mM.value,
                day:yY.value,
                c:cvC.value,
            }
            Arr.push(date)
            let NV = [date.num];
            numcartOutpit.innerHTML='';
            let NameV = '';
            name.innerHTML='';
            year.innerHTML='';
            Day.innerHTML='';
            outcvc.innerHTML='';
        }else{
            let Arr =[];
            let date =
            {
                name:inputName.value,
                num:cardNumber.value,
                month:mM.value,
                day:yY.value,
                c:cvC.value,
            }
            Arr.push(date)
            let NV = [date.num];
            numcartOutpit.innerHTML=NV;
            let NameV = [date.name];
            name.innerHTML=NameV;
            year.innerHTML=date.month;
            Day.innerHTML=date.day;
            outcvc.innerHTML=date.c;
            ThankYou.classList.add('test');
            let cut= Arr[0].num;
            
            if(cut.length>4){
                
                
            }else if(cut.length>=4&&cut.length<=8){
                console.log('less than 8')
            }
        }
        
    }
done.onclick = function(){
    ThankYou.classList.remove('test');
    let Arr =[];
            let date =
            {
                name:inputName.value,
                num:cardNumber.value,
                month:mM.value,
                day:yY.value,
                c:cvC.value,
            }
            Arr.push(date)
            let NV = [date.num];
            numcartOutpit.innerHTML='';
            let NameV = '';
            name.innerHTML='';
            year.innerHTML='';
            Day.innerHTML='';
            outcvc.innerHTML='';
            inputName.value='';
            cardNumber.value='';
            mM.value='';
            yY.value='';
            cvC.value='';

}













// submit.onclick = function(){
    
    
// }

// let Arr =[];
//         let date =
//         {
//             name:inputName.value,
//             num:cardNumber.value,
//             month:mM.value,
//             day:yY.value,
//             c:cvC.value,
//         }
//         Arr.push(date)
//         let NV = [date.num];
//         numcartOutpit.innerHTML=NV;
//         let NameV = [date.name];
//         name.innerHTML=NameV;
//         year.innerHTML=date.month;
//         Day.innerHTML=date.day;
//         outcvc.innerHTML=date.c;