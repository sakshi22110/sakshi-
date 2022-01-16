console.log("Script running...")
document.querySelector('.cros').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.hum').style.display = 'inline'
        document.querySelector('.cros').style.display = 'none'
    }
    else{
        document.querySelector('.hum').style.display = 'none'
        setTimeout
        document.querySelector('.cros').style.display = 'inline'
      
    }
})