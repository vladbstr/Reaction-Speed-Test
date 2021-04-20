
let hasStarted = false;
let startAt = null;
let stopAt= null;
let average_val=null;
let average_vec=[];
let time= null;
let ok=0;

function mouseHandler(event) {
    if (hasStarted==false) {
        start()
    } else {
        stop()
    }
}

function keyHandler(event){
    if (hasStarted==false) {
        start()
    } else {
        stop()
    }

}

window.addEventListener("mousedown", mouseHandler);
window.addEventListener("keydown", keyHandler);

function start(){
    document.getElementById('welcome').innerText = 'Wait for green colour!'
    document.getElementById('intruction').innerText=''
    hasStarted=true;
    if(ok!==0){
        clearTimeout(time);
        time = null;

    }
    //random time generating
    let random_time=Math.random()*(5000-2000)+2000;
    console.log(random_time)
    //setTimeout(function, milliseconds ) Executes a function, after waiting a specified number of milliseconds.
    if (hasStarted==true){
       time=setTimeout(green_appear,random_time)
    }
    
    
}

function green_appear(){
    document.getElementById('body').style='background-color:green;'
    document.getElementById('welcome').innerText = 'Click!'
    startAt=Date.now()
    console.log('dasdasd'+startAt)
    ok=1;
}

function stop(){
    if(startAt!=null)
    {
        stopAt=Date.now()-startAt;
        let sum=0;
        document.getElementById('body').style='background-color:blue;'
        document.getElementById('welcome').innerText = stopAt + ' ms'
        document.getElementById('intruction').innerText='Click to restart!'
        average_vec.push(stopAt)
        console.log(average_vec)
        for(i=0;i<average_vec.length;i++){
        sum+=average_vec[i]
        console.log(average_vec[i])
        }
        average_val=sum/average_vec.length;
        console.log('average'+average_val)
        div=document.createElement('div');
        div.setAttribute("id", "div1")
        div.innerText=stopAt+' ms';
        document.getElementById('score').appendChild(div);
        document.getElementById('speed').innerText=average_val.toFixed(0)+' ms';
        startedAt = null;
    }
    else
    {
        document.getElementById("welcome").innerText = 'You clicked too fast!';
        document.getElementById("body").style = 'background-color:red;';
        ok=0;
        
        
    }
    

    hasStarted = false;

}