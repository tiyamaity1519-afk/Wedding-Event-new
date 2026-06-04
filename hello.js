

function formdigit() {
    let num1 = document.getElementById('num').ariaValueMax;
    let msg = document.getElementById('msg');

    let pattern = /^[0-9]{10}$/;

    if (pattern.test(num1)) {
        msg.innerHTML = 'Valid Mobile Number';
        msg.className 'success';
        return true;
    }


    else {
        msg.innerHTML = 'Invalid Mobile Number';
        msg.className 'error';
        return false;
    }
}
