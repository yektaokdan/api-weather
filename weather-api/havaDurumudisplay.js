/* Header'ın normalde kendine ait bir arkaplan rengi var fakat
biz butona tıklandığında onu ortadan kaldırarak daha güzel bir
görüntü elde etmek için id ile çağırıp style üzerinden background
özelliğini none yapıyoruz ve böylece butona tıklandığında arka plan
ortadan kalkmış oluyor.
 */

var inputValue=document.querySelector('.inputValue');
function displayKaldir(){
    document.getElementById('header').style.background=('none')
    document.getElementById('header').style.transition=('all 1.2s ease 0s')
    document.getElementById('header').style.boxShadow=('none')
    document.getElementById('header').style.border=('none')
    
}