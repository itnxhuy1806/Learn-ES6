var d = new Promise((resolve, reject) => {
     setTimeout(() => {
          if (true) {
               resolve('hello world');
          } else {
               reject('no bueno');
          }
          
     }, 1000)
});
// d.then((data) => console.log('success : ', data)).catch((error) => console.error('error : ', error));
d.then((data) => {
     console.log('success : ', data);
     throw new Error('err throw'); //Khi câu lệnh throw được thực thi, nó sẽ thoát ra khỏi khối try và đi đến khối catch . Và đoạn mã bên dưới câu lệnh throw không được thực thi.
     return "result then 1"
}).
     then((data) => console.log('success : ', data)). // then 2 nhận giá trị trả về từ then 1
     catch((error) => console.error('error: ', error));