function a(n){
    if(n<0) {
    return 2;
    }
    x = a(n-2)*2;
    return x;
}
z = a(4) + a(1);
document.write(z);
