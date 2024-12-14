var trafficLight = {
    red: "красный",
    yellow: "желтый",
    green: "зеленый"
}

var traffic = prompt("Выберите один из цветов светофора: ").toLocaleLowerCase().trim()

if(traffic === trafficLight.red){
    alert('Стоп')
}else if(traffic === trafficLight.yellow){
    alert('Подождите')
}else if(traffic === trafficLight.green){
    alert('Езжайте')
}else{
    alert('Выберите один из цветов светофора:')
}
for (let i = 20; i >= 0; i--) {
    console.log(i);
}