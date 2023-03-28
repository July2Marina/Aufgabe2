// current date
function currentdate(){
    const days= ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const months= ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']  
    const now= new Date(); 
    const day= days[now.getUTCDay()];
    const date= now.getUTCDate();
    const month= months[now.getUTCMonth()];
    const year= now.getFullYear();
    const dateString =`${day},${month}, ${addLeadingZero(date)}, ${year} `;
    document.getElementById("currentdate").innerText = dateString;
}

// current time
function currenttime() {
    const now = new Date();
    const hour = addLeadingZero(now.getUTCHours());
    const minute = addLeadingZero(now.getUTCMinutes());
    const second= addLeadingZero(now.getUTCSeconds());
    const timeString= `${hour}:${minute}:${second}`;
    document.getElementById("currenttime").innerText = timeString;

}

function addLeadingZero(value) {
    if (value < 10) {
        return `0${value}`;
       
    } else {
        return value.toString();

    }
}
//Refresh
function refresh() {
    location.reload();
}