const id = document.getElementById("id");

const pwd = document.getElementById("pwd");

function trylogin(e) {


    if (e.key == "Enter") {
        if (id.value != "" && pwd.value != "") {
            alert("로그인 성공입니다")
            location.href="/html/qxgymhomelogout.html";
        } else {
            alert("아이디와 비밀번호 중 입력하지 않은 칸이 있습니다")
            e.target.value = "";
            pwd.value = "";
        }
    }

}

id.addEventListener("keydown",trylogin);
pwd.addEventListener("keydown",trylogin);

console.log("login.js loaded!");