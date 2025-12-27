// هذا الكود يقوم بحقن الشريط السفلي في أي صفحة تطلبه
document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
        <div class="bottom-nav">
            <div class="nav-item" onclick="location.href='تصميم.html'"><i class="fa-solid fa-house"></i><br>الرئيسية</div>
            <div class="nav-item"><i class="fa-solid fa-bell"></i><br>الإشعارات</div>
            <div class="nav-item"><i class="fa-solid fa-user-shield"></i><br>الأمن</div>
            <div class="nav-item"><i class="fa-solid fa-gear"></i><br>الإعدادات</div>
        </div>
    `;
    
    // إضافة الكود إلى نهاية جسم الصفحة
    document.body.insertAdjacentHTML('beforeend', navHTML);
});
