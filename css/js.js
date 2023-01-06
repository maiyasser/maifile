// فانكشن للتاكد من ال
// form
// انو لو كانت الداتا فاضية وعمل 
// subment
//  يطلعله رسالة 
// alert 
//كتحذير ان الداتا فاضية


// فانكشن لشرط لو تحقق الشرط حينفذ المطلوب
function check() {
    //اذا الداتا مكانش فيها قيمة 
    //alert يطلع فيها
    //

    if (!document.form1.txt1.value || !document.form1.txt2.value) {
        alert("Enter all Data");
        return false;
    }
    else
        return true;
}