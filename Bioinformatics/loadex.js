
	var f = ">sp|P10997|IAPP_HUMAN Islet amyloid polypeptide OS=Homo sapiens GN=IAPP PE=1 SV=1
MGILKLQVFLIVLSVALNHLKATPIESHQVEKRKCNTATCATQRLANFLVHSSNNFGAIL
SSTNVGSNTYGKRNAVEVLKREPLNYLPL";
var s = "P10997";


document.getElementById("butt").addEventListener('click', function () {
    var text = document.getElementById('pseq');
    text.value += s;
});

