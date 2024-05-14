const display1=document.querySelector(".display1");
const display2=document.querySelector(".display2");
const bar=document.getElementById("bar");

const months=["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function showTime( ){

    // date
    const date1=new Date( );
    let DD=date1.getDate( );
    let MM=date1.getMonth( );
    let YYYY=date1.getFullYear( );
    let H=date1.getHours( );
    let M=date1.getMinutes( );
    var S=date1.getSeconds( );

    let interval=H>=12 ? "PM":"AM"; // AM,PM

    // 12 Hour format
    if (H == 0 || H == 24) { 
        H = 12;
    } else if (H > 12) {
        H = H - 12;
    } 

    // Adding Zero 
    H = H<10 ? "0"+H : H;
    M = M<10 ? "0"+M : M;
    S = S<10 ? "0"+S : S;
    DD = DD<10 ? "0"+DD : DD;
    

    // display 
    display1.innerHTML=`${DD}-${months[MM]}-${YYYY}`;
    display2.innerHTML=`${H} : ${M} : ${S} <span class="text-sm text-slate-700 font-semibold">${interval}</span>`;

    // animation
    bar.style.height = `${(S / 60) * 100}%`;

    setTimeout(showTime,1000);
}

showTime( );

