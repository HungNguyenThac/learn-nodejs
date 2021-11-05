
$('.btn').click(()=>{
    const userName = $('.userName').val();
    const userPass = $('.userPass').val();
    const newPass = $('.newPass').val();
    $.ajax ({
        url: '/user/put/609d55f566f6262b2bb2a362',
        type: 'put',
        data: {
            userName,
            userPass,
            newPass,
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    })
})