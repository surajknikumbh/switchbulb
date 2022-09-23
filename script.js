let bulb=document.getElementById("bulb");
let btn=document.getElementById("switch")
btn.style.background="green"

const turnOn=()=>{
    // let bulb=document.getElementById("bulb");
    bulb.setAttribute('src','on.jpg');
    btn.innerText="OFF"
    btn.style.background="red"

};

const turnOff = () =>{
    // let bulb=document.getElementById("bulb");
    bulb.setAttribute('src','off.jpg');
    btn.innerText="ON"
    btn.style.background="green"

}

const toggleSwitch=()=>{
    
    let srcValue=bulb.getAttribute("src");
    console.log(srcValue);
    if(srcValue == "off.jpg"){
        turnOn();
        btn.innerText="OFF"
        btn.style.background="red"

    }else{
        turnOff();
        btn.innerText="ON"
        btn.style.background="green"

    }

}