let l={"1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"Ten","11":"eleven","12":"twelve","13":"thirteen","14":"forteen","15":"fifteen","16":"sixteen","17":"seventeen","18":"eighteen","19":"ninteen","20":"twenty","21":"twenty-one","22":"twenty-two","23":"twenty-three"}
let x={'1':'one','2':'two','3':'three','4':'four','5':'five','6':'six','7':'seven','8':'eight','9':'nine','10':'ten','11':'eleven','12':'twelve','13':'thirteen','14':'fourteen','15':'fifteen','16':'sixteen','17':'seventeen','18':'eighteen','19':'ninteen','20':'twenty','21':'twenty one','22':'twenty two','23':'twenty three','24':'twenty four','25':'twenty five','26':'twenty six','27':'twenty seven','28':'twenty eight','29':'twenty nine','30':'thirty','31':'thirty one','32':'thirty two','33':'thirty three','34':'thirty four','35':'thirty five','36':'thirty six','37':'thirty seven','38':'thirty eight','39':'thirty nine','40':'fourty','41':'foutry one','42':'fourty two','43':'fourty three','44':'fourty four','45':'fourty five','46':'fourty six','47':'fourty seven','48':'fourty eight','49':'fourty nine','50':'fifty','51':'fifty one','52':'fifty two','53':'fifty three','54':'fifty four','55':'fifty five','56':'fifty six','57':'fifty seven','58':'fifty eight','59':'fifty nine','60':'sixty'}
var a=require("readline-sync");

let h=a.questionInt("enter the hour : ");
let min=a.questionInt("enter the min : ")

for (let key in l){
     if (key==h && min==0){
        console.log(h+ " "+ "O'Clock")
     }
     else if(min<=10){
        if(key==h){
            console.log(x[min]+" "+"min  pass "+l[key]+ "O'Clock")
            break
        }
     }
     else if(min==15){
         console.log("Quater past" +" "+ l[h])
         break
     }
     else if(min<=29 ){
         console.log(x[min] + " "+ "min past"+" "+l[h]+" "+ "O'Clock")
         break
     }
     else if(min==30){
         console.log("half past" +" "+ l[h])
         break
     }
      
     else if(min==45){
         console.log("quater to"+ " "+ l[h+1])
         break
     }
     else if(min<=59){
        let v=60-min
        console.log(x[v] + " "+ "min to"+" "+l[h+1])
        break
     }

}