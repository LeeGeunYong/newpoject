let idchk = [];
const id = document.getElementById("id");

function idChk() {
    alert("중복확인 중");

      if (id.value === "") {
        alert("아이디를 입력해주세요.");
        id.focus();
        return;
    }
    

    if(idchk.includes(id.value)){
        alert("중복된 아이디 입니다");
        id.value = "";
    } else{
        alert("ID입력 완료~")
        idchk.push(id.value);
        id.value = "";
    }
}

id.addEventListener("keydown",(e) => {
    if(e.key =="Enter"){
        idChk();
    }
})
    
