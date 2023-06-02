function timGiaTriLonNhat(so) {
    let max = so[0];
    for(i=1;i<so.length;i++)
        if(so[i]>max){
            max=so[i];
        }
    return max;
   }
   // Ví dụ sử dụng
   console.log(timGiaTriLonNhat([5, 8, 3, 2, 9]));