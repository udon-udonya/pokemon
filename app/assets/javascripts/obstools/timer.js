console.log('loaded timer.js');

function showClock1() {
    var nowTime = new Date();

    var nowYear = nowTime.getFullYear();
    var nowMonth = nowTime.getMonth() + 1;
    var nowDate = nowTime.getDate();
    var nowDay = convDay(nowTime.getDay());
    var nowJpDay = convJpDay(nowTime.getDay());
    var nowHour = (nowTime.getHours() < 10) ? "0" + nowTime.getHours() : nowTime.getHours();
    var nowMin = (nowTime.getMinutes() < 10) ? "0" + nowTime.getMinutes() : nowTime.getMinutes();
    var nowSec = (nowTime.getSeconds() < 10) ? "0" + nowTime.getSeconds() : nowTime.getSeconds();
    var msg = nowHour + ":" + nowMin + ":" + nowSec;
    var msg2 = nowHour + ":" + nowMin;
    var msg3 = nowMonth + "月" + nowDate + "日";
    document.getElementById("RealtimeClockArea").innerHTML = msg;
    document.getElementById("RealtimeClockArea2").innerHTML = msg2;
    document.getElementById("RealtimeClockArea3").innerHTML = nowTime.toLocaleDateString();
    document.getElementById("RealtimeClockArea4").innerHTML = nowTime.toLocaleDateString() + " " + nowDay;
    document.getElementById("RealtimeClockArea5").innerHTML = nowTime.toDateString();
    document.getElementById("RealtimeClockArea6").innerHTML = msg3;
    document.getElementById("RealtimeClockArea7").innerHTML = msg3 + "(" + nowJpDay + ")";
    document.getElementById("RealtimeClockArea8").innerHTML = nowYear + "年" + msg3;
    document.getElementById("RealtimeClockArea9").innerHTML = nowYear + "年" + msg3 + "(" + nowJpDay + ")";
    document.getElementById("RealtimeClockArea10").innerHTML = nowTime.toUTCString();
}
setInterval('showClock1()', 1000);

function convDay(Day) {
    switch (Day) {
        case 0:
            return "Sun";
        case 1:
            return "Mon";
        case 2:
            return "Tue";
        case 3:
            return "Wed";
        case 4:
            return "Thu";
        case 5:
            return "Fri";
        case 6:
            return "Sat";
        default:
            return "";
    }
}

function convJpDay(Day) {
    switch (Day) {
        case 0:
            return "日";
        case 1:
            return "月";
        case 2:
            return "火";
        case 3:
            return "水";
        case 4:
            return "木";
        case 5:
            return "金";
        case 6:
            return "土";
        default:
            return "";
    }
}