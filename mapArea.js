/**
 * Created by benbentime on 2015/9/22.
 */
var originalWidth= 750,arr,mapWidth = document.body.clientWidth;
console.log(mapWidth);
var areaAll  = document.getElementsByClassName("MXC_hotPhotoItem");
console.log(areaAll);
for(var i = 0;i< areaAll.length;i++){
    arr = areaAll[i].getAttribute("coords").split(",");
    for (var j = 0; j < arr.length; j++) {
        arr[j] = (arr[j] / originalWidth) * mapWidth;
    }
    console.log(arr);
    console.log(arr);
    areaAll[i].setAttribute("coords",arr)
}