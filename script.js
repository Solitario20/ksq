let hesabla = document.querySelector('.topla');

hesabla.onclick = function () {
    dis = ((+ksq1.value + +ksq2.value + +ksq3.value + +ksq4.value + +ksq5.value + +ksq6.value + +ksq7.value + +ksq8.value)/8)* 0.4 + ((+bsq1.value + +bsq2.value)/2) * 0.6;
    document.getElementById('dis').innerHTML = `sizin illik qiymətiniz ${dis} bal olaraq dəyərləndirilir`
}