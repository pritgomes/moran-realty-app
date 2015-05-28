//var mydesktopAPI = "mydesktop/commaus_2015-01-29_14-14-39_1.xml";



$.get('count-xml-files.php', function(data) {
  var arr = data.split('.xml');

  arr = $.grep(arr,function(n){ return(n) });
  
  arr.reverse();

  for(var i = 0; i < arr.length; i++){
    var xmlFile = "mydesktop/"+arr[i]+".xml";

    console.log("http://moranrealty.com.au/" + xmlFile);
    getDynamicContent(xmlFile,arr);
  }




});
    

function getDynamicContent(xmlFile,arr) {
    $.ajax({
        type: "GET",
        contentType: "application/xml; charset=utf-8",
        url: xmlFile,
        dataType: "xml",
        success: function (xml) {
            updateResult(xml,arr);
        }
    });
}

var myFuncCalls = 0;
var FullStr = "";
var jsonStr = "";
var FinalObj = "";
var removeProperties = [];
var propIDList = [];
var soldList = [];
var underContractList = [];
var totalProperties = [];
var currentProperties = [];
var tempResidential = [];
var tempRental = [];
var soldProperties = [];
var underContractProperties = [];

function updateResult(data,arr) {
    var json = $.xml2json(data);
    var string = JSON.stringify(json);

    myFuncCalls++;

    jsonStr += string;
    
    jsonStr += ",";

    if(myFuncCalls == arr.length-1){
        FullStr += "[";
        FullStr += jsonStr.slice(0,-1);
        FullStr += "]";

        //console.log(FullStr);

        FinalObj = $.parseJSON(FullStr);


         //console.log(FinalObj);

         $.each(FinalObj,function(key1,value1){
            $.each($.makeArray(value1.residential),function(key2,value2){
                if(value2.status != 'current'){
                  if($.inArray(value2.uniqueID,removeProperties) == -1) {
                    removeProperties.push(value2.uniqueID);
                    totalProperties.push(value2);
                  }  
                }

                if(value2.status == 'sold'){
                  if($.inArray(value2.uniqueID,soldList) == -1){
                    soldList.push(value2.uniqueID);
                    soldProperties.push(value2);
                  }  
                }

            });

         });


         $.each(FinalObj,function(key1,value1){
            $.each($.makeArray(value1.rental),function(key2,value2){
                if(value2.status != 'current'){
                  if($.inArray(value2.uniqueID,removeProperties) == -1) {
                    removeProperties.push(value2.uniqueID);
                    totalProperties.push(value2);
                  }  
                }
            });

         });

         $.each(FinalObj,function(key1,value1){
            $.each($.makeArray(value1.residential),function(key2,value2){

              if($.inArray(value2.uniqueID,removeProperties) == -1) {

                if($.inArray(value2.uniqueID,propIDList) == -1) {
                    
                    propIDList.push(value2.uniqueID);

                    tempResidential.push(value2);
                    currentProperties.push(value2);
                    totalProperties.push(value2);
                    
                }

                if(value2.underOffer.value == 'yes'){
                  if($.inArray(value2.uniqueID,underContractList) == -1){
                    underContractList.push(value2.uniqueID);
                    underContractProperties.push(value2);
                  }  
                }
              }   
            });

         });


         $.each(FinalObj,function(key1,value1){
            $.each($.makeArray(value1.rental),function(key2,value2){

              if($.inArray(value2.uniqueID,removeProperties) == -1) {

                if($.inArray(value2.uniqueID,propIDList) == -1) {

                    propIDList.push(value2.uniqueID);
                        
                    tempRental.push(value2);
                    currentProperties.push(value2);
                    totalProperties.push(value2);

                } 
              }       
            });

         });

         console.log("Total Properties = " + totalProperties.length);
         console.log("Removed Properties = " + removeProperties.length);
         console.log("Current Properties = " + currentProperties.length);
         console.log("Residential Properties = " + tempResidential.length);
         console.log("Rental Properties = " + tempRental.length);
         console.log("Sold Properties = " + soldProperties.length);

         displayDynamicContent(totalProperties, currentProperties, tempResidential, tempRental, soldProperties, underContractProperties);
      
    }

}
