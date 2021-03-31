var button=document.querySelector('.button');
var inputValue=document.querySelector('.inputValue');
var name=document.querySelector('.name');
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp');
var contDiv=document.getElementById('container')

button.addEventListener('click',function(){
    /*fetch('api.openweathermap.org/data/2.5/weather?q={'+inputValue.value+'}&appid={4cc07df5dd0fc2fa6ded78a83d329ba3}')
    .then(response => response.json)
    .then(data => console.log(data))

    .catch(err => alert("Yanlış şehir adı!!"))*/

    //Alacağımız hava durumu bilgilerini api ile fetch yapısı kullanarak çağırıyoruz.
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=4cc07df5dd0fc2fa6ded78a83d329ba3')
    .then(response => response.json())
    .then(data => {
        var nameValue=data['name'];
        var tempValue=data['main']['temp'];
        var descValue=data['weather'][0]['description'];


        //Gerekli değişkenleri apiden gelen verilere eşitliyoruz.
        name.innerHTML=nameValue;
        //Kelvin olarak gelen değeri -273.15 diyerek Celcius'a eşitliyoruz.
        temp.innerHTML=tempValue-273.15+'°';
        desc.innerHTML=descValue;

        //açıklama textine göre arka plana gif ekliyoruz.
        if(desc.innerHTML=='broken clouds'){

            desc.innerHTML=('<img width=102px" src="img/cloudy.png" alt="">'+' '+'Parçalı bulutlu'+' • '+desc.innerHTML+' '+'<img width=102px" src="img/cloudy.png" alt="">')
        }

        else if(desc.innerHTML=='scattered clouds'){
            desc.innerHTML=('<img width=102px" src="img/scattered-thunderstorms.png" alt="">'+' '+'Dağınık bulutlu'+' • '+desc.innerHTML+' '+'<img width=102px" src="img/scattered-thunderstorms.png" alt="">')
        }
        else if(desc.innerHTML=='fog'){
            desc.innerHTML=('<img width=102px" src="img/sis.png" alt="">'+' '+'Sisli'+' • '+desc.innerHTML+' '+'<img width=102px" src="img/sis.png" alt="">')
        }
        else if(desc.innerHTML=='clear sky'){
            desc.innerHTML=('<img width=102px" src="img/sky.png" alt="">'+' '+'Açık hava'+' • '+desc.innerHTML+' '+'<img width=102px" src="img/sky.png" alt="">')
        }
        else if(desc.innerHTML=='few clouds'){
            desc.innerHTML=('<img width=102px" src="img/cloud.png" alt="">'+' '+'Az bulutlu'+' • '+desc.innerHTML+' '+'<img width=102px" src="img/cloud.png" alt="">')
        }
        else if(desc.innerHTML=='light rain'){
            desc.innerHTML=('<img width=102px" src="img/rain.png" alt="">'+' '+'Az yağmurlu'+' • '+desc.innerHTML+' '+'<img width=102px" src="img/rain.png" alt="">')
        }
        else if(desc.innerHTML=='overcast clouds'){
            desc.innerHTML=('<img width=102px" src="img/cloud.png" alt="">'+' '+'Kapalı bulutlu'+' • '+desc.innerHTML+' '+'<img width=102px" src="img/cloud.png" alt="">')
        }
        else if(desc.innerHTML=='light snow'){
            desc.innerHTML=('<img width=102px" src="img/snowflake.png" alt="">'+' '+'Az kar yağışlı'+' • '+desc.innerHTML+' '+'<img width=102px" src="img/snowflake.png" alt="">')
        }
        else if(desc.innerHTML=='snow'){
            desc.innerHTML=('<img width=102px" src="img/snowflake.png" alt="">'+' '+'Kar yağışlı'+' • '+desc.innerHTML+' '+'<img width=102px" src="img/snowflake.png" alt="">')
        }
        else if(desc.innerHTML=='dust'){
            desc.innerHTML=('<img width=102px" src="img/sandstorm.png" alt="">'+' '+'Tozlu'+' • '+desc.innerHTML+' '+'<img width=102px" src="img/sandstorm.png" alt="">')
        }
    })
    


    .catch(err => alert("Yanlış şehir adı!!"))
    
})


/*fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=4cc07df5dd0fc2fa6ded78a83d329ba3')
.then(response => response.json)
.then(data => console.log(data))

.catch(err => alert("Yanlış şehir adı!!"))*/