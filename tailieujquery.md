NỘI DUNG KHOA HOC JQUERY
1/ Nắm tổng quan về jquerybmw
2/ Thao tác với Dom trong jquery 
3/ Thao tác với các thành phần như CSS, Forn, JSON, Events, Animate, AJAX, JqueryUI trong jquery
4/ Thiết lập tư duy viết code client cho mọi người
5/ Chuẩn hóa cách viết code cho mọi người


1/ What is Jquery?
2/ Jquery Selector.
3/ Jquery Events and Effects
4/ Callback function in JQUERY
5/ Dom manipulations i Jquery
6/ What is jquery UI 
7/ Widgets in Jquery
8/ Interactions in Jquery
9/ Theme Customization Using Jquery
10/ Jquery project

=========================
## Kiến thức I ##
fadeToggle(3000)
slideUp(): co nhỏ nội dung lại
slideDown(): Xu lý nội dung thả xuống
SlideToggle(): Tự động co nội dung cho phù hợp
addClass(): Là hàm dùng để thay đổi class của một thẻ nào đó
removeClass():
toggleClass(): Click vào thì tự động thêm class hoặc bỏ class nếu đã có rồi
sự kiện click: click(function(){})
$(tenphantu duoc click).fancybox()

Xử lý sự kiện click chuột: $(tenphantu duoc click).on('click', function(e){}) || $(tenphantu duoc click).click(function(e){})
Sử dụng hàm addClass
Hàm hiệu ứng cuộn chuột cho body: animate((scrollTop: 900))
Hàm tính vị trí 1 phần tử: $(tenphantu).offset(function(index, coordinates))
Thư viện gia tốc cho jquery: search với từ khóa: "easing jquery gsgd"{
    - Link về file html bằng thẻ script
    - sử dụng tên của cái gia tốc chuyển động sau đó tốc độ
    - Tên của gia tốc lấy trong file jquery.easing.js
}

## Tổng kết kiến thức I
1/ Hàm xử lý click : Xử lý việc click chuột vào phần tử nào đó
2/ Hàm addClass, removeClass, toggleClass:
- Xử lý việc thay đổi giao diện của phần tử nào đó
- Giao diện -> css -> class ->nếu thay đổi được class tức là = với việc thay đổi giao diện
3/ Hàm animate - scrollTop: Cho body di chuyển một đoạn theo yêu cầu
4/ Hàm slideUp, slideDown: Thay đổi việc hiển thị nội dung 
5/ Sử dụng thư viện easing: make beautiful

==============================================
## Kien thưc II ##
$(tenthanh phan đươc chon).datepicker({})
 showOtherMonths: true,
    selectOtherMonths: true,
    showButtonPanel: true,
    changeMonth: true,
    changeYear: true

tooltip(): when you hover input then a input text will show
 track: true ==> when you move pointer inside input then the input text will follow you
        show:{effect:'highlight',duration:5000, delay: 250}, 
        hide:{effect:'explode',duration:2000}
         ==> Have a lot of effect need know more
        duration:  Period show
        delay: Will show later

var $;
$('document').ready(function () {
    $('#div1').accordion({
         collapsible: true,
         icons:{header:'ui-icon-arrowrefresh-1-w', activeHeader:'ui-icon-caret-1-n'},
         animate: 2000,
         event: "mouseover",
    })
})

Accordion: Displays collapsible content panels for presenting information in a limited amount of space. Just close content when you open another content

Collapsible: You can open and close content like toggle

You can search everything in jquery user interface