let time = document.getElementById("time");

let myDate = () =>{
    let date = new Date();

    let formatTime = (date) =>{
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrpm = hours >= 12 ? "PM" : "AM";

        return `${hours}:${minutes}:${seconds} ${amOrpm}`;
    }

    time.innerHTML = formatTime(date);
}

myDate();
setInterval(myDate, 1000);